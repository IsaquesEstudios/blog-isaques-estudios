module.exports = {
  siteUrl: 'https://test.isaquesestudios.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://test.isaquesestudios.com/server-sitemap.xml', // <==== Add here
    ],
  },
}
