<template>
  <div class="home">
    <h1>homepage</h1>
    <p> Wassup this is the {{ comp }} and we are {{ status }}</p>
    <button @click="handleClick">Click NOW!!!</button>
    <p v-if="age"> My name is {{ age }}</p>
    <input type="text" v-model="status">
  </div>
  <br> 
  <input type="text" v-model="search">
  <p> Search term: {{ search }}</p>
  <div v-for="style in searchName" :key="style">{{ style }}</div>
  <button @click="handleWatch">Stop watching</button>

</template>

<script>
import { computed, ref, watch } from 'vue'


export default {
  name: 'Home',
    setup(){
      let comp = 'Composition api'
      let status = ref('working')
      let age = ref(false)

      const search = ref('')

      let styles = ref(['cornrows', 'twists', 'barrel twists', 'plaits', 'two strands'])
      const searchName = computed(() => {
        return styles.value.filter((style) => style.includes(search.value))
      })

      const uhh = ref(null)

      console.log(age, comp, status)

      const handleClick = () => {age.value = 33, console.log(age.value) }

      const watcher = watch(search, () => {console.log('watch ran')})
      
      const handleWatch = () => {
        return watcher()
      }

      return {age: age, comp, status: status, handleClick, uhh, styles, searchName, search, watcher, handleWatch}

      
    }


}
</script>
