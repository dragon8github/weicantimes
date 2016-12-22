import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'

Vue.use(VueRouter)

/*  配置路由规则 */
const map = [

	/* 主页与重定向 */
	{path:'/index',redirect: '/'},{path:'/',component:require('./pages/index')}, 

	/* login */
	{path:'/login',component:require('./pages/login')},

	/* desk */
	{path:'/desk',component:require('./pages/desk')},

	/* menu */
	{path:'/menu',component:require('./pages/menu')},

	/* balance */
	{path:'/balance',component:require('./pages/balance')}

]	


/* 实例化路由 */
const router = new VueRouter({
	mode: 'history',
	routes : map
})


/* 暂时没什么用 */
router.beforeEach((to, from, next) => {
	//console.log(to,from);
	next();
})


// 这个是用来动态获取和设置后退地址的
router.afterEach((to, from) => {
	//获取来路(未使用)
    let fromPath = from.path || '/';
    //获取跳转页
    let toPath = to.path;
    //获取上一层(有可能为空),这个是为将来区别四大界面的路由使用的
    let backPath = toPath.slice(0, toPath.lastIndexOf('/')); 
    //调用Vuex
    store.dispatch('set_back_path', backPath);
})




export default router;