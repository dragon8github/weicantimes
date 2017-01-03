<template>
    <div id="deskinput">
        <div id="deskinput-inner">
            <input type="text" id="meun-input" readonly placeholder="请输入人数" />
            <ul class="desk_shurufa-ul">
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li class="menu-input-Eated">                    <a class="menu-input-li-a"></a>
                    <i class="iconfont icon-Eated iconfont-eated"></i></li>
            </ul>
            <ul class="desk_shurufa-ul">
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li class="menu-input-Seize">                    <a class="menu-input-li-a"></a>
                    <i class="iconfont icon-Seize iconfont-seize"></i></li>
            </ul>
            <ul class="desk_shurufa-ul">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li class="menu-input-Destine">                    <a class="menu-input-li-a"></a>
                    <i class="iconfont icon-Destine iconfont-destine"></i></li>
            </ul>
            <ul class="desk_shurufa-ul">
                <li>+</li>
                <li>0</li>
                <li>-</li>
                <li class="menu-input-Recommended">
                    <a class="menu-input-li-a"></a>
                    <i class="iconfont icon-Recommended iconfont-recommended"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'deskinput'
    }
</script>
    
<style lang="css" scoped>
#deskinput{display:none}
#deskinput-inner{width:100%;overflow:hidden;text-align:center}
.desk_shurufa-ul{margin:0;padding:0;margin-bottom:15px}
.desk_shurufa-ul li{font-size:26px;position:relative;color:#fff;width:19%;height:45px;line-height:45px;text-align:center;background:#82a8ec;margin:0 5px;display:inline-block}
#meun-input{margin:15px;background:0 0;padding:0;margin:20px;max-width:86%;border-radius:0;border:0;color:#fff;border-bottom:1px solid #ccc}
.desk_shurufa-ul li:active{background:#e0e7f3;color:#666}
.menu-input-li-a{position:absolute;height:100%;width:100%;left:0;top:0}
#meun-input::placeholder{color:#fff}
.menu-input-Eated{background:#ff8c00!important}
.menu-input-Seize{background:#8b4513!important}
.menu-input-Destine{background:#c71585!important}
.menu-input-Recommended{background:#ffa07a!important}
.iconfont{font-size:20px;}
</style>