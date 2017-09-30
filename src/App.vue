<template>
    <div>
        <my-slot :html="html">
        <!-- pass html content down to child component 
            using slot, although coule be html string via prop 
        -->
            <div slot="title" class="header">
                <h1>{{title}}</h1>
            </div>
            <div slot="text" class="text">
                <p>hey slot...</p>
            </div>
        </my-slot>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'Slot',
            html: '<p class="text">hey html string...</p>'
        }
    },
    methods: {
    },
    // locally register via components
    components:{
        mySlot: require('./my-slot.vue')
    }
}
</script>
<!-- no scoped attr will affect globally -->
<style scoped>
</style>