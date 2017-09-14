<template>
    <div>
        <h1>{{title}}</h1>
        <Ninja></Ninja>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'Scope css'
        }
    },
    // locally register via components
    components:{
        Ninja: require('./Ninja.vue')
    }
}
</script>
<!-- no scoped attr will affect globally -->
<style>
h1 {
    background: red;
}
p {
    color :green;
}
</style>