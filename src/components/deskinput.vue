<template>
    <div id="deskinput">
        <div id="deskinput-inner">
            <input type="text" id="meun-input" readonly placeholder="0" />
            <ul class="desk_shurufa-ul">
                <li class="desk_shurufa_liNum">7</li>
                <li class="desk_shurufa_liNum">8</li>
                <li class="desk_shurufa_liNum">9</li>
                <li class="menu-input-submit menu-input-Eated">
                    <a class="menu-input-li-a">Eated</a>
                    <i class="iconfont icon-Eated iconfont-eated"></i></li>
            </ul>
            <ul class="desk_shurufa-ul">
                <li class="desk_shurufa_liNum">4</li>
                <li class="desk_shurufa_liNum">5</li>
                <li class="desk_shurufa_liNum">6</li>
                <li class="menu-input-submit menu-input-Seize">
                    <a class="menu-input-li-a">Seize</a>
                    <i class="iconfont icon-Seize iconfont-seize"></i></li>
            </ul>
            <ul class="desk_shurufa-ul">
                <li class="desk_shurufa_liNum">1</li>
                <li class="desk_shurufa_liNum">2</li>
                <li class="desk_shurufa_liNum">3</li>
                <li class="menu-input-submit menu-input-Destine">
                    <a class="menu-input-li-a">Destine</a>
                    <i class="iconfont icon-Destine iconfont-destine"></i></li>
            </ul>
            <ul class="desk_shurufa-ul">
                <li class="desk_shurufa_liNum desk_shurufa_zero">0</li>
                <li class="desk_shurufa_liNum desk_shurufa_reset">A/C</li>
                <li class="menu-input-submit menu-input-Recommended">
                    <a class="menu-input-li-a">Recommended</a>
                    <i class="iconfont icon-Recommended iconfont-recommended"></i>
                </li>
            </ul>
            <button type="button" class="mui-btn mui-btn-success mui-btn-block goMenu">去点菜</button>
            <button type="button" class="mui-btn mui-btn-danger mui-btn-block goBalance">去结账</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'deskinput'
    }
</script>
    
<style lang="css" scoped>
    .mui-btn-block{    width: 90%;        margin: 20px auto;}
#deskinput{display:none}
#deskinput-inner{width:100%;overflow:hidden;text-align:center}
.desk_shurufa-ul{margin:0;padding:0;margin-bottom:15px}
.desk_shurufa-ul li{transition: .3s all ease;font-size:26px;position:relative;color:#fff;width:19%;height:45px;line-height:45px;text-align:center;background:#82a8ec;margin:0 5px;display:inline-block}
#meun-input{font-size: 26px;
    text-align: right;margin:15px;background:0 0;padding:0;margin:20px;max-width:86%;border-radius:0;border:0;color:#fff;border-bottom:1px solid #ccc}
.desk_shurufa-ul li:active{background:#e0e7f3;color:#666}
.menu-input-li-a{position:absolute;height:100%;width:100%;left:0;top:0;text-indent: -9999px;}
#meun-input::placeholder{color:#fff}
.menu-input-Eated{background:#ff8c00!important}
.menu-input-Seize{background:#8b4513!important}
.menu-input-Destine{background:#c71585!important}
.menu-input-Recommended{background:#ffa07a!important}
.iconfont{font-size:20px;}
.desk_shurufa-ul .desk_shurufa_zero{width: 43%;}
.desk_shurufa-ul .desk_shurufa_reset{font-size:20px;}
</style>