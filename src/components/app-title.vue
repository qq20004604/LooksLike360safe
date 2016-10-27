<template>
    <div class="app-title">
        <span class="app-title-img"></span>
        <span class="app-title-text">360安全卫士领航版</span>
        <span class="app-title-right-icon">
            <div class="extendTip">
                <p>【正式版】</p>
                <p>备用木马库：2016-10-27</p>
                <p>主程序版本：领航版(10.3.0.2001)</p>
                <p>点击可查看升级更新</p>
            </div>
        </span>
    </div>
</template>
<style scoped>
    .app-title {
        font-size: 12px;
        height: 17px;
        line-height: 17px;
        color: white;
    }

    .app-title-img {
        width: 17px;
        height: 17px;
        background-image: url(./dist/images.png);
        background-position: 0 0;
        display: inline-block;
        vertical-align: top;
    }

    .app-title-text {
        vertical-align: top;
    }

    .app-title-right-icon {
        vertical-align: top;
        width: 17px;
        height: 12px;
        margin-top: 3px;
        background-image: url(./dist/images.png);
        background-position: -50px 0;
        display: inline-block;
        position: relative;
    }

    .extendTip {
        display: none;
        position: absolute;
        left: 30px;
        top: 0;
        width: 207px;
        height: 80px;
        background-color: rgb(255, 248, 208);
        border: rgb(228, 180, 80) 1px solid;
        color: black;
    }

    .app-title-right-icon:hover .extendTip {
        display: block;
    }

    .extendTip p {
        height: 20px;
        line-height: 20px;
        margin: 0 0 0 10px;
    }
</style>
<script>
    //import HeaderComponent from './components/header.vue'
    //import OtherComponent from './components/other.vue'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {},
        components: {
            //'other-component':OtherComponent,
            //HeaderComponent,
        }
    }
</script>
