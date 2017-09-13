<template>
    <div>
        <p>Global-component</p>
        <!-- it won't work because this is register locally in App.vue
            [Vue warn]Unknown custom element: <local-conponent>
         -->
        <local-conponent></local-conponent>
    </div>
</template>
<script>
export default {

    name: 'Global-component',

    data() {
        return {
        };
    }
};
</script>
<style lang="css" scoped>
</style>