<template>
    <div class="top" v-bind:style="img">
        <app-title style="float:left;margin-top:5px;margin-left:5px;"></app-title>
        <app-config-btns style="float:right"></app-config-btns>
        <app-main class="app-main"></app-main>
        <login-area class="login-area"></login-area>
    </div>
</template>
<style scoped>
    .top {
        height: 440px;
        width: 100%;
        position: relative;
    }

    .app-main {
        position: absolute;
        top: 104px;
    }

    .login-area {
        position: absolute;
        top: 50px;
        right: 0;
    }

</style>
<script>
    // 本组件用于首页的上方区域（如绿色、黄色等背景区域）
    import appTitle from './app-title.vue'
    import appConfigBtns from './app-config-btns.vue'
    import appMain from './app-main.vue'
    import Bus from '../event-bus.js'
    import loginArea from './login-in-appMain.vue'
    //import OtherComponent from './components/other.vue'
    export default{
        created: function () {
            var self = this;
            var firstScore = Bus.getScore();
            if (firstScore === 100) {
                self.imgstate = true;
            } else {
                self.imgstate = false;
            }
            Bus.$on("/score/change", function (val) {
                var score = Number(val);
                if (score === 100) {
                    self.imgstate = true;
                } else {
                    self.imgstate = false;
                }
            })
        },
        data(){
            return {
                imgstate: true
            }
        },
        computed: {
            img: function () {
                if (this.imgstate) {
                    return {
                        backgroundImage: "url(./dist/bg-img-good.png)"
                    }
                } else {
                    return {
                        backgroundImage: "url(./dist/bg-img-normal.png)"
                    }
                }
            }
        },
        methods: {},
        components: {
            appTitle,
            appConfigBtns,
            appMain,
            loginArea
        }
    }
</script>
