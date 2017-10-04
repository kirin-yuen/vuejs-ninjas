<template>
    <!-- directive with arg(lightblue) and value(theme) -->
    <div id="show-blog" v-theme:lightblue="theme">
        <p>
            <label>
                How many posts do you want to show?
                <input :disabled="loading.isLoading" type="number" min="0" :max="posts.length" v-model="number" @input="change">
                <input :disabled="loading.isLoading" type="range" v-model="number" @change="change">
            </label>
        </p>
        <p>
            View as
            <select v-model="theme">
                <option value="wide">wide</option>
                <option value="narrow">narrow</option>
            </select>
        </p>
        <div class="posts">
            <div class="post" v-for="post,$index in postsShown">
                <!-- only directive -->
                <h3 v-rainbow>{{$index + 1}} - {{post.title}}</h3>
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
            // laading status for loading component
            loading: {
                isLoading: true,
                isSuccess: true

            },
            theme: 'narrow'
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
    // locally custome directive
    directives: {
        'theme': {
            bind(el, binding, vnode){
                // directive arg in binding
                if(binding.arg === 'lightblue'){
                    el.style.backgroundColor = 'lightblue';
                }
            },
            update(el, binding, vnode){
                var wide = 'wide', narrow = 'narrow';

                if(binding.value === wide) {
                    el.className = wide;
                } else if(binding.value === narrow) {
                    el.className = narrow;
                }
            }
        }
    },
    methods: {
        change() {            
            // slice from origin posts
            this.postsShown = this.posts.slice(0, this.number);
        }
    }
};
</script>
<style lang="css" scoped>
#show-blog {
    text-align: center;
    padding: 20px 0;
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
    background-color: #eee;
    text-align: left;
}

.wide .post{
    max-width: 600px;
}

.narrow .post{
    max-width: 300px;
}

.post h3 {
    margin-top: 0;
}
</style>