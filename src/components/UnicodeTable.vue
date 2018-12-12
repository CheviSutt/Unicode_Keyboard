<template>
  <div class="container">

    <h1>{{ title }}</h1>
    <h2>{{ keys.length }}</h2>

    <div class="keyboard">
      <select>
        <option value="selectLanguage">Select Language</option>
      </select>
      <table>
        <tr v-for="key of keys">
          <td>{{ key[4] }}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UnicodeTable',
  data() {
    return {
      title: 'Unicode Component',
    };
  },
  computed: {
    ...mapGetters({
      keys: 'keys',
    }),
  },
  methods: {
    ...mapActions([
      'getUnicode',
    ]),
  },
  created() {
    this.getUnicode();
  },

};
</script>

<style>
  .keyboard {
    border: 1px solid black;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 5px;
  }
</style>
