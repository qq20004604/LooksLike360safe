<template>
    <div class="foot-big-btns">
        <div class="big-btn" @click="clickThunder">
            <div class="big-circle thunder">
                <div class="middle-circle thunder">
                    <div class="min-circle thunder">
                        <div class="inner thunder"></div>
                    </div>
                </div>
            </div>
            <div class="text">查杀修复</div>
        </div>

        <div class="big-btn" @click="clickClean">
            <div class="big-circle clean">
                <div class="middle-circle clean">
                    <div class="min-circle clean">
                        <div class="inner clean"></div>
                    </div>
                </div>
            </div>
            <div class="text">电脑清理</div>
        </div>

        <div class="big-btn" @click="clickOptimization">
            <div class="big-circle optimization">
                <div class="middle-circle optimization">
                    <div class="min-circle optimization">
                        <div class="inner optimization"></div>
                    </div>
                </div>
            </div>
            <div class="text">优化加速</div>
        </div>
    </div>
</template>
<style scoped>
    .foot-big-btns {
        width: 330px;
        height: 117px;
    }

    .big-btn {
        width: 98px;
        height: 117px;
        margin-right: 18px;
        position: relative;
        display: inline-block;
        float: left;
    }

    .foot-big-btns .big-btn:last-child {
        margin-right: 0;
    }

    .text {
        font-size: 14px;
        height: 14px;
        width: 100%;
        line-height: 14px;
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        color: #585858;
    }

    .big-circle {
        width: 98px;
        height: 98px;
        box-sizing: border-box;
        border-radius: 49px;
    }

    .big-circle.thunder {
        border: 8px solid #eff9ff;
    }

    .big-circle.clean {
        border: 8px solid #faf6ff;
    }

    .big-circle.optimization {
        border: 8px solid #effbfa;
    }

    .middle-circle {
        width: 82px;
        height: 82px;
        box-sizing: border-box;
        border-radius: 49px;
    }

    .middle-circle.thunder {
        border: 6px solid #cdecff;
    }

    .middle-circle.clean {
        border: 6px solid #eee2ff;
    }

    .middle-circle.optimization {
        border: 6px solid #cef3f1;
    }

    .min-circle {
        width: 70px;
        height: 70px;
        box-sizing: border-box;
        border-radius: 49px;
        position: relative;
        overflow: hidden;
    }

    .min-circle.thunder {
        border: 2px solid #31b1ff;
    }

    .min-circle.clean {
        border: 2px solid #ba88ff;
    }

    .min-circle.optimization {
        border: 2px solid #3dd0c7;
    }

    .big-circle:hover .min-circle.thunder {
        animation: changeColorThunder 0.25s both;
        background-color: #31b1ff;
    }

    .big-circle:hover .min-circle.clean {
        animation: changeColorClean 0.25s both;
        background-color: #ba88ff;
    }

    .big-circle:hover .min-circle.optimization {
        animation: changeColorOptimization 0.25s both;
        background-color: #3dd0c7;
    }

    .inner {
        position: absolute;
        left: 18px;
        top: 12px;
        width: 30px;
        height: 44px;
        background-image: url(./dist/images.png);
    }

    .inner.thunder {
        background-position: -700px 0px;
    }

    .inner.clean {
        top: 18px;
        left: 16px;
        width: 36px;
        height: 36px;
        background-position: -800px 0px;
    }

    .inner.optimization {
        top: 18px;
        left: 19px;
        width: 36px;
        height: 36px;
        background-position: -900px 0px;
    }

    .big-circle:hover .inner {
        background-image: url(./dist/images.png);
    }

    .big-circle:hover .inner.thunder {
        background-position: -750px 0px;
        animation: thunderMove 0.3s both 0.25s;
    }

    .big-circle:hover .inner.clean {
        background-position: -850px 0px;
        animation: cleanMove 0.4s both 0.25s;
    }

    .big-circle:hover .inner.optimization {
        background-position: -950px 0px;
        animation: optimizationMove 0.4s both 0.25s;
    }

    @keyframes thunderMove {
        0% {
            left: 60px;
            top: -40px;
        }
        33% {
            left: 18px;
            top: 12px;
        }
        67% {
            left: 26px;
            top: 4px;
        }
        100% {
            left: 18px;
            top: 12px;
        }
    }

    @keyframes cleanMove {
        0% {
            -webkit-transform: rotateZ(0deg);
            -moz-transform: rotateZ(0deg);
            -ms-transform: rotateZ(0deg);
            -o-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
        }
        17% {
            -webkit-transform: rotateZ(-30deg);
            -moz-transform: rotateZ(-30deg);
            -ms-transform: rotateZ(-30deg);
            -o-transform: rotateZ(-30deg);
            transform: rotateZ(-30deg);
        }
        34% {
            -webkit-transform: rotateZ(-60deg);
            -moz-transform: rotateZ(-60deg);
            -ms-transform: rotateZ(-60deg);
            -o-transform: rotateZ(-60deg);
            transform: rotateZ(-60deg);
        }
        50% {
            -webkit-transform: rotateZ(-90deg);
            -moz-transform: rotateZ(-90deg);
            -ms-transform: rotateZ(-90deg);
            -o-transform: rotateZ(-90deg);
            transform: rotateZ(-90deg);
        }
        67% {
            -webkit-transform: rotateZ(-60deg);
            -moz-transform: rotateZ(-60deg);
            -ms-transform: rotateZ(-60deg);
            -o-transform: rotateZ(-60deg);
            transform: rotateZ(-60deg);
        }
        84% {
            -webkit-transform: rotateZ(-30deg);
            -moz-transform: rotateZ(-30deg);
            -ms-transform: rotateZ(-30deg);
            -o-transform: rotateZ(-30deg);
            transform: rotateZ(-30deg);
        }
        100% {
            -webkit-transform: rotateZ(0deg);
            -moz-transform: rotateZ(0deg);
            -ms-transform: rotateZ(0deg);
            -o-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
        }
    }

    @keyframes optimizationMove {
        0% {
            left: 19px;
            top: 18px;
        }
        14% {
            left: 27px; /* +8 */
            top: 10px; /* -8 */
        }
        28% {
            left: 41px; /* +14 */
            top: -8px; /* -18 */
        }
        43% {
            left: 61px; /* +20 */
            top: -38px; /* -30 */
        }
        57% {
            left: -23px;
            top: 74px;
        }
        71% {
            left: -3px;
            top: 44px;
        }
        85% {
            left: 11px;
            top: 26px;
        }
        100% {
            left: 19px;
            top: 18px;
        }
    }

    @keyframes changeColorThunder {
        0% {
            background-image: radial-gradient(white, white);
        }
        10% {
            background-image: radial-gradient(white, white 80%, #31b1ff);
        }
        20% {
            background-image: radial-gradient(white, white 60%, #31b1ff);
        }
        30% {
            background-image: radial-gradient(white, white 40%, #31b1ff);
        }
        40% {
            background-image: radial-gradient(white, white 20%, #31b1ff);
        }
        50% {
            background-image: radial-gradient(white, white 0%, #31b1ff);
        }
    }

    @keyframes changeColorClean {
        0% {
            background-image: radial-gradient(white, white);
        }
        10% {
            background-image: radial-gradient(white, white 80%, #ba88ff);
        }
        20% {
            background-image: radial-gradient(white, white 60%, #ba88ff);
        }
        30% {
            background-image: radial-gradient(white, white 40%, #31b1ff);
        }
        40% {
            background-image: radial-gradient(white, white 20%, #ba88ff);
        }
        50% {
            background-image: radial-gradient(white, white 0%, #ba88ff);
        }
    }

    @keyframes changeColorOptimization {
        0% {
            background-image: radial-gradient(white, white);
        }
        10% {
            background-image: radial-gradient(white, white 80%, #3dd0c7);
        }
        20% {
            background-image: radial-gradient(white, white 60%, #3dd0c7);
        }
        310% {
            background-image: radial-gradient(white, white 40%, #3dd0c7);
        }
        40% {
            background-image: radial-gradient(white, white 20%, #3dd0c7);
        }
        50% {
            background-image: radial-gradient(white, white 0%, #3dd0c7);
        }
    }

</style>
<script>
    export default{
        data(){
            return {}
        },
        methods: {
            clickThunder: function () {
                alert("你点击了\"查杀修复\"");
            },
            clickClean: function () {
                alert("你点击了\"电脑清理\"");
            },
            clickOptimization: function () {
                alert("你点击了\"优化加速\"");
            },
        },
        components: {

        }
    }
</script>
