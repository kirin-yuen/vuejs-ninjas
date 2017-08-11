var vue = new Vue({
    // which tag is going to be take over by vue
    el: '#app',
    data: {
        myName: '',
        yourName: '',
        hisName: ''
    },
    methods: {
        update: function(e) {
            this.myName = e.target.value;
        }
    }
});