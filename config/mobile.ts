import { MainNavItem, SidebarNavItem } from '@/types';

interface MobileConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const mobileConfig: MobileConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Movie',
      href: '/movie',
    },
    {
      title: 'TV',
      href: '/tv',
    },
    {
      title: 'Anime',
      href: '/anime',
    }
  ],
  sidebarNav: [],
};
