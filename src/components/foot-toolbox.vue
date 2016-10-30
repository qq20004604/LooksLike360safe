<template>
    <div class="toolbox">
        <div class="first-line">
            <div class="first-line-img" @click="clickWechat">

            </div>
            <div class="first-line-text">
                <div class="first-line-title" @click="clickWechat">微信清理</div>
                <div class="first-line-description" @click="clickWechat">清理微信垃圾 节省手机空间</div>
            </div>
        </div>
        <div class="second-line">
            <div class="more-tools">
                <div class="more-tools-img"></div>
                <div class="more-tools-text">更多</div>
            </div>
            <div class="tools-group">
                <div class="tools-group-btn" v-for="i in toolsGroup" @click="clickToolsGroup(i)">
                    <div class="tools-group-img" :style="{backgroundPositionX:i.imagePosition}"></div>
                    <div class="tools-group-title">{{i.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .toolbox {
        width: 375px;
        height: 128px;
    }

    .first-line {
        width: 100%;
        height: 32px;
    }

    .second-line {
        width: 100%;
        height: 70px;
        margin-top: 29px;
    }

    .first-line-img {
        float: right;
        margin-right: 10px;
        width: 37px;
        height: 32px;
        background-image: url(./dist/images.png);
        background-position: -0px -50px;
    }

    .first-line-text {
        margin-right: 5px;
        height: 32px;
        float: right;
    }

    .first-line-title {
        text-align: right;
        height: 16px;
        line-height: 16px;
        color: black;
        vertical-align: top;
        font-size: 11px;
        cursor: pointer;
    }

    .first-line-description {
        text-align: right;
        height: 16px;
        line-height: 16px;
        color: #8a8a8a;
        vertical-align: bottom;
        font-size: 11px;
        cursor: pointer;
    }

    .more-tools {
        height: 70px;
        width: 32px;
        float: right;
        margin-right: 21px;
        position: relative;
    }

    .more-tools-img {
        margin-top: 10px;
        width: 32px;
        height: 32px;
        background-image: url(./dist/images.png);
        background-position: -50px -50px;
    }

    .more-tools-img:hover {
        background-position: -300px -50px;
    }

    .more-tools-text {
        position: absolute;
        top: 54px;
        width: 100%;
        height: 13px;
        line-height: 13px;
        text-align: center;
        font-size: 11px;
        font-weight: 800;
        color: #008aff;
        cursor: pointer;
    }

    .tools-group {
        float: right;
        margin-right: 14px;
        width: 308px;
        height: 70px;
    }

    .tools-group-btn {
        width: 77px;
        height: 70px;
        float: right;
        position: relative;
    }

    .tools-group-btn:hover {
        outline: 1px solid #dadada;
    }

    .tools-group-img {
        position: absolute;
        top: 10px;
        left: 23px;
        width: 32px;
        height: 32px;
        background-image: url(./dist/images.png);
        background-position-y: -50px;
    }

    .tools-group-title {
        position: absolute;
        top: 54px;
        width: 100%;
        height: 13px;
        line-height: 13px;
        vertical-align: top;
        text-align: center;
        font-size: 11px;
        color: #7c7c7c;
    }
</style>
<script>
    import Bus from '../event-bus.js'
    export default{
        created: function () {
            var self = this;
            Bus.$on('/foot-toolbox/remove', function () {
                if (self.toolsGroup.length === 0) {
                    alert("没有按钮了，不能再删除了");
                    return;
                }
                var i = parseInt(Math.random() * self.toolsGroup.length);
                var temp = self.toolsGroup[i];
                self.toolsGroupTemp.push(temp);
                self.toolsGroup.splice(i, 1);
            })
            Bus.$on('/foot-toolbox/add', function () {
                if (self.toolsGroupTemp.length === 0) {
                    alert("已满，不能再新增了");
                    return;
                }
                var temp = self.toolsGroupTemp.shift();
                self.toolsGroup.push(temp);
            })
        },
        data(){
            return {
                toolsGroup: [
                    {
                        title: "Win10设置",
                        imagePosition: "-150px"
                    },
                    {
                        title: "宽带测速器",
                        imagePosition: "-200px"
                    },
                    {
                        title: "驱动大师",
                        imagePosition: "-250px"
                    },
                    {
                        title: "软件管家",
                        imagePosition: "-100px"
                    }
                ],
                toolsGroupTemp: []
            }
        },
        methods: {
            clickToolsGroup: function (item) {
                alert("你点击了\"" + item.title + "\"按钮");
            },
            clickWechat: function (item) {
                alert("你点击了\"微信清理\"按钮");
            }
        },
        components: {
            //'other-component':OtherComponent,
            //HeaderComponent,
        }
    }
</script>
