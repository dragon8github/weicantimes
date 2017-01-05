<template>
	<div id="menu_main" class="mui-off-canvas-wrap mui-draggable">
		<offcanvas></offcanvas>
		<!-- 主界面 -->
		<div class="mui-inner-wrap">
			<div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
				<!-- header  -->
				<header id="header" class="mui-bar mui-bar-nav">
					<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-tap="{methods:backDesk}">
						<span class="menu_back">Desk</span>
					</a>
					<a v-tap="{methods:CanvasShow}" class="mui-icon mui-icon-bars mui-pull-right"></a>
				</header>
				<!-- banner -->
				<div class="banner">
					<div class="banner-bottom">
						<span class="bannert-text">weicanTImes experience systems</span>
						<span class="banner-time">{{ DateStr }}</span>
					</div>
				</div>
				<div class="menu">
					<!-- menu for left -->
					<div class="mui-col-xs-3">
						<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
							<a class="mui-control-item" v-for="(item,index) in items" v-tap="{ methods:scrollToCategory}" :class="index === 0?'mui-active' : ''" :data-index="index" :href=" '#content' + index">{{ item.key }}</a>
						</div>
					</div>
					<!-- menu for right -->
					<div class="mui-col-xs-9" id="segmentedControlContents">
						<div class="mui-scroll-wrapper">
							<div class="mui-scroll">
								<div class="mui-control-content" v-for="(item,index) in items">
									<ul class="mui-table-view">
										<div :id="'content' + index">
											<div class="category">
												<div class="category-title">
													<strong class="category-name">{{ item.key }}</strong><span class="category-description"></span>
												</div>
											</div>
											<li class="mui-table-view-cell mui-media" v-for="(item2,index2) in item.value">
												<a href="javascript:;">
													<img class="mui-media-object mui-pull-left" :src="item2.img">
													<div class="mui-media-body">
														<h4>{{ item2.name }}</h4>
														<p class="mui-ellipsis">
										<span class="mui-ellipsis-left">Monthly sales
							 {{ item2.sales }}
										</span><span class="mui-ellipsis-right">Applause Rate {{ item2.rate }}</span>
														</p>
														<p class="money">
															<span class="money-left">$</span><span class="money-right">{{ item2.money }}</span>
															<i class="menu-btn menu-btn-add iconfont icon-icontianjia01"></i>
															<span class="menu-input">1</span>
															<i class="menu-btn menu-btn-sub iconfont icon-tubiao"></i>
														</p>
													</div>
												</a>
											</li>
										</div>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="cartfooter" style="z-index: 11;">
						<span class="carticon" attr-quantity="1"></span>
						<div style="padding-top:13px;">
							<p class="carttotal">
								¥8
							</p>
							<p class="cartdelivery">
								再买¥12减配送费¥4.00
							</p>
						</div>
						<a href="javascript:" class="submitbutton">去结算</a>
					</div>
				</div>
			</div>
			<!-- 这个东西不能删，利用他还原界面 -->
			<div class="mui-off-canvas-backdrop"></div>
		</div>
	</div>

</template>

<script>
import offcanvas from '../components/offCanvas.vue'
export default {
  name: 'menu',
  data () {
    return {
    	DateStr : "",
    	imgs:[],
    	items:[]
    }		
  },
  components:{
  	offcanvas
  },
  methods : {
	setDate () {
		let date = new Date();
		let year = date.getFullYear();
		let money = money = date.getMonth() + 1;
		let day = day = date.getDate();
		let hour = date.getHours();
        let minute = date.getMinutes();
        this.DateStr = `${year}-${money}-${day} ${hour}:${minute}`
	},
	CanvasShow () {
		var Main = mui('#menu_main');//侧滑容器父节点
		Main[0].classList.add('mui-scalable');//动画效果的类
		Main.offCanvas().refresh();//绑定动画效果
		Main.offCanvas('show');
	},
	backDesk () {
		router.push("desk")
	},
	getBase64Img () {
		for (var i = 0;i < this.items.length;i++) {
	    	let v = this.items[i].value;
	    	for (var j = 0;j < v.length;j++) {
	    		let astroImage = require(`../assets/images/${v[j].img}`);
	    		this.items[i].value[j].img = astroImage;
	    	}
	    }
	},
	getItemsData () {
		 let self = this;
		 wct.AjaxGet(wct.host + wct.api.menu + "10086",function(data){
		 	 self.items = JSON.parse(data.result);
			 self.getBase64Img();
		 })
	},
	scrollToCategory (e) {
		let id = $(e.event.target).attr("href");
		let top = $(id).offset().top - 200;
		let y = mui('#segmentedControlContents .mui-scroll-wrapper').scroll().y;
		top = y - top;
		console.log(top)
		mui('#segmentedControlContents .mui-scroll-wrapper').scroll().scrollTo(0,top,0);
	}
  },
  created () {
    this.getItemsData();
	this.setDate();
    mui.ready(function(){
    	setTimeout(function(){
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
			$("#offCanvasHide").bind("click",function(){
				 mui('#menu_main').offCanvas('close');
			})
			//退出登录
			$("#quit").bind("tap", function()
			{
				var btnArray = ['否', '是'];
				mui.confirm('你确定要退出？', '温馨提示', btnArray, function(e) {
					if (e.index == 1)
					{
						router.push("login")
					}
				})
			})
    	},1)
    });
  }
};
</script>

