var one = new Vue({
    el: '#one',
    data: {
        title: "vue app one"
    },
    computed: {
        greet: function(){
            return 'hello vue app one';
        }
    }
});


var two = new Vue({
    el: '#two',
    data: {
        title: "vue app two"
    },
    computed: {
        greet: function(){
            return 'hello vue app two';
        }
    },
    methods: {
        change: function(){
            // communicate with another vue instantce via variable one 
            one.title = "Title changed";
        }
    }
});

two.title = "Change from outside";