<template>
  <div class="home">
    <h1>homepage</h1>
    <p> Wassup this is the {{ comp }} and we are {{ status }}</p>
    <button @click="handleClick">Click NOW!!!</button>
    <p v-if="age"> My name is {{ age }}</p>
    <input type="text" v-model="status">
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'Home',
    setup(){
      let comp = 'Composition api'
      let status = ref('working')
      let age = ref(false)

      const uhh = ref(null)

      console.log(age, comp, status)

      const handleClick = () => {age.value = 33, console.log(age) }

      return {age: age, comp, status: status, handleClick, uhh}
    }


}
</script>
