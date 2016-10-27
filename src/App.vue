<template>
    <div id="app">
        <index></index>
        <main-foot></main-foot>
    </div>
</template>

<style>
    #app {
        width: 900px;
        height: 600px;
        margin: 0 auto;
    }
</style>

<script>
    import index from './components/index.vue'
    import mainFoot from './components/main-foot.vue'

    export default {
        name: 'app',
        components: {
            index,
            mainFoot
        }
    }
</script>
