/**
 * Created by hasee on 2016/10/29.
 */
import Vue from 'vue'

export default new Vue({
    created: function () {
        this.$on("/score/change", function (val) {
            this.score = val;
        })
    },
    data(){
        return {
            score: 100
        }
    },
    methods: {
        getScore: function () {
            return this.score;
        }
    }
})