var vue = new Vue({
    // which tag is going to be take over by vue
    el: '#app',
    data: {
        age: 30,
        x: 0,
        y: 0
    },
    methods: {
        subtract: function(num){
            this.age -= num;
        },
        // first param will be event if no parma pass
        updateXY: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});