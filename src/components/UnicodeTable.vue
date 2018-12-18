<template>
  <div class="container">

    <h1>{{ title }}</h1>
    <h2>{{ keys.length }}</h2>

    <div class="keyboard">
      <select @change="setLanguage(currLanguage)" v-model="currLanguage">
        <option value="" selected>Select Language</option>
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
              <td v-for="key of row" :title="key[5]" :key="key[0]" @click="recentSymbols(key)">
                {{ key[4] }}</td>
            </tr>
          </table>
      </div>
      <h4>Recently used symbols:</h4>
      <div class="recentRow">
        <table>
          <tr>
            <td v-for="symbol of symbols" :key="symbol[0]">{{ symbol[4] }}</td>
            <!--<td>1</td>-->
            <!--<td>2</td>-->
            <!--<td>3</td>-->
            <!--<td>4</td>-->
            <!--<td>5</td>-->
            <!--<td>6</td>-->
            <!--<td>7</td>-->
            <!--<td>8</td>-->
            <!--<td>9</td>-->
            <!--<td>10</td>-->
            <!--<td>11</td>-->
            <!--<td>12</td>-->
            <!--<td>13</td>-->
            <!--<td>14</td>-->
            <!--<td>15</td>-->
            <!--<td>16</td>-->
          </tr>
        </table>
      </div>
      <div class="buttons">
        <button>Insert</button>
        <button>Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UnicodeTable',
  symbolKey: '',
  data() {
    return {
      title: 'Unicode Keyboard',
      currLanguage: '',
      newSymbol: {},
      symbols: [],
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

    recentSymbols(key) {
      this.symbols.unshift(key);
      this.symbols = this.symbols.slice(0,15);
      // key.preventDefault();
      console.log(key);
      this.$emit('keySelected', key);
    },
  },

  created() {
    this.getUnicode();
  },

};
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .keyboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100em;
    border: 1px solid black;
    flex-shrink: 0;
  }
  .keyboard select {
    width: 60rem;
    margin: .5rem;
    cursor: pointer;
  }
  .keyTable {
    display: flex;
    margin-bottom: .5rem;
    cursor: pointer;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 5px;
  }
  h4 {
    display: flex;
    margin: 0;
  }
  .recentRow {
    margin-bottom: .5rem;
    cursor: pointer;
  }
  .buttons button {
    cursor: pointer;
  }
</style>
