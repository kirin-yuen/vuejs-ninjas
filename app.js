var vue = new Vue({
    // which tag is going to be take over by vue
    el: '#app',
    data: {
        nearby: false,
        available: false
    },
    computed: {
        compClasses: function() {          
            return {
                nearby: this.nearby,
                available: this.available
            }
        }
    }
});