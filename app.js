new Vue({
    el: '#app',
    data:{
        output: 'no data'
    },
    methods: {
        update: function(target) {
            // use refs to update our data
            this.output = this.$refs[target].value;
        }
    }
});