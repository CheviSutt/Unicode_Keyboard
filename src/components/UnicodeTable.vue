<template xmlns:v="http://www.w3.org/1999/xhtml">
  <div class="container">

    <h1>{{ title }}</h1>
    <h2>{{ keys.length }}</h2>

    <div class="keyboard">
      <select @change="setLanguage(currLanguage)" v-model="currLanguage">
        <option value="greek">Greek</option>
        <option value="thai">Thai</option>
        <option value="latin">Latin</option>
        <option value="ctrl">Control characters</option>
        <option value="math">Mathematical symbols</option>
        <option value="greater">Greater-than signs</option>
        <option value="quo">HTML quote entities</option>
        <option value="amp">HTML ampersand entity</option>
        <option value="962">Decimal lookup</option>
      </select>
        <div class="keyTable">
          <table>
            <tr v-for="(row, index) of keys" :key="index">
              <td v-for="key of row" :title="key[5]">{{ key[4] }}</td>
            </tr>
          </table>
      </div>
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
      currLanguage: '',
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
      'setLanguage',
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
    flex-shrink: 0;
  }
  .keyTable{
    display: flex;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 5px;
  }
</style>
