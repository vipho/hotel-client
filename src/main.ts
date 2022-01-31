import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {initLang, t} from './utils/locale'

initLang();

createApp(App)
  .use(router)
  .use(store)
  .mixin({
    methods: {
      $t: t,
    },
  })
  .mount('#app')
