<template>
    <div class="protect-tools">
        <div class="protect-center">
            <div class="center-img img"></div>
            <div class="center-text">安全防护中心</div>
        </div>
        <div class="line"></div>
        <div class="protect-shopping">
            <div class="shopping-img img"></div>
            <div class="shopping-text">网购先陪</div>
        </div>
    </div>
</template>
<style scoped>
    .protect-tools {
        width: 210px;
        height: 70px;
        color: white;
    }

    .protect-tools > div {
        float: left;
        vertical-align: top;
    }

    .protect-tools > div:hover .img {
        filter: drop-shadow(0px 0px 2px #ccc);
        -moz-filter: drop-shadow(0px 0px 2px #ccc);
        -webkit-filter: drop-shadow(0px 0px 2px #ccc);
    }

    .line {
        width: 0px;
        height: 50px;
        margin-left: 8px;
        margin-top: 10px;
        border-width: 0 0 0 1px;
        border-style: dashed;
        border-color: white;
    }

    .protect-center {
        margin-left: 18px;
        height: 70px;
        width: 96px;
        position: relative;
    }

    .img {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 10px;
        background-image: url(./dist/images.png);
    }

    .center-img {
        left: 34px;
        background-position: -600px 0px;
    }

    .center-text {
        position: absolute;
        top: 47px;
        left: 0px;
        line-height: 13px;
        height: 13px;
        width: 100%;
        font-size: 13px;
        text-align: center;
    }

    .protect-shopping {
        margin-left: 24px;
        width: 63px;
        height: 70px;
        position: relative;
    }

    .shopping-img {
        left: 18px;
        background-position: -650px 0px;
    }

    .shopping-text {
        position: absolute;
        top: 47px;
        left: 0px;
        line-height: 13px;
        height: 13px;
        width: 100%;
        font-size: 13px;
        text-align: center;
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
