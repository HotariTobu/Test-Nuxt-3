// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sourcemap: true,

  components: [
    {
      path: '~/components',
      // pathPrefix: false,
    }
  ],

  css: [
    '/assets/css/style.css',
  ],

  app: {
    head: {
      title: 'Nuxt 3 basic',
      meta: [
        {
          name: 'description',
          content: 'Nuxt 3 for beginners',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/fafafa.png',
        },
      ],
    },

    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    // },
  },

  // modules: [
  //   '@nuxtjs/tailwindcss',
  // ],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  alias: {
    "*": "types/*",
  },

  routeRules: {
    '/post/*': {
      // CSR (Client Side Rendering) Mode
      ssr: false,
    },
  }
})
