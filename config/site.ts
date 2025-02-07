export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bug Movies',
  description:
    'Watch your favorite movies and tv shows on bug movies!',
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
