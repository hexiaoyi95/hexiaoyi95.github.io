// Publications data for Shawn He
const publications = [
  {
    title: 'Enhancing HEVC Compressed Videos with a Partition-Masked Convolutional Neural Network',
    venue: 'International Conference on Image Processing (ICIP)',
    year: '2018',
    authors: 'He, Xiaoyi, et al.',
    note: 'Oral presentation',
    abstract: 'We propose a novel partition-masked convolutional neural network (CNN) that utilizes partition information in video encoder to enhance compressed videos. Achieved approximately 10% bitrate savings on benchmark sequences.',
    link: 'https://arxiv.org/abs/1805.03894',
    code: 'https://github.com/hexiaoyi95/Partition-aware',
    project: 'https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html',
    citations: 98,
    links: [
      { type: 'external', url: 'https://arxiv.org/abs/1805.03894', label: 'Paper' },
      { type: 'code', url: 'https://github.com/hexiaoyi95/Partition-aware', label: 'Code' },
      { type: 'project', url: 'https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html', label: 'Project Page' },
    ],
  },
  {
    title: 'A Multimodal Lossless Coding Method for Skeletons in Videos',
    venue: 'IEEE International Conference on Multimedia & Expo Workshop (ICME)',
    year: '2019',
    authors: 'He, Xiaoyi, et al.',
    abstract: 'This paper presents a lossless compression method for skeleton data in videos based on spatial and temporal correlation, achieving about 84% compression ratio on test surveillance sequences.',
    citations: 2,
    link: 'https://ieeexplore.ieee.org/document/8794871',
    links: [
      { type: 'external', url: 'https://ieeexplore.ieee.org/document/8794871', label: 'Paper' },
    ],
  },
  {
    title: 'Partition-aware Adaptive Switching Networks for Post-processing in HEVC',
    venue: 'IEEE Transactions on Multimedia',
    year: '2020',
    authors: 'Lin, Weiyao, He, Xiaoyi, et al.',
    abstract: 'We introduce an adaptive-switching neural network (ASN) that consists of multiple independent CNNs to adaptively handle the variations in content and distortion within compressed video frames, further reducing visual artifacts.',
    link: 'https://arxiv.org/abs/1912.11604',
    code: 'https://github.com/hexiaoyi95/Partition-aware',
    project: 'https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html',
    citations: 61,
    links: [
      { type: 'external', url: 'https://arxiv.org/abs/1912.11604', label: 'Paper' },
      { type: 'code', url: 'https://github.com/hexiaoyi95/Partition-aware', label: 'Code' },
      { type: 'project', url: 'https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html', label: 'Project Page' },
    ],
  },
  {
    title: 'Key-point Sequence Lossless Compression for Intelligent Video Analysis',
    venue: 'IEEE MultiMedia',
    year: '2020',
    authors: 'Lin, Weiyao, He, Xiaoyi, et al.',
    abstract: 'This paper presents a lossless compression method for key-point sequences in videos to enable efficient intelligent video analysis.',
    citations: 23,
    link: 'https://ieeexplore.ieee.org/document/9080093/',
    links: [
      { type: 'external', url: 'https://ieeexplore.ieee.org/document/9080093/', label: 'Paper' },
    ],
  },
  {
    title: 'Adaptive Lossless Compression of Skeleton Sequences',
    venue: 'Signal Processing: Image Communication',
    year: '2020',
    authors: 'Lin, Weiyao, Shinde, TS, Dai, Wenrui, Liu, Ming, He, Xiaoyi, et al.',
    abstract: 'An adaptive compression framework for skeleton data that dynamically selects optimal coding methods based on data characteristics.',
    citations: 2,
    link: 'https://www.sciencedirect.com/science/article/pii/S092359652030001X',
    links: [
      { type: 'external', url: 'https://www.sciencedirect.com/science/article/pii/S092359652030001X', label: 'Paper' },
    ],
  },
];

export default publications; 