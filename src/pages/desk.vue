<template>
	<div>
		<div id="desk--bakcground"></div>
		<div id="desk-inner">
		    <div class="mui-scroll-wrapper">
                <div class="mui-scroll">
					<ul class="mui-table-view">
					    <li class="mui-table-view-cell">
					        <a class="mui-navigate-right">Number of Guests
			        	    <span class="not-function mui-badge mui-badge-danger">Please Choose</span>
					        </a>
					    </li>
					 </ul>  
					 <div class="floor-ico">
				 		<span><i class="iconfont icon-user iconfont-eated"></i><span class="floor-ico-text">Eated</span></span>
				 		<span><i class="iconfont icon-lock iconfont-seize"></i><span class="floor-ico-text">Seize</span></span>
				 		<span><i class="iconfont icon-yuding iconfont-destine"></i><span class="floor-ico-text">Destine</span></span>
				 		<span><i class="iconfont icon-tuijian iconfont-recommended"></i><span class="floor-ico-text">Recommended</span></span>
				 	</div> 
					 <div class="floor" v-for="(item,index) in items" :class="'floor-' + index">
						 	<div class="floor-text">{{ item.key }}</div>
					 		<ul class="floor-tables-ul">
					 			<li class="floor-tables-ul-li" v-for="(item2,index2) in item.value">
					 				<div class="floor-tables-ul-li-div"></div>
					 				<p class="floor-tables-ul-li-p">{{ item2.name }}</p>
					 				<i class="iconfont" :class="getStateIco(item2.state)"></i>
					 			</li>
					 		</ul>
					 </div> 
				 </div>
			  </div> 
		 </div>
	 </div>
</template>

<script>
export default {

  name: 'desk',

  data () {
    return {
    	items:[]
    };
  },
  methods : {
  	getStateIco (icoType) {
  		switch(+icoType)
		{
			case 0:
			  return "icon-user"
			  break;
			case 1:
			  return "icon-lock"
			  break;
			case 2:
			  return "icon-yuding"
			  break;
			case 3:
			  return "icon-tuijian"
			  break;
			default:
			  return "icon-tuijian"
		}
  	},  	
	getItemsData () {
		 let self = this;
		 wct.AjaxGet(wct.host + wct.api.desk + "10086",function(data){
		 	 self.items = JSON.parse(data.result);
		 })
	}
  },
  created () {
  	this.getItemsData();
  	 mui.ready(function(){
		mui('.mui-scroll-wrapper').scroll({
		    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	 })
  }
};
</script>

<style lang="css" scoped>
.mui-navigate-right:after, .mui-push-left:after, .mui-push-right:after{
	color:#fff;
}
#desk--bakcground{
	height: 100vh;
	width: 100%;
	background:url(../assets/images/banner.jpg) no-repeat 50% /cover;
	-webkit-filter: blur(50px);   
    -moz-filter: blur(50px);   
    -ms-filter: blur(50px);   
    -o-filter: blur(50px);   
    filter: blur(50px);   
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);  
    position: absolute;
    z-index: 1;
    top: 0;
}
#desk-inner{
	position: relative;
	z-index: 3;
	height: 100vh;
	background: transparent;
	color: #fff !important;
}
.mui-table-view{
	background: transparent;
}
ul{
    /*overflow: hidden;*/
    margin: 0;
    padding: 0;
}
.not-function {
	background: transparent;
    font-size: 16px;
}
.floor{
    font-size: 16px;
    overflow: hidden;
    margin-bottom: 10px;
}
.floor-text{	
	text-indent: 15px;
    line-height: 45px;
}
.floor-ico{
    line-height: 60px;
    width: 100%;
    margin: auto;
    text-align: center;
}
.floor-ico span{
	padding:0 3px;	
}
.floor-ico .iconfont{
    padding: 0.33em 0.37em;
    margin-right: 5px;
}
.iconfont-eated{
	background: darkorange;
}
.iconfont-seize{
	background: saddlebrown;
}
.iconfont-destine{
	background: mediumvioletred;
}
.iconfont-recommended{
	background: lightsalmon;
}
.floor-tables-ul-li{
    float: left;
    min-width: 80px;
    margin: auto;
    margin: 0px 11px;
    position: relative;
}
.floor-tables-ul-li-div{
	background:rgba(0,0,0,.2) url("../assets/images/logo.png") no-repeat center 9px /  50px 43px;
	height: 58px;
    border-radius: 4px;
}
.floor-tables-ul-li-p{
	text-align: center;
    margin-top: 5px;
    font-size: 15px;
	color: #fff;
}
.mui-table-view-cell>a:not(.mui-btn).mui-active{
	background: #ccc;
}
.floor-tables-ul .iconfont{
    position: absolute;
    top: -17px;
    right: -13px;
    padding: 0.33em 0.37em;
    background: transparent;
    font-size: 20px;
}
.floor-tables-ul .iconfont.icon-tuijian{
	font-weight: bold;
}
</style>