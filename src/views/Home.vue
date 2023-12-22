<template>
    <div class="home">
      <div class="home__header">
        <h1>Сайт посвященный киберфутболу</h1>
      </div>
      <div class="home__body">
        <DataTable class="home__datatable" width="700px" height="140px" :columns="tableColumns" :data="tableData" />
        <TournamentList class="home__tournaments" :tournaments="tournamentData" width="800px"/>
      </div>
    </div>
  </template>
  
  <script>
  import DataTable from "../components/DataTable.vue";
  import TournamentList from "../components/TournamentList.vue";
  export default {
    components: {
      DataTable,
      TournamentList
    },
    
    setup() {
    const tableColumns = [
      { label: "Имя игрока", key: "Name" },
      { label: "Голов", key: "PlayersCount" },
    ];

    const tableData = [
      { Name: "Вася", PlayersCount: 30 },
      { Name: "Петя", PlayersCount: 28 },
    ];

    const tournamentData = [
        {
          name: "Кубок кубков",
          date: "2023-08-15",
        },
        {
          name: "Чемпионат поселка",
          date: "2023-09-20",
        },
        {
          name: "Чемпионат деревни",
          date: "2023-10-20",
        },
        {
          name: "Чемпионат города",
          date: "2023-11-20",
        },
        {
          name: "Чемпионат страны",
          date: "2023-12-20",
        },
        {
          name: "Турнир победителей",
          date: "2023-13-20",
        },
      ];

    return {
      tournamentData,
      tableData,
      tableColumns
    };
  },
  };
  </script>
  
  <style>
  .home {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    grid-template-rows: auto auto;
  }
  .home__header {
    display: flex;
    justify-content: center;

    color: white;
    text-transform: uppercase;

    font-family: math;

    font-size: 20px;
  }
  .home__datatable {
    margin-left: 50px;
  }
  .home__tournaments {
    margin-top: 100px;
  }
  </style>
  