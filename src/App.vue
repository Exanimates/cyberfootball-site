<template>
    <div id="app">
      <BurgerMenu />
      <main class="main">
        <h1 class="setting-title">Cyberfootball site</h1>
      </main>
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
  