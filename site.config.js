const CONFIG = {
  // profile setting (required)
  profile: {
    name: "siyeon",
    image: "/hamster.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Engineer",
    bio: "Connect the dots.",
    email: "siyeonleeme@gmail.com",
    linkedin: "https://kr.linkedin.com/in/siyeon-lee",
    github: "https://github.com/siyeons",
    instagram: "",
  },
  projects: [
    {
      name: '',
      href: ''
    }
  ],
  // blog setting (required)
  blog: {
    title: "sian-log",
    description: "welcome to sian-log!",
  },

  // CONFIG configration (required)
  link: "https://sian-log-siyeons.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
