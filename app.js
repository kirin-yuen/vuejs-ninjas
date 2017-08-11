var vue = new Vue({
    // which tag is going to be take over by vue
    el: '#app',
    data: {
        num: 0,
        a: 0,
        b: 0
    },
    methods: {
        addToA: function() {
            console.log('fire addToA()');
            return this.a + this.num;
        },
        addToB: function() {
            console.log('fire addToB()');
            return this.b + this.num;
        }
    },
    computed: {
        resultA: function() {
            console.log('fire resultA');
            return this.a + this.num;
        },
        resultB: function() {
            console.log('fire resultB');
            return this.b + this.num;
        }
    }
});