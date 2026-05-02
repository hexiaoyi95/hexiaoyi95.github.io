import { routes } from './routes';

export const siteConfig = {
  name: 'Shawn He',
  chineseName: '何晓艺',
  title: 'Senior Video Architect',
  location: 'Shanghai, China',
  email: 'xiaoyi.he@outlook.com',
  tagline:
    'I build AI video systems for frame generation, optical flow, and compression at real-time graphics scale.',
  themeLine: 'Portfolio interface for video algorithms, research, and shipping work.',
  routes,
  socials: [
    {
      name: 'GitHub',
      href: 'https://github.com/hexiaoyi95',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/xiaoyihe',
    },
    {
      name: 'Email',
      href: 'mailto:xiaoyi.he@outlook.com',
    },
    {
      name: 'RSS',
      href: '/rss.xml',
    },
  ],
  stats: [
    {
      label: 'Current role',
      value: 'NVIDIA',
      detail: 'Senior Video Architect',
    },
    {
      label: 'Recent delivery',
      value: 'NVIDIA Smooth Motion',
      detail: 'NVIDIA Smooth Motion',
    },
    {
      label: 'Research area',
      value: 'DLSS 4',
      detail: 'Multi Frame Generation',
    },
    {
      label: 'Core signals',
      value: 'OFA',
      detail: 'Optical flow and temporal cues',
    },
  ],
  timeline: [
    {
      company: 'NVIDIA',
      role: 'Senior Video Architect',
      period: '2021 - Present',
      speed: 'Frame Generation',
      summary:
        'Working on DLSS frame generation, NVIDIA Smooth Motion, optical flow algorithms, and efficient video frame generation.',
    },
    {
      company: 'Bilibili',
      role: 'Algorithm Engineer',
      period: '2020 - 2021',
      speed: 'Compression Engine',
      summary:
        'Built adaptive preprocessing systems with FFmpeg and TensorRT, saving about 10% bitrate at similar visual quality.',
    },
    {
      company: 'Shanghai Jiao Tong University',
      role: 'Research Assistant',
      period: '2015 - 2019',
      speed: 'Research',
      summary:
        'Published work in compressed video enhancement, skeleton sequence compression, and intelligent surveillance.',
    },
  ],
  featuredProjects: [
    {
      title: 'NVIDIA Smooth Motion',
      label: 'Driver-level AI frame generation',
      machine: 'Driver-level Frame Generation',
      decal: 'NVIDIA',
      description:
        'Core contributor to a driver-based AI frame generation path that infers an additional frame between rendered frames. The work focuses on making smoother gameplay available to compatible DirectX 11/12 games even when the game does not integrate DLSS Frame Generation directly.',
      href: 'https://www.nvidia.com/en-us/geforce/news/nvidia-app-update-dlss-overrides-and-more/',
      tags: ['Driver Stack', 'DX11/DX12', 'Frame Generation'],
      highlights: ['Game-agnostic deployment path', 'Intermediate-frame inference', 'Perceived frame-rate uplift'],
    },
    {
      title: 'DLSS Frame Generation Research',
      label: 'Real-time graphics acceleration',
      machine: 'DLSS Research',
      decal: 'DLSS 4',
      description:
        'Research and engineering around DLSS 4 Multi Frame Generation, where AI-generated frames must fit within a few milliseconds while preserving temporal stability. The work sits at the intersection of frame interpolation, optical-flow signals, GPU scheduling, and image-quality evaluation for real-time games.',
      href: 'https://research.nvidia.com/labs/adlr/DLSS4/',
      tags: ['DLSS 4', 'Multi Frame Generation', 'Optical Flow'],
      highlights: ['Multi-frame generation budget', 'Temporal consistency', 'Real-time gaming constraints'],
    },
    {
      title: 'Adaptive Video Compression Engine',
      label: 'Bilibili video pipeline',
      machine: 'Production Video Pipeline',
      decal: 'Bilibili',
      description:
        'Designed adaptive preprocessing for user-generated videos using quality assessment, denoising, enhancement, FFmpeg, and TensorRT.',
      href: '/projects',
      tags: ['Compression', 'TensorRT', 'FFmpeg'],
      highlights: ['Adaptive preprocessing', '10% bitrate saving', 'Quality assessment'],
    },
  ],
  skills: [
    'Frame Generation',
    'Optical Flow',
    'Video Compression',
    'Computer Vision',
    'PyTorch',
    'TensorRT',
    'C++',
    'Python',
  ],
} as const;
