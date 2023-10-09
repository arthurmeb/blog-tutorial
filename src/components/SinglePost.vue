<template>
    <div class="post">
        <router-link :to="{name: 'fullDetails', params: {id: post.id}}">
            <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <div v-for="tag in post.tags" :key="tag.id"> 
            {{ tag }}
        </div>
    </div>
  
</template>

<script>

import { computed } from 'vue'

export default {
    props: ['post'],

    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...'
        })

    return {snippet} 
    }



}
</script>

<style>

</style>