<template>
  <div class="tournaments">
    <div class="tournaments__header">
      <h1>Турниры</h1>
    </div>
    <TournamentList :tournaments="tournamentData" width="800px"/>
    <TournamentStage
      :stages="stage"
    />
  </div>
</template>

<script>
import TournamentList from "../components/TournamentList.vue";
import TournamentStage from '../components/TournamentStage.vue';


export default {
  components: {
    TournamentStage,
    TournamentList
  },
  setup() {
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

      const stage = [
      {
          title: "1/8",
          matches: [
            { teamA: "Двор1", teamB: "C2", time: "14:00" },
            { teamA: "Двор2", teamB: "3BEF", time: "20:00" },
            { teamA: "Двор3", teamB: "3BEF", time: "20:00" },
            { teamA: "Двор4", teamB: "3BEF", time: "20:00" },
            { teamA: "Двор5", teamB: "C2", time: "14:00" },
            { teamA: "Двор6", teamB: "3BEF", time: "20:00" },
            { teamA: "Двор7", teamB: "3BEF", time: "20:00" },
            { teamA: "Двор8", teamB: "3BEF", time: "20:00" },
          ],
        },
        {
          title: "1/4",
          matches: [
            { teamA: "", teamB: "", time: "14:00" },
            { teamA: "", teamB: "", time: "20:00" },
            { teamA: "", teamB: "", time: "20:00" },
            { teamA: "", teamB: "", time: "20:00" },
          ],
        },
        {
          title: "1/2",
          matches: [
            { teamA: "", teamB: "", time: "20:00" },
            { teamA: "", teamB: "", time: "20:00" },
          ],
        },
        {
          title: "Final",
          matches: [
            { teamA: "", teamB: "", time: "20:00" },
          ],
        },
      ]


    return {
      tournamentData,
      stage
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
