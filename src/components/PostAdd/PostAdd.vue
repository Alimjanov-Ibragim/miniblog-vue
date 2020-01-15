<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="post.title">
        <textarea v-model="post.body"></textarea>
        <button type="submit">Create</button>
    </form>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            post: {}
        }
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts
        })
    },
    methods: {
        onSubmit() {
            if (this.post.title.trim() || this.post.body.trim()) {
                const newPost = {
                    id: Date.now(),
                    title: this.post.title,
                    body: this.post.body
                };
                this.post = {};
                this.$store.dispatch("post/addPost", newPost)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;

        input {
            min-height: 30px;
        }

        textarea {
            min-height: 100px;
        }

        input,
        textarea {
            margin-bottom: 30px;
            max-width: 100%;
            width: 100%;
        }

        button {
            padding: 5px;
            font-size: 14px;
            line-height: 14px;
            cursor: pointer;
        }
    }
</style>
