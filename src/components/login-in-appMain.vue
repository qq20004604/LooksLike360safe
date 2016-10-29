<template>
    <div class="login">
        <div class="login-left" v-if="haveLogined">
            <div class="name-line">
                <div class="name">零零水</div>
                <div class="level">Lv17</div>
            </div>
            <div class="exp-line">
                <div class="message"></div>
                <div class="exp-bar">
                    <div :style="expFillBlocks">
                    </div>
                    <div class="expFillText">{{exp}}</div>
                </div>
            </div>
        </div>
        <div class="login-left" v-if="!haveLogined">
            <div class="not-have-login-message" v-if="loginExpired">
                登录过期<br/>
                请重新登录
            </div>
            <div class="login-expired" v-if="!loginExpired">
                登录360账号
            </div>
        </div>
        <div class="login-right" :class="{notlogin:!haveLogined,havelogin:haveLogined}">

        </div>
    </div>
</template>
<style scoped>
    .login {
        width: 170px;
        height: 40px;
    }

    .login-left {
        width: 116px;
        height: 40px;
        float: left;
    }

    .name-line {
        height: 14px;
        color: white;
    }

    .name {
        width: 70px;
        height: 14px;
        font-size: 14px;
        text-align: right;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
    }

    .level {
        position: relative;
        top: 3px;
        background-color: #ff7f00;
        display: inline;
        font-size: 12px;
        padding: 0 3px 3px 3px;
        vertical-align: top;
    }

    .exp-line {
        height: 16px;
        margin-top: 8px;
    }

    .message {
        width: 14px;
        height: 13px;
        background-image: url(./dist/images.png);
        background-position: -550px 0px;
        display: inline-block;
        vertical-align: top;
    }

    .exp-bar {
        margin-left: 5px;
        vertical-align: top;
        border: 1px solid rgb(200, 200, 200);
        width: 77px;
        height: 13px;
        display: inline-block;
        position: relative;
    }

    .expFillText {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 13px;
        text-align: center;
        font-size: 7px;
    }

    .login-right {
        width: 40px;
        height: 40px;
        float: left;
    }

    .notlogin {
        background-image: url(./dist/images.png);
        background-position: -450px 0px;
    }

    .havelogin {
        background-image: url(./dist/images.png);
        background-position: -500px 0px;
    }

    .not-have-login-message {
        width: 103px;
        height: 40px;
        line-height: 20px;
        font-size: 12px;
        text-align: right;
        color: white;
    }

    .login-expired {
        width: 103px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: right;
        color: white;
    }
</style>
<script>
    import Bus from '../event-bus.js'
    export default{
        created: function () {
            var self = this;
            Bus.$on("/login/success", function () {
                self.haveLogined = true;
            })
            Bus.$on("/login/logout", function () {
                self.haveLogined = false;
                self.loginExpired = false;
            })
            //登录过期
            Bus.$on("/login/expired", function () {
                self.haveLogined = false;
                self.loginExpired = true;
            })
        },
        data(){
            return {
                exp: 8002,
                levelupExp: 10000,
                haveLogined: false,
                loginExpired: false
            }
        },
        computed: {
            expFillBlocks: function () {
                var width = (this.exp / this.levelupExp) * 100 + "%";
                return {
                    height: "100%",
                    width: width,
                    backgroundColor: 'white',
                }
            }
        },
        methods: {},
        components: {
            //'other-component':OtherComponent,
            //HeaderComponent,
        }
    }
</script>
