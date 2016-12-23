<template>
	<div>
		<div class="banner">
			<div class="banner-bottom">
				<span class="bannert-text">weicanTImes experience systems</span>
				<span class="banner-time">{{ DateStr }}</span>
			</div>
		</div>
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right"><i class="iconfont icon-diancan"></i>Ordering service
	        	<span class="mui-badge mui-badge-danger">18</span>
		        </a>
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right"><i class="iconfont icon-jiesuan"></i>Settlement cash register
		        <span class="mui-badge mui-badge-danger">5</span>
		        </a>
		    </li>
		    <li class="mui-table-view-cell">
		        <a class="mui-navigate-right"><i class="iconfont icon-xiaoshifang"></i>Room reservation
		        <span class="not-function mui-badge mui-badge-danger">This function is not open</span>
		        </a>
		    </li>
		     <li class="mui-table-view-cell">
		        <a class="mui-navigate-right"><i class="iconfont icon-paidui"></i>Queue collar
		        <span class="not-function mui-badge mui-badge-danger">This function is not open</span>
		        </a>
		    </li>
		</ul>
		<div class="button-div"><button type="button" class="mui-btn mui-btn-danger mui-btn-block">log out</button></div>
	</div>
</template>

<script>
export default {

  name: 'index',

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
.banner{
	background:url("../assets/images/banner.jpg") no-repeat center center / cover;
	width:100%;
	height:30%;
	min-height: 300px;	
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
.button-div{
	margin:20px;
}
.iconfont{
	color:#a88f56;
	font-size:24px;
	margin-right: 7px;
	position: relative;
	top:3px;
}
.not-function {
	background: transparent;
    color: #999;
    font-size: 16px;

}
</style>