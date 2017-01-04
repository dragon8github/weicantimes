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
				 		<span><i class="iconfont icon-Eated iconfont-eated"></i><span class="floor-ico-text">Eated</span></span>
				 		<span><i class="iconfont icon-Seize iconfont-seize"></i><span class="floor-ico-text">Seize</span></span>
				 		<span><i class="iconfont icon-Destine iconfont-destine"></i><span class="floor-ico-text">Destine</span></span>
				 		<span><i class="iconfont icon-Recommended iconfont-recommended"></i><span class="floor-ico-text">Recommended</span></span>
				 	</div> 
					 <div class="floor" v-for="(item,index) in items" :class="'floor-' + index">
						 	<div class="floor-text">{{ item.key }}</div>
					 		<ul class="floor-tables-ul">
					 			<li class="floor-tables-ul-li" 
					 				v-tap="{ methods:setState,para1:index,para2:index2}"
					 				v-for="(item2,index2) in item.value">
					 				<div class="floor-tables-ul-li-div"></div>
					 				<p class="floor-tables-ul-li-p">{{ item2.name }}</p>
					 				<i class="iconfont" :class="getStateIco(item2.state)"></i>
					 			</li>
					 		</ul>
					 </div> 
				 </div>
			  </div>
			<mydeskinput></mydeskinput>
		 </div>
	 </div>
</template>

<script>

import mydeskinput from '../components/deskinput.vue'

export default {
  name: 'desk',
  data () {
    return {
    	items:[]
    };
  },
   components :{
        mydeskinput
  },
  methods : {
  	getStateIco (icoType) {
  		return `icon-${icoType}`;
  	},  	
	getItemsData () {
		 let self = this;
		 wct.AjaxGet(wct.host + wct.api.desk + "10086",function(data){
		 	 self.items = JSON.parse(data.result);
		 })
	},
	setState (e) {
		layer.open({
            type:"1",
			content:$("#deskinput").html(),
            style:"background:rgba(0,0,0,.5);width:75%;max-width:360px;",
            shade: 'background-color:transparent',
            className:"desk_layer",
            closeBtn:"2"
		})
		$(".desk_layer .desk_shurufa-ul .desk_shurufa_liNum").bind("click",this.setInputNum);
		$(".desk_layer .menu-input-submit").bind("click",{index1:e.para1,index2:e.para2},this.submitInput);
	},
	setInputNum (e) {
		let input = $(".desk_layer #meun-input").val()
		let n = e.target.innerText;
		if(n === "A/C") {
			$(".desk_layer #meun-input").val("");
		} else {
			$(".desk_layer #meun-input").val(input  + n);
		}
	},
	submitInput (e) {
		let index1 = e.data.index1;
		let index2 = e.data.index2;
		let state = e.target.innerText;
		let num = $(".desk_layer #meun-input").val();
		this.items[index1].value[index2].num = num
		this.items[index1].value[index2].state = state
		this.$socket.emit("server_menu",JSON.stringify(this.items));
		layer.closeAll();
	}
  },
  sockets : {
  	connect : function(){
	  console.log('socket connected')
	},
  	client_menu : function(data){
  		console.log("the client get server message");
  		this.items = JSON.parse(data);
  	}
  },
  created () {
  	this.getItemsData();
  	 mui.ready(function(){
		mui('.mui-scroll-wrapper').scroll({
		    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	 })
	 this.$options.sockets.socket_test = (data) => {
	 	console.log(data);
	 }
  }
};
</script>

<style lang="css" scoped>
.mui-navigate-right:after,.mui-push-left:after,.mui-push-right:after{color:#fff}
#desk--bakcground{height:100vh;width:100%;background:url(../assets/images/banner.jpg) no-repeat 50%/cover;-webkit-filter:blur(50px);-moz-filter:blur(50px);-ms-filter:blur(50px);-o-filter:blur(50px);filter:blur(50px);filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);position:absolute;z-index:1;top:0}
#desk-inner{position:relative;z-index:3;height:100vh;background:0 0;color:#fff!important}
.mui-table-view{background:0 0}
ul{margin:0;padding:0}
.not-function{background:0 0;font-size:16px}
.floor{font-size:16px;overflow:hidden;margin-bottom:10px}
.floor-text{text-indent:15px;line-height:45px}
.floor-ico{line-height:60px;width:100%;margin:auto;text-align:center}
.floor-ico span{padding:0 3px}
.floor-ico .iconfont{padding:.33em .37em;margin-right:5px}
.iconfont-eated{background:#ff8c00}
.iconfont-seize{background:#8b4513}
.iconfont-destine{background:#c71585}
.iconfont-recommended{background:#ffa07a}
.floor-tables-ul-li{float:left;min-width:80px;margin:auto;margin:0 11px;position:relative}
.floor-tables-ul-li-div{background:rgba(0,0,0,.2) url(../assets/images/logo.png) no-repeat center 9px/50px 43px;height:58px;border-radius:4px}
.floor-tables-ul-li-p{text-align:center;margin-top:5px;font-size:15px;color:#fff}
.mui-table-view-cell>a:not(.mui-btn).mui-active{background:#ccc}
.floor-tables-ul .iconfont{position:absolute;top:-17px;right:-13px;padding:.33em .37em;background:0 0;font-size:20px}
.floor-tables-ul .iconfont.icon-tuijian{font-weight:700}


</style>