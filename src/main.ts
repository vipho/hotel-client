import {createApp} from 'vue'
import App, {AppProps} from './App.vue'
import router from './router'
import store from './store'
import Maska from 'maska'

import {t} from './utils/locale'
import config from './utils/config'

//@ts-ignore
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle')

console.log(App)

createApp(App)
  .use(router)
  .use(store)
  .use(Maska)
  .mixin({
    methods: {
      $t: t,
      $toast: (message: string) => AppProps.toast.notify(message)
    },
    computed: {
      $config: () => config,
    },
  })
  .mount('#app')
