<template>
  <div class="Create">
    <h1>This is a createa page</h1>
    <PostAdd />
  </div>
</template>

<script>
import PostAdd from '@/components/PostAdd/PostAdd'

export default {
  name: 'create',
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
