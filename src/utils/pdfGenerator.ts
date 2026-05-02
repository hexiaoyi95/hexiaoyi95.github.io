import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PAGE_PADDING_MM = 10;
const BLOCK_GAP_MM = 2.6;
const RENDER_WIDTH_PX = 900;

function stripInteractiveClasses(root: HTMLElement) {
  root.querySelectorAll('*').forEach((node) => {
    if (!(node instanceof HTMLElement) || typeof node.className !== 'string') return;
    node.className = node.className
      .split(' ')
      .filter((className) => !className.includes('hover:') && !className.includes('focus:'))
      .join(' ');
  });
}

function createPdfStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .pdf-export {
      position: relative !important;
      overflow: hidden !important;
      width: ${RENDER_WIDTH_PX}px !important;
      border: 3px solid #070910 !important;
      border-radius: 30px !important;
      background:
        radial-gradient(circle at 10% 0%, rgba(233, 65, 47, 0.13), transparent 260px),
        radial-gradient(circle at 90% 0%, rgba(36, 104, 255, 0.13), transparent 260px),
        repeating-linear-gradient(-12deg, rgba(243, 184, 75, 0.055) 0 10px, transparent 10px 22px),
        #fffaf0 !important;
      box-shadow: none !important;
      color: #070910 !important;
      font-family: Arial, Helvetica, sans-serif !important;
      padding: 30px !important;
    }
    .pdf-export::before,
    .pdf-export::after {
      display: none !important;
    }
    .pdf-export * {
      box-shadow: none !important;
      text-shadow: none !important;
      color: #070910 !important;
      line-height: 1.35 !important;
    }
    .pdf-export a,
    .pdf-export .text-aurora,
    .pdf-export .text-aurora-dark,
    .pdf-export .text-aurora-light,
    .pdf-export .text-primary-600,
    .pdf-export .dark\\:text-primary-400 {
      color: #2468ff !important;
    }
    .pdf-export .text-gray-600,
    .pdf-export .text-gray-700,
    .pdf-export .text-slate-700,
    .pdf-export .dark\\:text-gray-300,
    .pdf-export .dark\\:text-gray-400 {
      color: #4b5563 !important;
    }
    .pdf-export h1 {
      color: #070910 !important;
      font-size: 38px !important;
      font-weight: 900 !important;
      letter-spacing: -0.055em !important;
      margin: 0 0 8px !important;
    }
    .pdf-export h2 {
      display: flex !important;
      align-items: center !important;
      gap: 9px !important;
      border: 0 !important;
      border-bottom: 3px solid #070910 !important;
      color: #070910 !important;
      font-size: 20px !important;
      font-weight: 900 !important;
      letter-spacing: -0.03em !important;
      margin: 16px 0 10px !important;
      padding: 0 0 6px !important;
    }
    .pdf-export h2::after {
      content: '' !important;
      flex: 1 !important;
      height: 7px !important;
      border-radius: 999px !important;
      background:
        repeating-linear-gradient(90deg, #e9412f 0 18px, transparent 18px 30px),
        linear-gradient(90deg, #e9412f, #2468ff) !important;
      opacity: 0.82 !important;
    }
    .pdf-export h3 {
      color: #070910 !important;
      font-size: 17px !important;
      font-weight: 850 !important;
      margin: 0 0 3px !important;
    }
    .pdf-export h2 svg,
    .pdf-export h3 svg {
      color: #e9412f !important;
      fill: #e9412f !important;
    }
    .pdf-export section {
      margin: 0 !important;
      padding: 0 !important;
      break-inside: auto !important;
      page-break-inside: auto !important;
    }
    .pdf-export section > div > div,
    .pdf-export .pdf-list-item,
    .pdf-export .bg-white,
    .pdf-export .dark\\:bg-night-lighter {
      border: 2px solid rgba(7, 9, 16, 0.16) !important;
      border-radius: 14px !important;
      background: rgba(255, 255, 255, 0.88) !important;
      padding: 10px 12px !important;
      margin: 0 0 8px !important;
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }
    .pdf-export ul {
      margin: 4px 0 0 16px !important;
      padding: 0 !important;
    }
    .pdf-export li {
      margin: 0 0 4px !important;
      padding: 0 !important;
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }
    .pdf-export p,
    .pdf-export div {
      margin-top: 0 !important;
      margin-bottom: 3px !important;
    }
    .pdf-export .download-btn,
    .pdf-export [role='alert'] {
      display: none !important;
    }
  `;
  return styleElement;
}

function collectRenderUnits(clone: HTMLElement) {
  const header = clone.querySelector('.flex.flex-col.sm\\:flex-row') as HTMLElement | null;
  const units: HTMLElement[] = [];

  if (header) {
    units.push(header);
  }

  clone.querySelectorAll('section').forEach((section) => {
    const heading = section.querySelector(':scope > h2') as HTMLElement | null;
    if (heading) {
      units.push(heading);
    }

    const body = Array.from(section.children).find((child) => child !== heading) as HTMLElement | undefined;
    if (!body) return;

    const directItems = Array.from(body.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );

    if (directItems.length > 0) {
      units.push(...directItems);
    } else {
      units.push(body);
    }
  });

  return units;
}

async function renderElement(element: HTMLElement) {
  return html2canvas(element, {
    scale: 2.25,
    useCORS: true,
    logging: false,
    backgroundColor: null,
    allowTaint: true,
  });
}

function addCanvasToPdf(
  pdf: jsPDF,
  canvas: HTMLCanvasElement,
  currentY: number,
  pageWidth: number,
  pageHeight: number,
) {
  const imageWidth = pageWidth - PAGE_PADDING_MM * 2;
  const imageHeight = (canvas.height * imageWidth) / canvas.width;
  const maxY = pageHeight - PAGE_PADDING_MM;

  if (currentY + imageHeight <= maxY) {
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', PAGE_PADDING_MM, currentY, imageWidth, imageHeight);
    return currentY + imageHeight + BLOCK_GAP_MM;
  }

  if (imageHeight <= pageHeight - PAGE_PADDING_MM * 2) {
    pdf.addPage();
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', PAGE_PADDING_MM, PAGE_PADDING_MM, imageWidth, imageHeight);
    return PAGE_PADDING_MM + imageHeight + BLOCK_GAP_MM;
  }

  // Rare fallback for an oversized block: slice the canvas at page boundaries.
  let sourceY = 0;
  let nextY = currentY;
  const pxPerMm = canvas.width / imageWidth;

  while (sourceY < canvas.height) {
    const availableMm = pageHeight - PAGE_PADDING_MM - nextY;
    const sliceHeightPx = Math.min(canvas.height - sourceY, Math.floor(availableMm * pxPerMm));

    if (sliceHeightPx <= 0) {
      pdf.addPage();
      nextY = PAGE_PADDING_MM;
      continue;
    }

    const slice = document.createElement('canvas');
    slice.width = canvas.width;
    slice.height = sliceHeightPx;
    const context = slice.getContext('2d');
    if (!context) break;

    context.drawImage(canvas, 0, sourceY, canvas.width, sliceHeightPx, 0, 0, canvas.width, sliceHeightPx);
    const sliceHeightMm = (slice.height * imageWidth) / slice.width;
    pdf.addImage(slice.toDataURL('image/png'), 'PNG', PAGE_PADDING_MM, nextY, imageWidth, sliceHeightMm);

    sourceY += sliceHeightPx;
    nextY += sliceHeightMm;

    if (sourceY < canvas.height) {
      pdf.addPage();
      nextY = PAGE_PADDING_MM;
    }
  }

  return nextY + BLOCK_GAP_MM;
}

/**
 * Generates a themed PDF from an HTML resume element and triggers a download.
 */
export const generatePDF = async (element: HTMLElement, filename: string = 'resume.pdf') => {
  const container = document.createElement('div');

  try {
    const nameElement = element.querySelector('h1');
    const name = nameElement?.textContent || 'Resume';

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
    });

    pdf.setProperties({
      title: `${name} - Resume`,
      subject: 'Professional Resume',
      author: name,
      keywords: 'resume, cv, video ai, frame generation',
      creator: 'Personal Website Resume Export',
    });

    const clone = element.cloneNode(true) as HTMLElement;
    clone.classList.add('pdf-export', 'light');
    clone.classList.remove('dark');
    clone.appendChild(createPdfStyles());
    stripInteractiveClasses(clone);

    container.style.position = 'fixed';
    container.style.left = '-10000px';
    container.style.top = '0';
    container.style.width = `${RENDER_WIDTH_PX}px`;
    container.style.background = '#fffaf0';
    container.appendChild(clone);
    document.body.appendChild(container);

    await document.fonts?.ready;
    await new Promise((resolve) => setTimeout(resolve, 250));

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let currentY = PAGE_PADDING_MM;

    const units = collectRenderUnits(clone);
    for (const unit of units) {
      const canvas = await renderElement(unit);
      currentY = addCanvasToPdf(pdf, canvas, currentY, pageWidth, pageHeight);
    }

    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  } finally {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
};
