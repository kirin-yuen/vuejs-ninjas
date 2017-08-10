var vue = new Vue({
    // which tag is going to be take over by vue
    el: '#app',
    data: {
        age: 30,
        name: 'kirin'
    },
    methods: {
        add: function(num){
            this.age += num;
        },
        // first param will be event if no parma pass
        clicked: function(){
            alert('clicked');
        },
        log: function(e) {
            console.log('type something...');
        }
    }
});