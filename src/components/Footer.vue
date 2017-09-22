<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
export default {

  name: 'Footer',

  data () {
    return {
        copyright: 'Copyright 2017 vuejs',
    };
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