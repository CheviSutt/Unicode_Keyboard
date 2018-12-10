<template>
  <div class="container">

    <h1>{{ title }}</h1>


    <div class="keyboard">
      <select>
        <option value="selectLanguage">Select Language</option>
      </select>
    </div>

  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'UnicodeTable',
  data() {
    return {
      title: 'Unicode Component',
    };
  },

  methods: {
    // ...mapState(),
  },

};
</script>

<style>
  .keyboard {
    border: 1px solid black;
  }
</style>
