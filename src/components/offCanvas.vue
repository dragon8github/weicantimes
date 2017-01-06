<template>
    <aside id="offCanvasSide" class="mui-off-canvas-right">
        <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <div class="content" style="margin:20px 0px 20px 20px">
                    <a class="mui-navigate-right">
                        <img class="mui-media-object mui-pull-left head-img" id="head-img" width="50px" style="margin-right: 10px;" :src="logo">
                        <div class="mui-media-body" style="margin-left: 20px;">
                            <h3  style="color:#fff">
                                <span id="username">Lee</span>
                                <span id="quit" v-tap="{methods:quit}" class="mui-pull-right mui-h6"><i class="iconfont icon-guanji"></i></span>
                            </h3>
                            <p class='mui-ellipsis' style="color:#fff;overflow:visible"> 金额: ￥ 00.00</p>
                        </div>
                    </a>
                </div>
                <p style="margin: 15px;">
                    <button id="offCanvasHide"  v-tap="{methods:offCanvasHide}"  type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
                </p>
                <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="offcanvas-icon iconfont icon-zhuotai"></i> 餐桌安排
                        </a>
                    </li>
                    <li  class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="offcanvas-icon iconfont icon-zhifubaozhifu"></i> 支付宝支付
                        </a>
                    </li>
                    <li  class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="offcanvas-icon iconfont icon-weixinzhifu"></i> 微信支付
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="offcanvas-icon iconfont icon-dingdan"></i> 订单流水
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="offcanvas-icon iconfont icon-tuijianb"></i> 今日推荐
                        </a>
                    </li>
                    <li  class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="offcanvas-icon iconfont icon-chufang"></i> 后厨状态
                        </a>
                    </li>
                </ul>
                <div  class="footer">
                    <div class="container">
                        <p>企业合作 | 合作事宜 | 版权投诉</p>
                        <p class="gongsixinxi">粤ICP备12345678. © 2009-2016  微餐时代. Powered by Lee.</p>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>
<script>
    export default{
        data () {
            return {
                logo:require("assets/images/logo.png")
            }
        },
        methods:{
            quit () {
                var btnArray = ['否', '是'];
				mui.confirm('你确定要退出？', '温馨提示', btnArray, function(e) {
					if (e.index == 1){
						router.push("login")
					}
				})
            },
            offCanvasHide () {
                 mui('#menu_main').offCanvas('close');
            }
        },
        mounted () {

        }
    }
</script>
<style lang="css" scoped>
    #quit{
        color:#fff;margin-right: 10px;display: block;height:70px;width: 100px;text-align: right
    }
    .offcanvas-icon{font-size:27px;margin-right: 5px;}
    .icon-guanji{font-size:30px;}
    .gongsixinxi{margin:20px;}
    .footer{text-align: center;margin:50px auto;}
    html,body
    {
        background-color: #efeff4;
    }
    span.mui-icon {
        font-size: 14px;
        color: #007aff;
        margin-left: -15px;
        padding-right: 10px;
    }
    .mui-off-canvas-left {
        color: #fff;
    }
    .title {
        margin: 35px 15px 10px;
    }
    .title+.content {
        margin: 10px 15px 35px;
        color: #bbb;
        text-indent: 1em;
        font-size: 14px;
        line-height: 24px;
    }
    input {
        color: #000;
    }
</style>

