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
        content: ''
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
    '@/styles/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  devModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
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
  plugins: []

}
