export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'tv.bug.tools',
  description:
    'Find and watch movies instantly with a smooth and effortless experience. The films you want, when you want them.\n\n⚠️ Use UBlock for the best experience.',
  mainNav: [
    {
      title: 'Movie',
      href: '/movie',
    },
    {
      title: 'Anime',
      href: '/anime',
    },
    {
      title: 'TV',
      href: '/tv',
    },
  ],
  links: {
    bugmovies: '/',
  },
};
