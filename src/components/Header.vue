<template>
    <header>
        <h1>{{title}}</h1>
        <p>Not just communicate from child component to child component indirectly using root component</p>
        <button @click="change">Event bus emit event</button>
    </header>
</template>

<script>
import Bus from '../Event-bus';

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
        Bus.$emit('emitChange', data);
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