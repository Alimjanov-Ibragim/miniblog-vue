<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <textarea v-model="body"></textarea>
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim() || this.body.trim()) {
                const newPost = {
                    id: Date.now(),
                    title: this.title,
                    body: this.body
                }
                this.$emit('add-post', newPost)
                this.title = ''
                this.body = ''
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