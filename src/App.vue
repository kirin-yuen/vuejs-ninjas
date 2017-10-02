<template>
    <div>
        <h1>{{title}}</h1>
        <my-form></my-form>

    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'input binding'
        }
    },
    // locally register via components
    components:{
        'my-form': require('./form.vue')
    }
}
</script>
<!-- no scoped attr will affect globally -->
<style scoped>
</style>