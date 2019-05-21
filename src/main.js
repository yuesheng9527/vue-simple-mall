/*
入口
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem, Button, Badge } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Badge.name, Badge);
    
import VueResource from 'vue-resource'
Vue.use(VueResource)

import moment from 'moment'       //格式化时间  格式:   | dateFormat('YYYY-MM-DD HH:MM:SS')
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:MM:SS"){
  return moment(dataStr).format(pattern)
})

import { Tab, Tabs, Lazyload, Stepper, Switch } from 'vant';
Vue.use(Tab).use(Tabs).use(Lazyload).use(Stepper).use(Switch);

Vue.http.options.emulateJSON = true;


new Vue({
    el:'#app',
    render:h => h(App),
    components: { App },
    router,
    store
})