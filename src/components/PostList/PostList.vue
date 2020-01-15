<template>
    <div class="PostList">
        <div class="PostListWr">
            <PostItem 
                v-for="(post, i) of posts"
                v-bind:key="post.id"
                v-bind:post="post"
                v-bind:index="i"
                v-on:remove-post="removePost"
            />
        </div>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem/PostItem'
export default {
    props: ['posts'],
    methods: {
        removePost(id) {
            this.$emit('remove-post', id)
        }
    },
    components: {
        PostItem
    }
}
</script>

<style lang="scss">
    .PostListWr {
        display: flex;
        flex-wrap: wrap;
        margin-left: -20px;
    }
</style>