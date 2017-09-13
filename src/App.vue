<template>
    <!-- 
        components: we can code it once and nest it to other components for serval times if need. For large application split our code to different components, we can nest those component in the root component
     -->
    <div>
        <h1>{{title}}</h1>
        <!-- globally register in main.js via Vue.component() -->
        <global-conponent></global-conponent>
        <local-conponent></local-conponent>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'Nesting components'
        }
    },
    // locally register via components
    components:{
        'local-conponent': require('./Local-component.vue')
    }
}
</script>
<style>
</style>