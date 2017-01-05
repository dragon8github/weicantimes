<template>
    <aside id="offCanvasSide" class="mui-off-canvas-right">
        <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <div class="content" style="margin:20px 0px 20px 20px">
                    <a class="mui-navigate-right">
                        <img class="mui-media-object mui-pull-left head-img" id="head-img" width="50px" style="margin-right: 10px;" src="Images/logo.png">
                        <div class="mui-media-body" style="margin-left: 20px;">
                            <h3  style="color:#fff"><span id="username"></span><span id="quit" class="mui-pull-right mui-h6" style="color:#fff;margin-right: 10px;display: block;height:70px;width: 100px;text-align: right;"><i class="iconfont">&#xe605;</i></span></h3>
                            <p class=\'mui-ellipsis\' style="color:#fff"> 金额: ￥ 00.00</p>
                        </div>
                    </a>
                </div>
                <p style="margin: 10px 15px;">
                    <button id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
                </p>
                <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe61f;</i> 手机充值
                        </a>
                    </li>
                    <li id='signsaomazhifu' class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe61c;</i> 扫码支付
                        </a>
                    </li>
                    <li id='signweixinzhaoling' class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe61a;</i> 微信找零
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe600;</i> 代缴违章
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe619;</i> 火车票
                        </a>
                    </li>
                    <li id='signshoujibao' class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe61e;</i> 收寄宝
                        </a>
                    </li>
                    <li id="qianbaoliushui" class="mui-table-view-cell" >
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe602;</i> 钱包流水
                        </a>
                    </li>
                    <li id="yewuliusuhi" class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <i class="iconfont">&#xe60a;</i> 业务流水
                        </a>
                    </li>
                </ul>
                <div  class="footer">
                    <div class="container">
                        <p>企业合作 | 合作事宜 | 版权投诉</p>
                        <p>粤ICP备12345678. © 2009-2016 彩洋科技. Powered by Lee.</p>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>
<script>
    export default{
    }
</script>
<style lang="css" scoped>
    html,body
    {
        background-color: #efeff4;
    }
    p {
        text-indent: 22px;
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

