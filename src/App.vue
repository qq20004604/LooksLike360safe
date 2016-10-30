<template>
    <div>
        <div class="btns">
            <div>一些有趣的功能：</div>
            <button @click="setScoreHundred">
                点击让分数变成100
            </button>
            <button @click="setScoreRandom">
                点击让分数随机变为10-99
            </button>
            <button @click="setScoreLessThanTen">
                点击让分数随机变为0-9
            </button>
            <br/>
            <button @click="loginSuccess">
                登录成功
            </button>
            <button @click="notLogin">
                未登录
            </button>
            <button @click="loginExpired">
                未登录（登录过期）
            </button>
            <br/>
            <button @click="toolboxAdd">
                右下角新增一个按钮（如果是4个则不能新增）
            </button>
            <button @click="toolboxRemove">
                右下角移除一个按钮（如果是0个则不能移除）
            </button>
            <br/>
            <button @click="TestAddNewDialog">
                点击加载一个dialog(test按钮，点击无效）
            </button>
            <p>说明：</p>
            <ul>
                <li>
                    左上角最右边的箭头，<b>鼠标移动上去</b>有反应；
                </li>
                <li>
                    右上角第四个按钮，<b>点击</b>后有下拉菜单；
                </li>
                <li>
                    点击登录区域，可以<b>切换</b>登录、未登录、登录超时状态；
                </li>
                <li>
                    点击查看详情，可以<b>切换分数</b>；
                </li>
                <li>
                    鼠标移动到安全防护中心和网购先陪位置，<b>图片变亮</b>；
                </li>
                <li>
                    鼠标移动到3个大按钮，大按钮会<b>变色</b>，并且<b>图标会动</b>，<b>点击</b>后会提示你；
                </li>
                <li>
                    鼠标移动到<b>右下角的图标</b>之上，会有边框。鼠标<b>点击</b>右下角图标，会提示你点击了哪一个；
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
        width: 900px;
        top: 650px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    li {
        height: 20px;
        line-height: 20px;
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
            toolboxAdd: function () {
                Bus.$emit("/foot-toolbox/add");
            },
            toolboxRemove: function () {
                Bus.$emit("/foot-toolbox/remove");
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
