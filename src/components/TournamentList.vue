<template>
    <div class="tournament-list" :style="listStyle">
      <div class="tournament-wrapper">
        <div class="tournament-item" v-for="(tournament, index) in tournaments" :key="index">
          <div class="tournament-name">{{ tournament.name }}</div>
          <div class="tournament-date">{{ tournament.date }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    props: {
      tournaments: {
        type: Array,
        required: true,
      },
      width: {
        type: String,
        default: "100%",
      },
      height: {
        type: String,
        default: "auto",
      },
    },
    setup(props) {
      const listStyle = computed(() => ({
        width: props.width,
        height: props.height,
      }));
  
      return {
        listStyle,
      };
    },
  };
  </script>
  
  <style scoped>
  .tournament-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ff9cfc;
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 3px 0px #392fd1;
    padding: 25px;
  }
  
  .tournament-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
    width: 100%;
  }
  
  .tournament-item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  
  .tournament-name {
    font-size: 18px;
    font-weight: bold;
  }
  
  .tournament-date {
    font-size: 14px;
    color: #888;
  }
  </style>
  