<template>
    <div>
        <h1>{{title}}</h1>
        <hr>

        <h2>switch component via v-show</h2>
        <formOne v-show="flag"></formOne>
        <formTwo v-show="!flag"></formTwo>
        <button @click="flag = !flag">switch</button>

        <h2>switch component via components tag</h2>
        <!-- switch will create a new instance and go through lifecycle again via component-->
        <!-- we can use keep-alive to retain the data -->
        <keep-alive>            
            <component :is="shownComponet"></component>
        </keep-alive>
        <select v-model="shownComponet">
            <option value="formOne">login form</option>
            <option value="formTwo">register form</option>
        </select>
    </div>
</template>
<script>
export default {
    // name: 'app',
    data() {
        return {
            title: 'dynamic component',
            flag: true,
            shownComponet: 'formOne'
        }
    },
    // locally register via components
    components:{
        formOne: require('./form-one.vue'),
        formTwo: require('./form-two.vue')
    }
}
</script>
<!-- no scoped attr will affect globally -->
<style scoped>
</style>