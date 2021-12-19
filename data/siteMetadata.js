const siteMetadata = {
  title: 'Javali - Boutique de Carnes Nobres',
  author: 'Audere - Agência e Desenvolvimento de Produtos para a Web',
  headerTitle: 'Javali - Boutique de Carnes Nobres',
  description:
    'Javali Boutique de Carnes Nobres -Tradição, Variedade, Qualidade, Preço Justo e Delivery com Entrega Rápida. Belo Horizonte Minas Gerais',
  language: 'pt-BR',
  siteUrl: 'https://javaliboutique.com.br/',
  siteRepo: '#',
  siteLogo: '/static/images/JAVALI-LOGO.svg',
  image: '/static/images/logo_google2.png',
  socialBanner: '/static/images/L-1.png',
  //***Conteudo para as demais páginas adaptados para SEO***/
  otherTitle: 'Javali Boutique de Carnes Nobres',
  //otherDescripition:'#',
  //authorImg:'/static/images/audere23.png',
  email: 'javali@javaliboutique.com.br',
  //github: 'https://github.com',
  //twitter: 'https://twitter.com/Twitter',
  //facebook: 'https://facebook.com',
  //youtube: 'https://youtube.com',
  //linkedin: 'https://www.linkedin.com',
  instgram: 'https://www.instagram.com/javaliboutiquedecarnes/',
  whatsapp:
    'https://api.whatsapp.com/send?phone=5531984285733&text=Ol%C3%A1!%20Vim%20pelo%20link%20do%20WhatsApp%20no%20site.%20Quero%20saber%20mais%20sobre%20seus%20produtos%20e%20servi%C3%A7os.',
  google:
    'https://www.google.com.br/search?ved=1t:65428&_ga=2.134642289.1214621055.1633344992-771114271.1633344992&q=Madeiras+Santos+EIRELI&ludocid=16927124937789177837&lsig=AB86z5WPzfkrgtjfntzD1VhQj8Fi#fpstate=lie',
  locale: 'pt-BR',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. mdsantos.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: 'G-68R4LB4DQ6', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'dark',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
