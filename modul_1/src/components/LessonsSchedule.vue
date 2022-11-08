<template>
  <div>
    <h2>Sort</h2>
    <select v-model="filter" class="form-select">
      <option value="lecture1">Lecture1</option>
      <option value="lecture2">Lecture2</option>
      <option value="lecture3">Lecture3</option>
      <option value="lecture4">Lecture4</option>
      <option value="section">Section</option>
    </select>
  </div>
  <table>
    <tr>
      <td>Lecture1</td>
      <td>Lecture2</td>
      <td>Lecture3</td>
      <td>Lecture4</td>
      <td>Section</td>
    </tr>
    <Schedule v-for="item in filtered" :key="item.id" :item="item"></Schedule>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
import Schedule from "./Schedule.vue";
export default {
  name: "schedule-comp",
  data() {
    return {
      filter: "",
    };
  },
  components: {
    Schedule,
  },
  methods: {
    sortNumbers(item1, item2) {
      if (parseInt(item1[this.filter]) > parseInt(item2[this.filter])) {
        return 1;
      }
      if (parseInt(item1[this.filter]) === parseInt(item2[this.filter])) {
        return 0;
      }
      return -1;
    },
    sortText(item1, item2) {
      if (item1[this.filter] > item2[this.filter]) {
        return 1;
      }
      if (item1[this.filter] === item2[this.filter]) {
        return 0;
      }
      return -1;
    },
  },
  computed: {
    ...mapGetters(["getSchedules"]),
    filtered() {
      let list = [...this.getLessons];
      if (this.filter) {
        switch (this.filter) {
          case "lecture1":
            list = list.sort(this.sortText);
            break;
          case "lecture2": {
            list = list.sort(this.sortText);
            break;
          }
          case "lecture3": {
            list = list.sort(this.sortText);
            break;
          }
          case "lecture3": {
            list = list.sort(this.sortText);
            break;
          }
          case "section": {
            list = list.sort(this.sortText);
            break;
          }
        }
      }
      return list;
    },
  },
};
</script>
<style>
table,
th,
td {
  border: 1px solid rgb(47, 47, 47);
  border-collapse: collapse;
}
table {
  width: 600px;
}
.form-select {
  width: 300px;
  margin-bottom: 15px;
}
</style>