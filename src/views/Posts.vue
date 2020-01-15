<template>
  <div class="Posts">
    <h2>Posts</h2>
    <PostList
        v-bind:posts="posts"
        @remove-post="removePost"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList/PostList";
import { mapState } from "vuex";

export default {
  name: 'Posts',
  data() {
    return {
     // posts: []
    }
  },
  mounted() {
    if(!this.posts.length) {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
        .then(response => response.json())
        .then(json => {
          // this.posts = json
          this.$store.dispatch("post/setPosts", json);
        })
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts
    })
  },
  methods: {
    removePost(id) {
      // this.posts = this.posts.filter(p => p.id !== id)
      this.$store.dispatch("post/removePost", id);
    }
  },
  components: {
    PostList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.Posts {
    max-width: 50%;
    margin: 0 auto;
}

</style>
