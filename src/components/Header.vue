<template>
  <div>
    <h1 id="titulo" :style="{color}">{{titulo}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['titulo', 'color']
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>