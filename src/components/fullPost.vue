<template>
    <div class="post">
        <h1>Full post: {{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <div v-for="tag in post.tags" :key="tag.id"> 
            {{ tag }}
        </div>
    </div>
  
</template>

<script>

import getPost from '../composables/getPost'

export default {
    props: ['id'],
    setup(props){
        
        const {post, error, load} = getPost(props.id) 
    
        load()
    
        return {post, error}
    
    }




}
</script>

<style>

</style>
