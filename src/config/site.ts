import { routes } from './routes';

export const siteConfig = {
  name: 'Shawn He',
  chineseName: '何晓艺',
  title: 'Senior Video Architect',
  location: 'Shanghai, China',
  email: 'xiaoyi.he@outlook.com',
  tagline:
    'I build video AI algorithms for motion generation, optical flow, visual quality enhancement, and production-scale media systems.',
  themeLine: 'Video AI for motion, quality enhancement, and production-scale media systems.',
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
      label: 'Current focus',
      value: 'Video Processing AI',
      detail: 'Frame generation, OFA, optical flow, enhancement',
    },
  ],
  news: [
    {
      date: '2025',
      type: 'Paper Accepted',
      title: 'One paper accepted for NVIDIA NTech 2025',
      summary:
        'A recent video AI research paper was accepted for NVIDIA NTech 2025.',
      href: '',
      tags: ['NTech 2025', 'Video AI', 'Research'],
    },
    {
      date: '2025',
      type: 'Product Release',
      title: 'NVIDIA Smooth Motion shipped in NVIDIA App',
      summary:
        'Driver-level AI frame generation shipped through NVIDIA App for compatible DirectX 11/12 games.',
      href: 'https://www.nvidia.com/en-us/geforce/news/nvidia-app-update-dlss-overrides-and-more/',
      tags: ['NVIDIA Smooth Motion', 'Frame Generation', 'Driver Stack'],
    },
    {
      date: '2025',
      type: 'Research Update',
      title: 'DLSS 4 Multi Frame Generation research published',
      summary:
        'NVIDIA Research published details on DLSS 4 Multi Frame Generation and its real-time AI frame pipeline.',
      href: 'https://research.nvidia.com/labs/adlr/DLSS4/',
      tags: ['DLSS 4', 'Multi Frame Generation', 'Optical Flow'],
    },
    {
      date: '2024',
      type: 'Paper Accepted',
      title: 'Frame generation work accepted by NVIDIA internal conference',
      summary:
        'A frame generation paper was accepted by NVIDIA NTech 2024.',
      href: '/resume',
      tags: ['NTech 2024', 'Frame Generation', 'Research'],
    },
  ],
  timeline: [
    {
      company: 'NVIDIA',
      role: 'Senior Video Architect',
      period: '2021 - Present',
      speed: 'Frame Generation',
      summary:
        'Working on deep learning algorithms for graphics and video frame generation, NVIDIA Smooth Motion, DLSS-related research, OFA, optical flow, and efficient video generation.',
    },
    {
      company: 'Bilibili',
      role: 'Algorithm Engineer',
      period: '2020 - 2021',
      speed: 'Adaptive Preprocessing',
      summary:
        'Built adaptive video preprocessing systems with FFmpeg and TensorRT, including quality assessment, denoising, enhancement, and bitrate-saving production workflows.',
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
      ctaLabel: 'Read release notes',
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
      ctaLabel: 'Read research page',
      tags: ['DLSS 4', 'Multi Frame Generation', 'Optical Flow'],
      highlights: ['Multi-frame generation budget', 'Temporal consistency', 'Real-time gaming constraints'],
    },
    {
      title: 'Adaptive Video Preprocessing Engine',
      label: 'Bilibili video pipeline',
      machine: 'Production Video Pipeline',
      decal: 'Bilibili',
      description:
        'Designed adaptive preprocessing for user-generated videos using quality assessment, denoising, enhancement, FFmpeg, and TensorRT.',
      href: '/projects',
      ctaLabel: 'View project details',
      tags: ['Compression', 'TensorRT', 'FFmpeg'],
      highlights: ['Adaptive preprocessing', '10% bitrate saving', 'Quality assessment'],
    },
  ],
  skills: [
    'Frame Generation',
    'Optical Flow / OFA',
    'Video Enhancement',
    'Super Resolution',
    'Compressed Video Enhancement',
    'Production Video Systems',
    'PyTorch',
    'TensorRT',
  ],
} as const;
