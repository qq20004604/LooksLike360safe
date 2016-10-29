<template>
    <div>
        <div class="btns">
            <button @click="setScoreHundred">
                点击让分数变成100
            </button>
            <button @click="setScoreRandom">
                点击让分数随机变为10-99
            </button>
            <button @click="setScoreLessThanTen">
                点击让分数随机变为0-9
            </button>
            <button @click="loginSuccess">
                登录成功
            </button>
            <button @click="notLogin">
                未登录
            </button>
            <button @click="loginExpired">
                未登录（登录过期）
            </button>
            <button @click="TestAddNewDialog">
                点击加载一个dialog(test按钮，点击无效）
            </button>
            <p>说明：</p>
            <ul>
                <li>

                    左上角最右边的箭头，鼠标移动过去有反应
                </li>
                <li>
                    右上角第四个按钮，点击后有下拉菜单
                </li>
                <li>
                    鼠标移动到安全防护中心和网购先陪位置，图片变亮
                </li>
                <li>
                    鼠标移动到3个大按钮，大按钮会变色，并且图标会动
                </li>
            </ul>
        </div>
        <div id="app">
            <index></index>
            <main-foot></main-foot>
        </div>
    </div>
</template>
<style>
    * {
        cursor: default;
    }
</style>
<style scoped>
    #app {
        width: 900px;
        height: 600px;
        margin: 0 auto;
    }

    .btns {
        position: absolute;
    }

    .btns > button {
        display: block;
    }
</style>

<script>
    import index from './components/index.vue'
    import mainFoot from './components/main-foot.vue'
    import Bus from './event-bus.js'


    export default {
        name: 'app',
        data(){
            return {}
        },
        methods: {
            setScoreHundred: function () {
                Bus.$emit("/score/change", 100);
            },
            setScoreRandom: function () {
                var score = Number((Math.random() * 90 + 10).toFixed(0));
                if (score === 100)
                    score = 99;
                Bus.$emit("/score/change", score);
            },
            setScoreLessThanTen: function () {
                var score = Number((Math.random() * 10).toFixed(0));
                if (score === 10)
                    score = 9;
                Bus.$emit("/score/change", score);
            },
            loginSuccess: function () {
                Bus.$emit("/login/success");
            },
            notLogin: function () {
                Bus.$emit("/login/logout");
            },
            loginExpired: function () {
                Bus.$emit("/login/expired");
            },
            TestAddNewDialog: function () {

            }
        },
        components: {
            index,
            mainFoot
        }
    }
</script>
