<template>
    <div id="app">
      <BurgerMenu />
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import BurgerMenu from './components/BurgerMenu.vue';
  
  export default {
    components: {
      BurgerMenu,
    },
  };
  </script>
  
  <style>
  /* Остальные стили здесь */
  .main {
    display: flex;
    justify-content: center;
  }
  </style>
  