const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Премія Георгія Ґонґадзе',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Премія імені Георгія Ґонґадзе покликана підтримати тих журналістів, які не бояться викликів, здатні знаходити інноваційні способи донесення інформації, сприяють впровадженню ліберальних реформ в Україні, відкривають нові можливості для цілого медіасередовища, спроможні створювати сталість у тому, що роблять, лишаються вірні професійним принципам і цінностям'
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/favicon.png'
      }
    ],
    script: [
      { innerHTML: 'document.querySelector("html")' }
    ],
    link: [

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  env: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://gongadzeprize.org' : 'localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/styles/index.scss',
    '@/styles/gongadze.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~plugins/vueScrollmagic.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-youtube',
      ssr: false
    },
  ],
  devModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 800 }]
  ],
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://gongadzeprize.org' : 'http://localhost:3000'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: [
      'gsap/umd/TweenMax',
      'gsap/umd/TimelineMax',
      'gsap/umd/TimelineLite',
      'gsap/umd/EasePack'
    ]
  },
}
