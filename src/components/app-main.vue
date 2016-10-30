<template>
    <div class="app-main">
        <div class="score-circle">
            <div class="score" :class="{scoreLessThanHundred:score<100&&score>9,scoreLessThanTen:score<10}">
                <div class="score-number">{{score}}</div>
                <div class="score-text">分</div>
            </div>
        </div>
        <div class="description">
            <div class="first-line" v-if="score==100">
                已修复全部问题，电脑很安全
            </div>
            <div class="first-line" v-if="score<100">
                电脑存在垃圾，建议立即修复
            </div>
            <div class="second-line" v-if="score==100">
                可以通过体检报告了解此次体检修复情况，并尝试使用更多功能
            </div>
            <div class="second-line" v-if="score<100">
                电脑存在垃圾，会占用硬盘过多空间，影响电脑效率
            </div>
        </div>
        <div class="see-details">
            <div class="see-details-img"></div>
            <div class="see-details-text" @click="setScoreRandom">
                查看详情
            </div>
        </div>
    </div>
</template>
<style scoped>
    .app-main {
        width: 900px;
        height: 250px;
        position: relative;
    }

    .score-circle {
        width: 157px;
        height: 157px;
        border: 5px solid white;
        border-radius: 83px;
        margin-left: 37px;
    }

    .score {
        height: 157px;
        line-height: 157px;
        color: white;
        position: relative;
        text-align: center;
    }

    .score-number {
        font-size: 80px;
        position: absolute;
        height: 80px;
        line-height: 80px;
        top: 40px;
        left: 20px;
        text-align: center;
        width: 120px;
    }

    .score-text {
        position: absolute;
        top: 95px;
        left: 140px;
        font-size: 12px;
        color: white;
        height: 12px;
        line-height: 12px;
    }

    .scoreLessThanHundred .score-text {
        left: 134px;
    }

    .scoreLessThanTen .score-text {
        left: 114px;
    }

    .description {
        position: absolute;
        top: 55px;
        left: 240px;
        height: 64px;
        color: white;
    }

    .description .first-line {
        height: 33px;
        line-height: 33px;
        font-size: 33px;
    }

    .description .second-line {
        margin-top: 16px;
        height: 15px;
        line-height: 15px;
        font-size: 15px;
    }

    .see-details {
        position: absolute;
        left: 345px;
        height: 180px;
        width: 210px;
        height: 70px;
        border: 2px solid rgba(200, 200, 200, 0.5);
        -webkit-border-radius: 35px;
        -moz-border-radius: 35px;
        border-radius: 35px;
        background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(234, 231, 231, 0.9));
    }

    .see-details:hover {
        background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(251, 251, 251, 0.9));
    }

    .see-details-img {
        height: 30px;
        width: 30px;
        background-image: url(./dist/images.png);
        background-position: -400px 0px;
        display: inline-block;
        position: absolute;
        left: 26px;
        top: 21px;
    }

    .see-details-text {
        font-size: 26px;
        position: absolute;
        left: 67px;
        top: 0;
        height: 74px;
        line-height: 74px;
        color: #00bc00;
        font-weight: 900;
    }

</style>
<script>
    import Bus from '../event-bus.js'
    export default{
        created: function () {
            var self = this;
            Bus.$on("/score/change", function (val) {
                self.score = Number(val);
            })
            this.score = Bus.getScore();
        },
        data(){
            return {
                score: 90
            }
        },
        methods: {
            getScore: function () {
                return this.score;
            },
            setScoreRandom: function () {
                var score = parseInt((Math.random() * 101));
                Bus.$emit("/score/change", score);
            }
        },
        components: {
            //'other-component':OtherComponent,
            //HeaderComponent,
        }
    }
</script>
