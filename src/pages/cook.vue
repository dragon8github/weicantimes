<template>
    <div>
        <!--页面标题栏开始-->
        <div class="mui-navbar-inner mui-bar mui-bar-nav header">
            <h1 class="mui-title">未完成</h1>
            <a class="mui-icon mui-pull-right" id="select_time"><img :src="img_shijian" /><span style="margin-left:5px;font-size:16px">时间</span></a>
        </div>
        <!--页面标题栏结束-->

        <!-- 主内容    开始  -->
        <div id="pullrefresh" class="mui-page-content mui-content mui-inner-wrap mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul style="margin-top: 0px;" id="mui-table-view" class="mui-table-view mui-table-view-striped mui-table-view-condensed">
                    <li class="mui-table-view-cell" data-orderid="201601271550424372079">
                        <div class="mui-slider-right mui-disabled lijichongzhengbtn">
                            <a class="mui-btn mui-btn-red"><i class="iconfont icon-dagou"></i><p class="lijichongzheng">&nbsp;&nbsp;完成订单</p></a>
                        </div>
                        <a class="goto_subpage" href="#info">
                            <div class="mui-slider-handle">
                                <div class="mui-table">
                                    <div class="mui-table-cell mui-col-xs-9">
                                        <h4 class="mui-ellipsis-2 "><img class="head-img" id="head-img" height="32" width="32"  :src="logo">&nbsp;餐桌号 ：A001 </h4>
                                        <h5 class=" mui-ellipsis"><img :src="img_order" />&nbsp;订单号 ：6264184415221 </h5>
                                        <p class="mui-h5 mui-ellipsis "><img :src="img_waiter" />&nbsp;服务员 ：Lee</p>
                                    </div>
                                    <div class="mui-table-cell mui-col-xs-3 mui-text-right Lee_time">
                                        <span class="mui-h5">今天  16:30</span>
                                        <span class="mui-h5"><img :src="img_alert" /></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 主内容    结束  -->

        <!-- 底部导航   开始 -->
        <nav id="mui-bar" class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active">
                <img :src="img_alert" />
                <span class="mui-tab-label">未完成</span>
            </a>
            <a class="mui-tab-item" href="#tabbar">
                <img :src="img_good" />
                <span class="mui-tab-label">已完成</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <img :src="img_cannel" />
                <span class="mui-tab-label">已取消</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <img :src="img_all" />
                <span class="mui-tab-label">所有</span>
            </a>
        </nav>
        <!-- 底部导航   结束 -->
    </div>
</template>

<script>
    export default{
        data(){
            return{
               logo:require("assets/images/logo.png"),
               img_all:require("assets/images/all.png"),
               img_cannel:require("assets/images/cannel.png"),
               img_good:require("assets/images/good.png"),
               img_alert:require("assets/images/alert.png"),
               img_order:require("assets/images/order.png"),
               img_waiter:require("assets/images/waiter.png"),
               img_shijian:require("assets/images/shijian.png"),
            }
        },
        components:{

        }
    }
</script>
<style lang="css" scoped>
.mui-table .Lee_time {
vertical-align: middle;
}
.lijichongzheng {
    color: #fff;
    vertical-align: middle;
}
.iconfont{
    font-size:30px;
}
.mui-table .Lee_time .iconfont {
    color: #007AFF;
    font-size: 26px;
}
.mui-ellipsis {
    overflow: visible;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 14px;
}
span.mui-badge.mui-badge-danger{
    position: relative;
    bottom: 2px;
}
</style>

