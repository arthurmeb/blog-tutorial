<template>
  <div class="home">
    <h1>home</h1>
    <p> Wassup this is the {{ comp }} and we are {{ status }}</p>
    
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    setup(){
      let comp = 'Composition api'
      let status = 'working'

      return {comp, status}
    }

  }
}
</script>
