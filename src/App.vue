<template>
    <div>
        <Header></Header>
        <Ninja></Ninja>
        <Footer></Footer>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'Component Examples'
        }
    },
    // locally register via components
    components:{
        Header: require('./components/Header.vue'),
        Footer: require('./components/Footer.vue'),
        Ninja: require('./components/Ninja.vue')
    }
}
</script>
<!-- no scoped attr will affect globally -->
<style scoped>
</style>