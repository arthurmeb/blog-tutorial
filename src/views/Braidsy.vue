<template>
    <H1>Braidsy.com</H1>
    <PostList :posts="posts" v-if="showPosts"/>
    <button @click="togglePosts">Toggle posts</button>
    <div v-if="error">{{ error }}</div>

</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '@/components/PostList.vue'
import { ref } from 'vue'

export default {
    name: 'Braidsy',
    components: {PostList},
    setup() {
       
        const {error, posts, load} = getPosts()

        load()

        let showPosts = ref(true)

        let togglePosts = () => {showPosts.value = !showPosts.value}
        return { posts, showPosts, togglePosts, error, load}
    }
}
</script>

<style>

</style>