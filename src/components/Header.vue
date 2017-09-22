<template>
    <header>
        <h1>{{title}}</h1>
        <p>{{text}}</p>
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