<template>
  <div class="center">
    <h1>Desde App.vue enviando vía props el titulo y color a Header.vue</h1>

    <label for="ftitle">Ingrese un titulo:</label> &nbsp;
    <input type="txt" id="ftitle" name="ftitle" v-model="title"><br><br>

    <button class="btn-red" @click="change('rgb(255, 0, 0)')">Red</button>
    <button class="btn-green" @click="change('rgb(0, 255, 0)')">Green</button>
    <button class="btn-blue" @click="change('rgb(0, 0, 255)')">Blue</button>
    <hr>
    <Header :titulo="title" :color="bgColor" />
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    },
    data() {
      return {
        title: "",
        bgColor: 'rgb(255, 0, 0)'
      }
    },
    methods: {
      change(rgb) {
        this.bgColor = rgb;
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .center {
    text-align: center;
  }

  button {
    padding: 3px 15px;
    color: white;
  }

  .btn-red{
    background-color: red;
  }

  .btn-green {
    background-color: green;
    margin: 0 1rem;
  }

  .btn-blue {
    background-color: blue;
  }
</style>