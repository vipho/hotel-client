import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {t} from './utils/locale'
import config from './utils/config'

require('bootstrap/dist/js/bootstrap.bundle')

createApp(App)
  .use(router)
  .use(store)
  .mixin({
    methods: {
      $t: t,
    },
    computed: {
      $config: () => config,
    },
  })
  .mount('#app')
