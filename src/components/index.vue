<template>
    <div class="top" v-bind:style="img">
        <app-title>

        </app-title>
    </div>
</template>
<style scoped>
    .top {
        height: 440px;
        width: 100%;
    }

</style>
<script>
    // 本组件用于首页的上方区域（如绿色、黄色等背景区域）
    import appTitle from './app-title.vue'
    //import OtherComponent from './components/other.vue'
    export default{
        data(){
            return {
                imgstate: true
            }
        },
        computed: {
            img: function () {
                if (this.imgstate) {
                    return {
                        backgroundImage: "url(../../dist/bg-img-good.png)"
                    }
                } else {
                    return {
                        backgroundImage: "url(../../dist/bg-img-normal.png)"
                    }
                }
            }
        },
        methods: {},
        components: {
            appTitle
            //HeaderComponent,
        }
    }
</script>
