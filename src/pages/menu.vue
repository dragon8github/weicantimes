<template>
	<div>
		<div class="banner">
			<div class="banner-bottom">
				<span class="bannert-text">weicanTImes experience systems</span>
				<span class="banner-time">{{ DateStr }}</span>
			</div>
		</div>
		<div class="menu">
			<div class="mui-col-xs-3">
				<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
  
  <a class="mui-control-item mui-active" data-index="0" href="#content1">选项1</a><a class="mui-control-item" data-index="1" href="#content2">选项2</a><a class="mui-control-item" data-index="2" href="#content3">选项3</a><a class="mui-control-item" data-index="3" href="#content4">选项4</a><a class="mui-control-item" data-index="4" href="#content5">选项5</a><a class="mui-control-item" data-index="5" href="#content6">选项6</a><a class="mui-control-item" data-index="6" href="#content7">选项7</a><a class="mui-control-item" data-index="7" href="#content8">选项8</a><a class="mui-control-item" data-index="8" href="#content9">选项9</a><a class="mui-control-item" data-index="9" href="#content10">选项10</a><a class="mui-control-item" data-index="10" href="#content11">选项11</a><a class="mui-control-item" data-index="11" href="#content12">选项12</a><a class="mui-control-item" data-index="12" href="#content13">选项13</a><a class="mui-control-item" data-index="13" href="#content14">选项14</a><a class="mui-control-item" data-index="14" href="#content15">选项15</a></div>
			</div>
			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;"><div id="content1" class="mui-control-content"><ul class="mui-table-view">

			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../assets/images/logo.png">
					<div class="mui-media-body">
						<h4>Small steamed bun</h4>
						<p class="mui-ellipsis"><span class="mui-ellipsis-left">Monthly sales 
 454</span><span class="mui-ellipsis-right">Applause Rate 100%</span></p>
						<p class="money"><span class="money-left">$</span><span class="money-right">6</span></p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../assets/images/logo.png">
					<div class="mui-media-body">
						<h4>Small steamed bun</h4>
						<p class="mui-ellipsis"><span class="mui-ellipsis-left">Monthly sales 
 454</span><span class="mui-ellipsis-right">Applause Rate 100%</span></p>
						<p class="money"><span class="money-left">$</span><span class="money-right">6</span></p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../assets/images/logo.png">
					<div class="mui-media-body">
						<h4>Small steamed bun</h4>
						<p class="mui-ellipsis"><span class="mui-ellipsis-left">Monthly sales 
 454</span><span class="mui-ellipsis-right">Applause Rate 100%</span></p>
						<p class="money"><span class="money-left">$</span><span class="money-right">6</span></p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../assets/images/logo.png">
					<div class="mui-media-body">
						<h4>Small steamed bun</h4>
						<p class="mui-ellipsis"><span class="mui-ellipsis-left">Monthly sales 
 454</span><span class="mui-ellipsis-right">Applause Rate 100%</span></p>
						<p class="money"><span class="money-left">$</span><span class="money-right">6</span></p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../assets/images/logo.png">
					<div class="mui-media-body">
						<h4>Small steamed bun</h4>
						<p class="mui-ellipsis"><span class="mui-ellipsis-left">Monthly sales 
 454</span><span class="mui-ellipsis-right">Applause Rate 100%</span></p>
						<p class="money"><span class="money-left">$</span><span class="money-right">6</span></p>
					</div>
				</a>
			</li>
			</ul></div></div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'menu',

  
  data () {
    return {
    	DateStr : "",
    };
  },
  methods : {
	setDate () {
		let self = this;
		let date = new Date();
		let year = date.getFullYear();
		let money = money = date.getMonth() + 1;
		let day = day = date.getDate();
		let hour = date.getHours();
        let minute = date.getMinutes();

        self.DateStr = `${year}-${money}-${day} ${hour}:${minute}`
	}
  },
  created () {
	this.setDate();
  }
};
</script>

<style lang="css" scoped>
.menu{
	clear:both;
	overflow: hidden;
	height: 480px;
}
.banner{
	background:url("../assets/images/banner.jpg") no-repeat center center / cover;
	width:100%;
	height:30%;
	min-height: 200px;	
	position:relative;
}
.banner-bottom{
	height:40px;
	line-height: 40px;
	color:#fff;
	font-size:14px;
	position:absolute;
	bottom: 0;
	background: rgba(0,0,0,.5);
	width: 100%
}
.bannert-text{
	float:left;
	padding-left:15px;
}
.banner-time{
	float:right;
	padding-right:15px;

}
.mui-row.mui-fullscreen>[class*="mui-col-"] {
	height: 100%;
}
.mui-row.mui-fullscreen>[class*="mui-col-"] {
    height: 100%;
}
.mui-row>[class*=mui-col-] {
    float: left;
}
.mui-col-xs-3,
.mui-col-xs-9 {
	overflow-y: auto;
	height: 100%;
	float:left;
}

.mui-segmented-control .mui-control-item {
	line-height: 50px;
	width: 100%;
}

.mui-control-content {
	display: block;
}

.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
	background-color: #fff;
}
.money{
	color:#f60;
}
.money-left{
	margin-right: 3px;

}
.money-right{
	font-weight: 700;
	font-size:20px;
	position: relative;
	top: 1.4px;
}

.mui-ellipsis{
    font-size: .293333rem;
}

.mui-ellipsis-left{
	    float: left;
	    margin-right: 10px
}
.mui-ellipsis-right{
	    float: left;
	
}
.mui-control-item{
	position: relative;
}
.mui-control-item.mui-active::after{
	content:" ";
	position: absolute;
	height: 100%;
	width:4px;
	left: 0;
	top: 0;
	background: burlywood
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
	color:inherit;
}
</style>