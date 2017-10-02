<template>
    <div>
        <h1>v-model</h1>
        <label for="">
            Some text here
            <input type="text" v-model="text">
        </label>
        <p>Preview: {{text}}</p>
        <hr>

        <h1>Syntactic sugar of v-model</h1>
        <label for="">
            Some text here
            <!-- @change or @blur would be sugar of v-model.lazy -->
            <input type="text" :value="text1" @input="text1 = $event.target.value">
        </label>
        <p>Preview: {{text1}}</p>
    </div>
</template>

<script>
export default {

  name: 'form',

  data () {
    return {
        text: '',
        text1: ''
    };
  }
};
</script>

<style lang="css" scoped>
</style>