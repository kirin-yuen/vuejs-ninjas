<template>
    <!-- same as the templte porperty that Vue.conponent('app', {template: '<div></div>'}) -->
    <!-- only one root element on top -->
    <div>
        <h1>{{title}}</h1>
        <p>{{greeting()}}</p>
    </div>
</template>
<script>
// same as the option object that Vue.conponent('app', {})
export default {
    // name: 'app',
    data() {
        return {
            title: 'Your first vue file,wooo!'
        }
    },
    methods: {
        greeting(){
            return 'heeey cow boy~'
        }
    }
}
</script>
<style>
</style>