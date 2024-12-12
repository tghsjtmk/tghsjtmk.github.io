export default defineAppConfig({
  docus: {
    title: "Teguh Sujatmiko",
    description: "The best place to start your documentation.",
    image: "https://karamel.id/_nuxt/img/logo-karamel.d68322c.png",
    socials: {
      instagram: "teguh.sujatmiko",
      twitter: "tghsjtmk",
      github: "tghsjtmk",
    },
    layout: "default",
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      fluid: true,
      title: "Teguh Sujatmiko",
      showLinkIcon: true,
      exclude: [],
    },
    main: {
      fluid: true,
      padded: true,
    },
    footer: {
      fluid: true,
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev",
      },
      textLinks: [
        {
          text: "Made with ❤️ Karamel.id",
          href: "https://karamel.id",
          target: "_blank",
        },
      ],
    },
  },
});
