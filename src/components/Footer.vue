<template>
    <footer>
        <p>{{copyright}}</p>
        <p>{{title}}</p>
    </footer>
</template>

<script>
import Bus from '../Event-bus';

export default {

  name: 'Footer',
  data () {
    return {
        title: 'hey......',
        copyright: 'Copyright 2017 vuejs',
    };
  },
  created(){
    // listen event and react it
    Bus.$on('emitChange', (data) => {
      this.title = data;
    })
  }
};
</script>

<style lang="css" scoped>
footer{
    background-color: #222;
    padding: 6px;
}

p {
    color: lightgreen;
    text-align: center;
}
</style>