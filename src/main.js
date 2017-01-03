/* 加载项目需要的全局css和js */
require('css/mui.min.css') 
require('css/common.css')
require('ico')
require("./api");
require('js/layer_mobile/need/layer.css')

import Vue from 'vue'
import vueTap from 'v-tap'; 		 	//支持手机端和Pc端的点击事件
import fastclick from 'fastclick'	 	//解决手机端 click 点击延迟
import zepto from 'webpack-zepto' 	 	//jquery、zepto
import store from './vuex/store'	 	// vuex相关
import router from './router'		 	//路由相关
import VueSocketio from 'vue-socket.io';

Vue.use(vueTap);
Vue.use(VueSocketio, 'http://localhost:8090');
window.zepto = zepto;
window.$ = zepto   					   //zepto
window.router = router;				   //路由文件
window.mui = require('js/mui.min.js')  //UI框架的核心js
window.layer = require('js/layer_mobile/layer');


const app = new Vue({
	router,
	store
}).$mount('#app')



/* Christmas */
require("js/Christmas");
$(document).snowfall({round : true, minSize: 2, maxSize:4}); // add rounded

