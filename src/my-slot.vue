<template>
    <div id="header">
        <slot name="title"></slot>
        <slot name="text"></slot>
        <template>
            <div v-html="html"></div>
        </template>
    </div>
</template>
<script>
export default {

    name: 'my-slot',
    props:{
        html: {
            type: String
        }
    },
    data() {
        return {

        };
    }
};
</script>
<style lang="css" scoped>
.header {
    background: lightblue;
}

.text {
    background-color: maroon;
    color: white;
    padding: 1px 12px;
}
</style>