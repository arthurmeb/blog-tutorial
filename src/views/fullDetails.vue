<template>
    <div v-if="error"> {{ error }} </div>
    <div v-else> <fullPost :id="id"/> </div>
</template>

<script>

import fullPost from '@/components/fullPost.vue'
import getPost from '@/composables/getPost'

export default {
    props: ['id'],
    components: {fullPost},

    data() {
        return {
            id: this.$route.params.id
        }
    }



}
</script>

<style>

</style>