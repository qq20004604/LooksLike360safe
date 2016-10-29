<template>
    <div class="main-foot">
        <foot-big-btns class="foot-big-btns"></foot-big-btns>
    </div>
</template>
<style scoped>
    .main-foot {
        width: 100%;
        height: 160px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid grey;
        border-top: none;
        position: relative;
    }

    .foot-big-btns {
        position: absolute;
        top: 19px;
        left: 31px;
    }
</style>
<script>
    import footBigBtns from './foot-big-btns.vue'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {},
        components: {
            footBigBtns
        }
    }
</script>
