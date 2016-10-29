<template>
    <div class="app-config-btns">
        <span class="img share"></span>
        <span class="img skin"></span>
        <span class="img advice"></span>
        <span class="img config-btn" @click="setMenuShow"></span>
        <span class="img min"></span>
        <span class="img close"></span>
        <div v-if="configMenuIsShow" class="config-menu" @mouseleave="setMenuHidden" @click="setMenuHidden">
            <div>设置</div>
            <div>检测更新</div>
            <div>切换为企业版</div>
            <div class="line"></div>
            <div>论坛求助</div>
            <div>360网站</div>
            <div>隐私保护</div>
            <div>360为什么免费</div>
            <div>关于我们</div>
        </div>
    </div>
</template>
<style scoped>
    .app-config-btns {
        position: relative;
        z-index: 20;
    }

    .config-menu {
        position: absolute;
        top: 26px;
        left: 100px;
        width: 130px;
        height: 217px;
        background-color: white;
        -webkit-box-shadow: 1px 1px 2px 2px #ddd;
        -moz-box-shadow: 1px 1px 2px 2px #ddd;
        box-shadow: 1px 1px 2px 2px #ddd;
    }

    .config-menu > div {
        height: 27px;
        line-height: 27px;
        font-size: 12px;
        padding-left: 10px;
    }

    .config-menu > div:hover {
        background-color: rgb(225, 225, 225);
    }

    .config-menu .line {
        width: 100%;
        height: 1px;
        background-color: #b0b0b0;
    }

    .img {
        width: 26px;
        height: 26px;
        background-image: url(./dist/images.png);
        background-position: -100px 7px;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
    }

    .img:hover {
        background-color: rgba(211, 211, 211, 0.5);
    }

    .share {
        background-position-x: -95px;
    }

    .skin {
        background-position-x: -143px;
    }

    .advice {
        background-position-x: -194px;
    }

    .config-btn {
        background-position-x: -243px;
    }

    .min {
        background-position-x: -294px;
    }

    .close {
        background-position-x: -344px;
    }

</style>
<script>
    //import HeaderComponent from './components/header.vue'
    //import OtherComponent from './components/other.vue'
    export default{
        data(){
            return {
                configMenuIsShow: false
            }
        },
        methods: {
            setMenuShow: function () {
                this.configMenuIsShow = true;
            },
            setMenuHidden: function () {
                this.configMenuIsShow = false;
            }
        },
        components: {
            //'other-component':OtherComponent,
            //HeaderComponent,
        }
    }
</script>
