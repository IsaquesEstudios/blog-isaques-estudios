module.exports = {
  siteUrl: 'https://blog.isaquesestudios.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://blog.isaquesestudios.com/server-sitemap.xml', // <==== Add here
    ],
  },
}



