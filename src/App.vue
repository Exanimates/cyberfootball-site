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

  body {
    background-image: url('../src/images/shutterstock_269715800_2.jpg');
    background-size: 1920px 1080px;
  }
  </style>
  