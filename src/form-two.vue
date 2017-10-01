<template>
    <div>
        <label for="">
            register name
            <input type="text">
        </label>
        <input type="button" value="register">
    </div>
</template>

<script>
export default {

  name: 'form-two',

  data () {
    return {

    };
  },
  created(){
    console.log('register form created...');
  },
  destroyed(){
    console.log('register form destroyed...');
  }
};
</script>

<style lang="css" scoped>
</style>