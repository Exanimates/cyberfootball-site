<template>
  <div class="tournaments">
    <div class="tournaments__header">
      <h1>Турниры</h1>
    </div>
    <!-- <DataTable width="700px" height="140px" :columns="tableColumns" :data="tableData" /> -->
    <TournamentList :tournaments="tournamentData" width="800px"/>
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
    // const tableColumns = [
    //   { label: "Имя турнира", key: "Name" },
    //   { label: "Кол-во участников", key: "PlayersCount" },
    // ];

    // const tableData = [
    //   { Name: "Кубок", PlayersCount: 30 },
    //   { Name: "Чемпионат", PlayersCount: 28 },
    // ];

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
    };
  },
};
</script>

<style>
.tournaments {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-rows: auto auto;
}
.tournaments__header {
  display: flex;
  justify-content: center;
}
</style>
