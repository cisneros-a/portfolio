module.exports = {
  author: "@konstantinmuenster",
  siteTitle: "Gatsby Starter Portfolio Minimal",
  siteShortTitle: "Built with Gatsby", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40a_cisneros45",
  shownArticles: 2,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/adrian-cisneros-73623318a/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/a_cisneros45",
    },
    {
      name: "Github",
      url: "https://github.com/cisneros-a",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    // {
    //   name: "Privacy",
    //   url: "/privacy",
    // },
    // {
    //   name: "Imprint",
    //   url: "/imprint",
    // },
  ],
};
