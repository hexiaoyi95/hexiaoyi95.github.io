// Publications and Patents data for Shawn He
export interface PublicationItem {
  type: 'publication' | 'patent';
  title: string;
  venue?: string;
  patentNumber?: string; 
  status?: string; // for patents: e.g. "Granted", "Pending", "Filed"
  year: string;
  authors: string;
  note?: string;
  abstract?: string;
  link?: string;
  code?: string;
  project?: string;
  citations?: number;
  links?: {
    type: 'external' | 'pdf' | 'code' | 'project' | 'patent';
    url: string;
    label: string;
  }[];
}

const publications: PublicationItem[] = [
  {
    type: 'publication',
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
    type: 'publication',
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
    type: 'publication',
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
    type: 'publication',
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
    type: 'publication',
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
  // Patents
  {
    type: 'patent',
    title: 'Convolutional Neural Network-based In-Loop Filtering Method and System for Video Coding and Decoding',
    patentNumber: 'CN108134932B',
    status: 'Granted',
    year: '2021',
    authors: 'Lin, Weiyao; He, Xiaoyi',
    abstract: 'A method and system for in-loop filtering in video coding and decoding based on convolutional neural networks. The method uses CNN models to enhance the quality of compressed video frames within the coding loop, reducing compression artifacts while maintaining coding efficiency.',
    links: [
      { type: 'patent', url: 'https://patents.google.com/patent/CN108134932B/', label: 'Patent (Granted)' },
      { type: 'patent', url: 'https://patents.google.com/patent/CN108134932A/', label: 'Patent Application' }
    ],
    note: 'Filed: 2018-01-11, Granted: 2021-03-30',
  },
  {
    type: 'patent',
    title: 'Generative Adversarial Network-based In-Loop Filtering Method and System for Video Coding and Decoding',
    patentNumber: 'CN108174225B',
    status: 'Granted',
    year: '2021',
    authors: 'Lin, Weiyao; He, Xiaoyi',
    abstract: 'A method and system for in-loop filtering in video coding and decoding based on generative adversarial networks (GAN). The approach uses a GAN architecture with generator and discriminator models to improve the quality of reconstructed video frames within the coding loop, providing better visual quality than traditional CNN methods.',
    links: [
      { type: 'patent', url: 'https://patents.google.com/patent/CN108174225B/', label: 'Patent (Granted)' },
      { type: 'patent', url: 'https://patents.google.com/patent/CN108174225A/', label: 'Patent Application' }
    ],
    note: 'Filed: 2018-01-11, Granted: 2021-03-26',
  },
  {
    type: 'patent',
    title: 'In-Loop Filtering Implementation Method Based on Joint Construction and Adaptive Selection of Multiple Networks',
    patentNumber: 'CN108520505B',
    status: 'Granted',
    year: '2021',
    authors: 'Lin, Weiyao; He, Xiaoyi; et al.',
    abstract: 'A method for implementing in-loop filtering in video coding based on joint construction and adaptive selection of multiple neural networks. The system dynamically selects the optimal filtering network based on content characteristics, offering improved video quality with adaptive processing.',
    links: [
      { type: 'patent', url: 'https://patents.google.com/patent/CN108520505B/', label: 'Patent (Granted)' },
      { type: 'patent', url: 'https://patents.google.com/patent/CN108520505A/', label: 'Patent Application' }
    ],
    note: 'Filed: 2018-05-04, Granted: 2021-12-03',
  },
  // {
  //   type: 'patent',
  //   title: 'Intelligent Monitoring Method for Abnormal Events Based on Abnormal Posture',
  //   patentNumber: 'CN106339690A',
  //   status: 'Filed',
  //   year: '2017',
  //   authors: 'Lin, Weiyao; He, Xiaoyi; et al.',
  //   abstract: 'An intelligent monitoring method for detecting abnormal events based on analysis of human postures. The method identifies abnormal postures in video surveillance footage to detect potential emergency situations, providing automated alerts for security and safety applications.',
  //   links: [
  //     { type: 'patent', url: 'https://patents.google.com/patent/CN106339690A/', label: 'Patent Application' }
  //   ],
  //   note: 'Filed: 2016-11-14, Published: 2017-01-18',
  // },
  {
    type: 'patent',
    title: 'Image Illumination Compensation Method and System Based on Tone Shift Estimation and Point-by-Point Tone Mapping',
    patentNumber: 'CN106504200B',
    status: 'Granted',
    year: '2022',
    authors: 'He, Xiaoyi; et al.',
    abstract: 'An image illumination compensation method based on tone shift estimation and point-by-point tone mapping. The system extracts tone shift and mapping functions from calibration charts to perform illumination compensation on images, providing superior results compared to traditional gamma correction methods.',
    links: [
      { type: 'patent', url: 'https://patents.google.com/patent/CN106504200B/', label: 'Patent (Granted)' },
      { type: 'patent', url: 'https://patents.google.com/patent/CN106504200A/', label: 'Patent Application' }
    ],
    note: 'Filed: 2016-09-14, Granted: 2022-12-09',
  }
];

export default publications; 