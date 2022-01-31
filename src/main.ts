import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {t} from './utils/locale'
require('bootstrap/dist/js/bootstrap.bundle')

createApp(App)
  .use(router)
  .use(store)
  .mixin({
    methods: {
      $t: t,
    },
  })
  .mount('#app')
