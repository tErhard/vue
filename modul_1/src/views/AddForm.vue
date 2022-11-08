<template>
  <div>
    <label>Lecture1<input type="text" v-model="lecture1" /></label>
    <label>Lecture2<input type="text" v-model="lecture2" /></label>
    <label>Lecture3<input type="text" v-model="lecture3" /></label>
    <label>Lecture4<input type="text" v-model="lecture4" /></label>
    <label>Section<input type="text" v-model="section" /></label>
    <button @click="add">save</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "AddForm",
  data() {
    return {
      lecture1: null,
      lecture2: null,
      lecture3: null,
      lecture4: null,
      section: null,
      
    };
  },
  methods: {
    ...mapActions(["addSchedule"]),
    add() {
      this.addSchedule({
        lecture1: this.lecture1,
        lecture2: this.lecture2,
        lecture3: this.lecture3,
        lecture4: this.lecture4,
        section: this.section,
      });
      this.lecture1 = null;
      this.lecture2 = null;
      this.lecture3 = null;
      this.lecture4 = null;
      this.section = null;

    },
  },
};
</script>

<style>
div {
  display: grid;
}
button {
  margin: 15px;
  display: flex;
  width: 70px;
}

label {
  width: 450px;
  font-size: 1.1rem;
}
</style>