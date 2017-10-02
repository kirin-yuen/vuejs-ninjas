<template>
    <div id="show-blog">
        <label for="">
            how many post do you want to show?
            <input type="number" min="0" :max="posts.length" v-model="number" @input="change">
            <input type="range" v-model="number" @change="change">
        </label>
        <div class="post" v-for="post,$index in postsShown">
            <h3>{{$index + 1}} - {{post.title}}</h3>
            <article>{{post.body}}</article>
        </div>
    </div>
</template>
<script>
export default {

    name: 'show-blog',

    data() {
        return {
            number: 0,
            // store posts
            posts: [],
            // show posts when number change
            postsShown: []
        };
    },
    created() {
        // get data from a fake online REST API
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.number = data.body.length;

            // assigned to both, one for store data the other for user action to show
            this.posts = this.postsShown = data.body;
        })
    },
    methods: {
        change() {
            this.postsShown = this.posts.slice(0, this.number);
        }
    }
};
</script>
<style lang="css" scoped>
#show-blog {
    text-align: center;
}

.post {
    margin: 10px auto;
    padding: 30px;
    max-width: 600px;
    background-color: #eee;
    text-align: left;
}
</style>