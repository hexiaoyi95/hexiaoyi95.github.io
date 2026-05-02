export type RouteId =
  | 'home'
  | 'resume'
  | 'publications'
  | 'projects'
  | 'blog'
  | 'contact';

export interface SiteRoute {
  id: RouteId;
  label: string;
  shortLabel: string;
  href: string;
  description: string;
}

export const routes: SiteRoute[] = [
  {
    id: 'home',
    label: 'Home',
    shortLabel: 'Home',
    href: '/',
    description: 'Homepage overview',
  },
  {
    id: 'resume',
    label: 'Resume',
    shortLabel: 'Resume',
    href: '/resume',
    description: 'Experience and education',
  },
  {
    id: 'publications',
    label: 'Publications',
    shortLabel: 'Papers',
    href: '/publications',
    description: 'Publications and patents',
  },
  {
    id: 'projects',
    label: 'Projects',
    shortLabel: 'Projects',
    href: '/projects',
    description: 'Recent work and project archive',
  },
  {
    id: 'blog',
    label: 'Blog',
    shortLabel: 'Blog',
    href: '/blog',
    description: 'Technical notes and build logs',
  },
  {
    id: 'contact',
    label: 'Contact',
    shortLabel: 'Contact',
    href: '/contact',
    description: 'Contact and social links',
  },
];

export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
