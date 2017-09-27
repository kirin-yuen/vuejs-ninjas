<template>
    <header>
        <h1>{{title}}</h1>
        <button @click="change">emit event</button>
    </header>
</template>

<script>
export default {

  name: 'Header',

  data () {
    return {
        title: 'Component Examples',
        text: 'This is Ninjas Header'
    };
  },
  methods: {
    change(){
        var data = 'change...';
        this.title = data;
        // emit an event to parent component
        this.$emit('emitChange', data);
    }
  }
};
</script>

<style lang="css" scoped>
header{
    background-color: lightgreen;
    padding: 10px;
}

h1 {
    color: #222;
    text-align: center;
}
</style>