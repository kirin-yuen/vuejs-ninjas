<template>
    <div>
        <h1>{{title}}</h1>
        <show-blog></show-blog>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'custome directive'
        }
    },
    // locally register via components
    components: {
        'show-blog': require('./show-blog.vue')
    }
}
</script>
<!-- no scoped attr will affect globally -->
<style>
body {
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
}
</style>