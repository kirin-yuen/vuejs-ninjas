<template>
    <div>
        <myHeader></myHeader>
        <!-- pass props to child components -->
        <ninja :propNinjas="ninjas"></ninja>
        <my-footer></my-footer>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'Events bus, a vue instance can be emit and listen even and react to them',
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