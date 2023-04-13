export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxtstudio',
      github: 'nuxt-themes/docus'
    },
    layout: 'default',
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
      showLinkIcon: false
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev',
      },
      textLinks: [
        {
          text: 'NuxtJS',
          href: 'https://nuxtjs.org',
          target: '_blank'
        }
      ],
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ],
    }
  }
})
