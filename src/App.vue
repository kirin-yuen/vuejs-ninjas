<template>
    <div>
        <!-- listent emitChange event and hander it -->
        <myHeader @emitChange="getChange"></myHeader>
        <!-- pass props to child components -->
        <ninja :propNinjas="ninjas"></ninja>
        <my-footer :myTitle="title"></my-footer>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'Events, child to parent',
            ninjas: [
                { name: 'Ryu', speciality: 'Vue Components', show: false },
                { name: 'Crystal', speciality: 'HTML Wizardry', show: false },
                { name: 'Hitoshi', speciality: 'Click Events', show: false },
                { name: 'Tango', speciality: 'Conditionals', show: false },
                { name: 'Kami', speciality: 'Webpack', show: false },
                { name: 'Yoshi', speciality: 'Data Diggin', show: false }
            ]
        }
    },
    methods: {
        getChange(data){
            this.title = data;
        }
    },
    // locally register via components
    components:{
        myHeader: require('./components/Header.vue'),
        myFooter: require('./components/Footer.vue'),
        ninja: require('./components/Ninja.vue')
    }
}
</script>
<!-- no scoped attr will affect globally -->
<style scoped>
</style>