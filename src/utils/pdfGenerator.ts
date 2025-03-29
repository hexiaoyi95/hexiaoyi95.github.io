import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generates a PDF from an HTML element and triggers a download
 * @param element The HTML element to convert to PDF
 * @param filename The name of the PDF file to download
 */
export const generatePDF = async (element: HTMLElement, filename: string = 'resume.pdf') => {
  try {
    console.log('Starting PDF generation process...');
    
    // Extract name from the header for metadata
    const nameElement = element.querySelector('h1');
    const name = nameElement?.textContent || 'Resume';
    
    // Create jsPDF instance with metadata
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
    });
    
    // Add metadata
    pdf.setProperties({
      title: `${name} - Resume`,
      subject: 'Professional Resume',
      author: name,
      keywords: 'resume, cv, professional',
      creator: 'Resume Generator'
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Create a clone of the element to modify its styles for PDF generation
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Force light mode for printing
    clone.classList.add('light');
    clone.classList.remove('dark');
    
    // Apply styles for better PDF output and more compact layout
    const elementsToFix = clone.querySelectorAll('*');
    elementsToFix.forEach(el => {
      if (el instanceof HTMLElement) {
        try {
          // Reset background colors to white
          el.style.backgroundColor = 'white';
          
          // Set text color to dark
          el.style.color = '#333';
          
          // Increase line height slightly to prevent text cutting
          if (el.style.lineHeight) {
            const currentLineHeight = parseFloat(el.style.lineHeight);
            el.style.lineHeight = `${currentLineHeight * 1.1}`;
          } else {
            el.style.lineHeight = '1.4';
          }
          
          // Reduce margins and padding to make layout more compact
          if (el.tagName === 'P' || el.tagName === 'LI' || el.tagName === 'H3' || el.tagName === 'H2' || el.tagName === 'DIV') {
            el.style.marginBottom = '3px';
            el.style.marginTop = '3px';
            if (el.style.paddingBottom) {
              const paddingBottom = parseFloat(el.style.paddingBottom);
              if (paddingBottom > 5) {
                el.style.paddingBottom = '5px';
              }
            }
            if (el.style.paddingTop) {
              const paddingTop = parseFloat(el.style.paddingTop);
              if (paddingTop > 5) {
                el.style.paddingTop = '5px';
              }
            }
          }
          
          // Style sub-bullets properly
          if (el.classList.contains('list-circle')) {
            el.style.marginLeft = '12px';
            el.style.marginTop = '2px';
            el.style.marginBottom = '2px';
          }
          
          // Style sub-bullets list items
          if (el.tagName === 'LI' && el.parentElement?.classList.contains('list-circle')) {
            el.style.fontSize = '0.9em';
            el.style.color = '#444';
            el.style.marginBottom = '1px';
            el.style.marginTop = '1px';
          }
          
          // Make sections more compact
          if (el.tagName === 'SECTION') {
            el.style.marginBottom = '4px';
            el.style.paddingBottom = '2px';
          }
          
          // Fix hover states
          const classes = el.className.split(' ');
          const newClasses = classes.filter(cls => !cls.includes('hover:'));
          el.className = newClasses.join(' ');
        } catch (e) {
          console.warn('Error styling element for PDF', e);
        }
      }
    });
    
    // Create a temporary container for our clone with better styling for PDF output
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '-9999px';
    container.style.width = `${pdfWidth * 4}px`; // Use wider container to avoid text wrapping issues
    container.style.padding = '20px';
    container.style.backgroundColor = 'white';
    container.appendChild(clone);
    document.body.appendChild(container);
    
    // Wait a moment for fonts to load and styles to apply
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Get all elements to render (header + sections)
    const headerElement = clone.querySelector('.flex.flex-col.sm\\:flex-row') as HTMLElement;
    const resumeSections = Array.from(clone.querySelectorAll('section'));
    const allElements = headerElement ? [headerElement, ...resumeSections] : resumeSections;
    
    // Rendering configuration
    const padding = 10; // mm
    const sectionSpacing = 2; // mm - further reduced for compact layout
    let currentY = padding;
    let pageNum = 1;
    
    console.log(`Processing ${allElements.length} elements for PDF...`);
    
    // Process each element (header + sections)
    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i];
      console.log(`Processing element ${i+1}/${allElements.length}: ${element.tagName}${element.className ? ' with classes ' + element.className : ''}`);
      
      // Render the element to canvas
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        allowTaint: true,
        // Add minimal extra height
        height: element.offsetHeight + 5
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdfWidth - (padding * 2);
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      console.log(`Element ${i+1} height: ${imgHeight}mm, currentY: ${currentY}mm, page height: ${pdfHeight}mm`);
      
      // Check if this element will fit on the current page
      if (currentY + imgHeight > pdfHeight - padding) {
        console.log(`Element ${i+1} doesn't fit on page ${pageNum}, creating new page`);
        pdf.addPage();
        pageNum++;
        currentY = padding;
      }
      
      // Add the element to the PDF
      pdf.addImage(imgData, 'PNG', padding, currentY, imgWidth, imgHeight);
      console.log(`Added element ${i+1} to page ${pageNum} at y=${currentY}mm`);
      
      // Update the Y position for the next element
      currentY += imgHeight + sectionSpacing;
    }
    
    // Clean up the temporary container
    document.body.removeChild(container);
    
    console.log(`PDF generation complete with ${pageNum} pages.`);
    
    // Save and download the PDF
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
}; 