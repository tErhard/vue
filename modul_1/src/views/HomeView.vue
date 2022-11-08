<template>
  <div class="home">
    <LessonsSchedule
      style="margin-left: 10px; margin-top: 10px"
    ></LessonsSchedule>
  </div>
</template>

<script>
import LessonsSchedule from "@/components/LessonsSchedule.vue";
export default {
  name: "HomeView",
  components: {
    LessonsSchedule,
  },
};
</script>