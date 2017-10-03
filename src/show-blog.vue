<template>
    <div id="show-blog">
        <label>
            How many posts do you want to show?
            <input :disabled="loading.isLoading" type="number" min="0" :max="posts.length" v-model="number" @input="change">
            <input :disabled="loading.isLoading" type="range" v-model="number" @change="change">
        </label>
        <div class="posts">
            <div class="post" v-for="post,$index in postsShown">
                <h3>{{$index + 1}} - {{post.title}}</h3>
                <article>{{post.body}}</article>
            </div>
        </div>
        <div v-show="loading.isLoading">
            <loading :isSuccess="loading.isSuccess"></loading>
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
            postsShown: [],
            // laading status  for loading component
            loading: {
                isLoading: true,
                isSuccess: true

            }
        };
    },
    created() {
        // get data from a fake online REST API
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
            if (data.ok) {
                this.loading.isLoading = false;
                this.number = data.body.length;

                // assigned to both, one for store data the other for user action to show
                this.posts = this.postsShown = data.body;
            } else {
                this.loading.isSuccess = error.ok;
                console.log(error);
            }

        }).catch(function(error) {
            this.loading.isSuccess = error.ok;
            console.log(error);
        });
    },
    components: {
        'loading': require('./loading.vue')
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

.posts {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.post {
    margin: 10px;
    padding: 30px;
    max-width: 300px;
    background-color: #eee;
    text-align: left;
}

.post h3 {
    margin-top: 0;
}
</style>