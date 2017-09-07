// golbal register component before initialize vue instance
Vue.component('conponent-global', {
    template: '<p>{{title}}</p>',
    // conponent data should be a function and return a fresh object to avoid sharing data
    data: function(){
        return {
            title: 'Vue global component'
        }
    }
});

var a = new Vue({
    el: '#app',
    // local register component
    components: {
        'conponent-local': {
            template: '<p>{{title}}</p>',
            data: function(){
                return {
                    title: 'Vue local component'
                }
            }
        }
    }
});
