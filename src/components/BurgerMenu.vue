<template>
    <div class="burger-menu">
      <button class="burger-button" @click="toggleSidebar" :class="{ active: isSidebarOpen }">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      <div class="sidebar" :class="{ open: isSidebarOpen, minimized: isSidebarMinimized }">
        <div class="sidebar-links">
            <div class="sidebar-link">
              <router-link to="/">Главная</router-link>
            </div>
            <div class="sidebar-link">
              <router-link to="/tournaments">Турниры</router-link>
            </div>
            <div class="sidebar-link">
              <router-link to="/contacts">Контакты</router-link>
            </div>
            <div class="sidebar-link">
              <router-link to="/about">О нас</router-link>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isSidebarOpen = ref(true);
      const isSidebarMinimized = ref(false);
  
      const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
        isSidebarMinimized.value = !isSidebarMinimized.value;
      };
      
      return {
        isSidebarOpen,
        isSidebarMinimized,
        toggleSidebar,
      };
    },
  };
  </script>
  
  <style scoped>
  .burger-menu {
    position: relative;
  }
  
  .burger-button {
    position: fixed;
    top: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: transparent;
    border: none;
    z-index: 1000;
  }
  
  .burger-line {
    width: 100%;
    height: 3px;
    background: #fff;
    transition: background-color 0.3s;
  }
  
  .burger-button.active .burger-line {
    background-color: #E06215; /* Цвет неоновой подсветки */
  }
  
  .sidebar {
    font: -webkit-control;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    min-width: 40px; /* Минимальная ширина меню в уменьшенном состоянии */
    max-width: 300px; /* Максимальная ширина меню в открытом состоянии */
    height: 100%;
    background: #111; /* Цвет сайдбара */
    transition: transform 0.3s, min-width 0.3s, max-width 0.3s; /* Анимируем трансформацию, минимальную и максимальную ширину */
    z-index: 999;
    overflow-x: hidden; /* Скрываем горизонтальный скролл, если контент меню больше ширины */

    border-radius: 0px 10px 10px 0px;
    box-shadow: 10px 5px 5px #E06215;
  }
  
  .sidebar.open {
    transform: translateX(0); /* Сдвигаем меню вправо при открытии */
    min-width: 250px; /* Минимальная ширина в открытом состоянии */
    max-width: 300px; /* Максимальная ширина в открытом состоянии */
  }
  
  .sidebar.minimized {
    transform: translateX(-260px); /* Сдвигаем меню влево при уменьшении ширины */
    min-width: 350px; /* Минимальная ширина в уменьшенном состоянии */
    max-width: 40px; /* Максимальная ширина в уменьшенном состоянии */
  }
  .sidebar-links ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-links {
    margin: 1rem;
    margin-top: 70px;

    display: flex;
    flex-direction: column;
    height: 90%;
  }
  
  .sidebar-links a {
    font-family: monospace;
    color: #fff;
    text-decoration: none;
    font-size: 25px
  }

  .sidebar-link {
    margin-top: 15px;
  }
  
  .sidebar-links a:hover {
    text-decoration: underline;
  }
  </style>
  