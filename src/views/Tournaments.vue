<template>
  <div class="tournaments">
    <div class="tournaments__header">
      <h1>Турниры</h1>
    </div>
    <DataTable width="700px" height="140px" :columns="tableColumns" :data="tableData" />
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";

export default {
  components: {
    DataTable,
  },
  setup() {
    const tableColumns = [
      { label: "Имя турнира", key: "Name" },
      { label: "Кол-во участников", key: "PlayersCount" },
    ];

    const tableData = [
      { Name: "Кубок", PlayersCount: 30 },
      { Name: "Чемпионат", PlayersCount: 28 },
    ];

    return {
      tableColumns,
      tableData,
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
