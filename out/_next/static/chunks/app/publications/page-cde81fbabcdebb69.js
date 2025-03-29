(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{809:function(e,t,a){Promise.resolve().then(a.bind(a,6968))},6968:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var r=a(7437),s=a(7648),i=a(9089),n=a(3501);function o(){let e=[...n.Z].sort((e,t)=>(t.citations||0)-(e.citations||0));return(0,r.jsx)("div",{className:"container mx-auto py-8 sm:py-12 px-4",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,r.jsx)("h1",{className:"text-3xl sm:text-4xl font-bold mb-6 sm:mb-8",children:"Publications"}),(0,r.jsx)("div",{className:"space-y-6 sm:space-y-8",children:e.map((e,t)=>(0,r.jsxs)("div",{className:"card p-4 sm:p-6 bg-white dark:bg-night-lighter rounded-lg shadow-sm",children:[(0,r.jsx)("h2",{className:"text-xl sm:text-2xl font-bold mb-2",children:e.title}),(0,r.jsx)("p",{className:"text-base sm:text-lg text-aurora dark:text-aurora-light mb-1",children:e.authors}),(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between mb-2 text-gray-700 dark:text-gray-300",children:[(0,r.jsx)("span",{className:"text-sm sm:text-base",children:e.venue}),(0,r.jsxs)("span",{className:"text-sm sm:text-base mt-1 sm:mt-0 font-medium",children:[e.year,e.note&&(0,r.jsxs)("span",{className:"text-aurora-dark dark:text-aurora-light ml-1",children:["(",e.note,")"]})]})]}),void 0!==e.citations&&(0,r.jsxs)("div",{className:"flex items-center text-sm text-aurora-dark dark:text-aurora-light mb-4",children:[(0,r.jsx)(i.tLl,{className:"mr-1"}),(0,r.jsxs)("span",{children:[e.citations," citation",1!==e.citations?"s":""]})]}),e.abstract&&(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("h3",{className:"text-lg sm:text-xl font-semibold mb-2",children:"Abstract"}),(0,r.jsx)("p",{className:"text-sm sm:text-base text-gray-700 dark:text-gray-300",children:e.abstract})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:e.links&&e.links.length>0?e.links.map((e,t)=>(0,r.jsxs)(s.default,{href:e.url,className:"inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",target:"_blank",rel:"noopener noreferrer",children:["pdf"===e.type&&(0,r.jsx)(i.yRW,{className:"mr-1"}),"external"===e.type&&(0,r.jsx)(i.CkN,{className:"mr-1"}),"code"===e.type&&(0,r.jsx)(i.tvD,{className:"mr-1"}),"project"===e.type&&(0,r.jsx)(i.lMi,{className:"mr-1"}),e.label]},t)):(0,r.jsxs)(r.Fragment,{children:[e.link&&(0,r.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",children:[(0,r.jsx)(i.CkN,{className:"mr-1"})," Paper"]}),e.code&&(0,r.jsxs)("a",{href:e.code,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",children:[(0,r.jsx)(i.tvD,{className:"mr-1"})," Code"]}),e.project&&(0,r.jsxs)("a",{href:e.project,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",children:[(0,r.jsx)(i.lMi,{className:"mr-1"})," Project Page"]})]})})]},t))})]})})}},3501:function(e,t){"use strict";t.Z=[{title:"Enhancing HEVC Compressed Videos with a Partition-Masked Convolutional Neural Network",venue:"International Conference on Image Processing (ICIP)",year:"2018",authors:"He, Xiaoyi, et al.",note:"Oral presentation",abstract:"We propose a novel partition-masked convolutional neural network (CNN) that utilizes partition information in video encoder to enhance compressed videos. Achieved approximately 10% bitrate savings on benchmark sequences.",link:"https://arxiv.org/abs/1805.03894",code:"https://github.com/hexiaoyi95/Partition-aware",project:"https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html",citations:98,links:[{type:"external",url:"https://arxiv.org/abs/1805.03894",label:"Paper"},{type:"code",url:"https://github.com/hexiaoyi95/Partition-aware",label:"Code"},{type:"project",url:"https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html",label:"Project Page"}]},{title:"A Multimodal Lossless Coding Method for Skeletons in Videos",venue:"IEEE International Conference on Multimedia & Expo Workshop (ICME)",year:"2019",authors:"He, Xiaoyi, et al.",abstract:"This paper presents a lossless compression method for skeleton data in videos based on spatial and temporal correlation, achieving about 84% compression ratio on test surveillance sequences.",citations:2,link:"https://ieeexplore.ieee.org/document/8794871",links:[{type:"external",url:"https://ieeexplore.ieee.org/document/8794871",label:"Paper"}]},{title:"Partition-aware Adaptive Switching Networks for Post-processing in HEVC",venue:"IEEE Transactions on Multimedia",year:"2020",authors:"Lin, Weiyao, He, Xiaoyi, et al.",abstract:"We introduce an adaptive-switching neural network (ASN) that consists of multiple independent CNNs to adaptively handle the variations in content and distortion within compressed video frames, further reducing visual artifacts.",link:"https://arxiv.org/abs/1912.11604",code:"https://github.com/hexiaoyi95/Partition-aware",project:"https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html",citations:61,links:[{type:"external",url:"https://arxiv.org/abs/1912.11604",label:"Paper"},{type:"code",url:"https://github.com/hexiaoyi95/Partition-aware",label:"Code"},{type:"project",url:"https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html",label:"Project Page"}]},{title:"Key-point Sequence Lossless Compression for Intelligent Video Analysis",venue:"IEEE MultiMedia",year:"2020",authors:"Lin, Weiyao, He, Xiaoyi, et al.",abstract:"This paper presents a lossless compression method for key-point sequences in videos to enable efficient intelligent video analysis.",citations:23,link:"https://ieeexplore.ieee.org/document/9080093/",links:[{type:"external",url:"https://ieeexplore.ieee.org/document/9080093/",label:"Paper"}]},{title:"Adaptive Lossless Compression of Skeleton Sequences",venue:"Signal Processing: Image Communication",year:"2020",authors:"Lin, Weiyao, Shinde, TS, Dai, Wenrui, Liu, Ming, He, Xiaoyi, et al.",abstract:"An adaptive compression framework for skeleton data that dynamically selects optimal coding methods based on data characteristics.",citations:2,link:"https://www.sciencedirect.com/science/article/pii/S092359652030001X",links:[{type:"external",url:"https://www.sciencedirect.com/science/article/pii/S092359652030001X",label:"Paper"}]}]}},function(e){e.O(0,[699,599,971,117,744],function(){return e(e.s=809)}),_N_E=e.O()}]);