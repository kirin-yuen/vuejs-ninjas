var vue = new Vue({
    // which tag is going to be take over by vue
    el: '#app',
    data: {
        name: 'kirin',
        favourite: 'aikido',
        website: 'http://www.sina.com.cn',
        template: '<a href="http://www.sina.com.cn">another sina</a>'
    },
    methods: {
        greet: function(str){
            // vuejs takes all of these differents properties we have in the data object
            // and proxy them to the top
            return 'good ' + str + ' ' + this.name;
        }
    }
});