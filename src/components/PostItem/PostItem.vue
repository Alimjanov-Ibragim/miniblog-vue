<template>
    <div class="PostListCol">
        <div>
            <div class="PostListColTop">
                <strong>{{ post.id }}</strong>
                <button v-on:click="$emit('remove-post', post.id)">&times;</button>
            </div>
            <div class="PostListColContent">
                <div class="PostListColTitle">
                    {{ post.title }}
                </div>
                <div class="PostListColText">
                    {{ post.body }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object
        },
        index: {
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>
    .PostListCol {
        flex: 0 0 33.3%;
        width: 100%;
        max-width: 33.3%;
        padding: 0 0 20px 20px;

        & > div {
            padding: 20px;
            text-align: left;
            background: #3ea785;
            height: 100%;
        }

        .PostListColTop {
            display: flex;
            justify-content: space-between;
        }

        button {
            cursor: pointer;
        }

        .PostListColTitle {
            min-height: 52px;
            margin-bottom: 10px;
            font-size: 17px;
            line-height: 17px;
            font-weight: bold;
        }
    }
</style>