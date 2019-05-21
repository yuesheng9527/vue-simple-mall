/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Xinwen from '../pages/Xinwen/Xinwen.vue'
import XinwenXQ from '../pages/Xinwen/XinwenXQ.vue'
import TupianFX from '../pages/Tupian/TupianFX.vue'
import TupianXQ from '../pages/Tupian/TupianXQ.vue'
import Shanpin from '../pages/Shanpin/Shanpin.vue'
import ShanpinXQ from '../pages/Shanpin/ShanpinXQ.vue'
import Tuwenjieshao from '../pages/Shanpin/Tuwenjieshao.vue'
import Shanpinpinlun from '../pages/Shanpin/Shanpinpinlun.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/msite'},
        {path:'/msite',component:MSite},
        {path:'/search',component:Search},
        {path:'/order',component:Order},
        {path:'/profile',component:Profile},

        {path:'/msite/shanpin',component:Shanpin},
        {path:'/msite/shanpin/shanpinxq/:id',component:ShanpinXQ,name:'goodsinfo'},
        {path:'/msite/shanpin/shanpinxq/tuwenjieshao/:id',component:Tuwenjieshao,name:'tuwenjieshao'},
        {path:'/msite/shanpin/shanpinxq/shanpinpinlun/:id',component:Shanpinpinlun,name:'shanpinpinlun'},

        {path:'/msite/tupian',component:TupianFX},
        {path:'/msite/tupian/tupianxq/:id',component:TupianXQ},

        {path:'/msite/xinwen',component:Xinwen},
        {path:'/msite/xinwen/xinwenxq/:id',component:XinwenXQ}
    ]
})