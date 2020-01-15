<template>
  <div class="Create">
    <h1>This is a create page</h1>
    <PostAdd 
      @add-post="addPost"
    />
  </div>
</template>

<script>
import PostAdd from '@/components/PostAdd/PostAdd'
import { mapState } from "vuex";

export default {
  name: 'create',
  methods: {
    addPost(post) {
      this.$emit('add-post', post)
    }
  },
  computed: {
    ...mapState({
      post: state => state.post.data
    })
  },
  components: {
    PostAdd
  }
}
</script>

<style lang="scss" scoped>
  .Create {
    max-width: 50%;
    margin: 0 auto;
  }
</style>