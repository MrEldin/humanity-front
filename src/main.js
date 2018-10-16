import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store'
import Default from '@/layouts/Default'
import Login from '@/layouts/Login'
import Buefy from 'buefy'
import VueLodash from 'vue-lodash'
import Vuebar from 'vuebar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faGripVertical,
  faEdit,
  faAngleLeft,
  faAngleRight,
  faEllipsisV,
  faBars,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faHeading,
  faItalic,
  faTrashAlt,
  faGripHorizontal
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import 'font-awesome/css/font-awesome.min.css'
import '@mdi/font/css/materialdesignicons.css'
import VueQuillEditor from 'vue-quill-editor'
import VCalendar from 'v-calendar'
import moment from 'vue-moment'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'v-calendar/lib/v-calendar.min.css'

Vue.use(VueQuillEditor, {
  bounds: '#app'
})

library.add(
  faArrowCircleUp,
  faArrowCircleDown,
  faGripVertical,
  faGripHorizontal,
  faEdit,
  faAngleLeft,
  faAngleRight,
  faEllipsisV,
  faBars,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faHeading,
  faItalic,
  faTrashAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('default-layout', Default)
Vue.component('login-layout', Login)

Vue.use(VueAxios, axios)
Vue.use(Buefy)
Vue.use(VueLodash)
Vue.use(Vuebar)
Vue.use(VueCarousel)
Vue.use(VCalendar, {
  firstDayOfWeek: 2
})

Vue.use(moment);

Vue.router = router

Vue.axios.defaults.baseURL = store.state.localPath
Vue.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(require('@websanova/vue-auth'), {
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  auth: {
    request: function (req, token) {
      this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token})
    },

    response: function (res) {
      var headers = this.options.http._httpData.call(this, res),
        token = headers.access_token

      if (token) {
        token = token.split(/Bearer\:?\s?/i)

        return token[token.length > 1 ? 1 : 0].trim()
      }
    }
  },
  rolesVar: 'permissions'
});

window.EventBus = new Vue()

require('./assets/scss/style.scss')
require('./assets/scss/main.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