<style lang="css" scoped>
.mui-bar-nav{background: transparent;box-shadow: 0 0 0;}
a.mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left,a.mui-icon.mui-icon-bars.mui-pull-right{color:#fff;}
.menu_back{color:#fff;font-size:20px}
#segmentedControlContents{border-left: 1px solid #c8c7cc;}
.mui-h4,h4{font-size:18px;white-space:normal;font-weight:400}
.category{padding:10px;background-color:#f1f1f1;overflow:hidden}
.category-title strong{margin-right:.133333rem;font-weight:700;font-size:16px;color:#666;float:left;margin-right:5px;}
.category-title{display:block;width:0;color:#999;font-size:.266667rem;white-space:nowrap;float:left;}
.mui-col-xs-3,.mui-scroll{padding-bottom:100px}
.menu{clear:both;overflow:hidden;height:480px}
.banner{background:url(../assets/images/banner.jpg) no-repeat center center/cover;width:100%;height:200px;position:relative}
.banner-bottom{height:40px;line-height:40px;color:#fff;font-size:14px;position:absolute;bottom:0;background:rgba(0,0,0,.5);width:100%}
.bannert-text{float:left;padding-left:15px}
.banner-time{float:right;padding-right:15px}
.mui-row.mui-fullscreen>[class*=mui-col-]{height:100%}
.mui-row.mui-fullscreen>[class*=mui-col-]{height:100%}
.mui-row>[class*=mui-col-]{float:left}
.mui-col-xs-3,.mui-col-xs-9{overflow-y:auto;height:100%;float:left}
.mui-segmented-control .mui-control-item{line-height:50px;width:100%}
.mui-control-content{display:block}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{background-color:#fff}
.money{color:#f60}
.money-left{margin-right:3px}
.money-right{font-weight:700;font-size:20px;position:relative;top:1.4px}
.mui-ellipsis{font-size:.293333rem}
.mui-ellipsis-left{float:left;margin-right:10px}
.mui-ellipsis-right{float:left}
.mui-control-item{position:relative}
.mui-control-item.mui-active::after{content:" ";position:absolute;height:100%;width:4px;left:0;top:0;background:#deb887}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{color:inherit}
.menu-btn{float:right;font-size:25px;color:#6495ed}
.menu-input{float:right;margin:0 5px;font-size:16px;color:#333}
.menu-btn-sub:not(:first-child),.menu-input:not(:first-child){display:none}
.cartfooter{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-left:20%;background-color:#3d3d3f;height:50px;opacity:.95}
.submitbutton{position:absolute;top:0;right:0;bottom:0;width:30%;background-color:#4cd964;color:#fff;text-align:center;text-decoration:none;font-size:16px;line-height:50px}
.carticon{position:absolute;left:10px;width:50px;height:50px;box-sizing:border-box;border-radius:100%;box-shadow:0 -.082192rem .054795rem 0 rgba(0,0,0,.1);will-change:transform}
.carticon::before{position:absolute;top:0;right:0;bottom:0;left:0;background:url(../assets/images/shop-cart.png) center no-repeat;background-size:50px;content:""}
.carticon::after{position:absolute;right:2px;top:1px;line-height:1;background-color:#ff461d;color:#fff;border-radius:100%;padding:3px 6px;content:attr(attr-quantity);font-size:.273973rem}
.carttotal{font-size:16px;line-height:16px;color:#fff;margin:0}
.cartdelivery{color:#f5f5f5;font-size:.273973rem}
</style>