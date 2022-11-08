<template>
  <tr>
    <td>{{ item.lecture1 }}</td>
    <td>{{ item.lecture2 }}</td>
    <td>{{ item.lecture3 }}</td>
    <td>{{ item.lecture4 }}</td>
    <td>{{ item.section }}</td>
    <button style="width: 200px" @click="Delete">Delete</button>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ScheduleComp",
  methods: {
    ...mapActions(["deleteSchedule"]),
    Delete() {
      this.deleteSchedule(this.item);
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang=""></style>