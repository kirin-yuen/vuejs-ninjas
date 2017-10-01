<template>
    <div>
        <label for="">
            login name
            <input type="text">
        </label>
        <input type="button" value="login">
    </div>
</template>

<script>
export default {

  name: 'form-one',

  data () {
    return {

    };
  },
  created(){
    console.log('login form created...');
  },
  destroyed(){
    console.log('login form destroyed...');
  }
};
</script>

<style lang="css" scoped>
</style>