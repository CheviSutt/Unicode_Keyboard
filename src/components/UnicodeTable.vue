<template>
  <div class="container">

    <h1>{{ title }}</h1>
    <h2>{{ characters.length }}</h2>

    <div class="keyboard">
      <select @change="setLanguage(currLanguage)" v-model="currLanguage">
        <option value="" selected>Select Language</option>
        <option value="greek">Greek</option>
        <option value="thai">Thai</option>
        <option value="latin">Latin</option>
        <option value="german">German</option>
        <option value="french">French</option>
        <option value="ctrl">Control characters</option>
        <option value="math">Mathematical symbols</option>
        <option value="greater">Greater-than signs</option>
        <option value="quo">HTML quote entities</option>
        <option value="amp">HTML ampersand entity</option>
        <option value="962">Decimal lookup</option>
      </select>
        <div class="keyTable">
          <table>
            <tr v-for="(row, index) of characters" :key="index">
              <td v-bind:class="{ active: activeKey(key) }" v-for="key of row" :title="key[5]"
                  :key="key[3]" @click="recentSymbols(key)">
                <div class="keyButton">{{ key[4] }}</div></td>
            </tr>
          </table>
      </div>
      <h4>Recently used symbols:</h4>
      <div class="recentRow">
        <table>
          <tr>
            <td v-for="symbol of symbols"
                :key="symbol[0]" :title="symbol[5]">
              <div class="keyButton">{{ symbol[4] }}</div></td>
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
  data() {
    return {
      title: 'Unicode Keyboard',
      currLanguage: '',
      // newSymbol: {},
      symbols: [],
      active: false,
    };
  },
  computed: {
    ...mapGetters({
      characters: 'characters',
    }),
  },
  methods: {
    ...mapActions([
      'getUnicode',
      'setLanguage',
    ]),

    recentSymbols(key) {
      this.clickedKey = key;
      let prevSelected = false;
      for (let i = 0; i < this.symbols.length; i += 1) {
        if (this.symbols[i] === key) {
          prevSelected = true;
        }
      }
      if (!prevSelected) {
        this.symbols.unshift(key);
        this.symbols = this.symbols.slice(0, 15);
        localStorage.setItem('characterSelected', JSON.stringify(this.symbols));
        console.log(this.symbols[0]);
      }
      this.$emit('keySelected', key);
    },

    activeKey(key) {
      // console.log(this.clickedKey, key);
      if (this.clickedKey === key) {
        return true;
      }
    },

  },

  created() {
    this.getUnicode();
    this.symbols = JSON.parse(localStorage.getItem('characterSelected')) || []; // clears length of null error when storage is clear
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
    width: 35rem;
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
    /*padding: 5px;*/
    /*width: 1rem;*/
    /*height: 1rem;*/
  }
  td:hover {
    background-image: linear-gradient(to bottom,
    #7db9e8 11%,#7db9e8 11%,#7db9e8 17%,#2989d8 43%,#207cca 68%,#1e5799 97%,#1e5799 97%);
    color: white;
  }
  .active {
    background-color: lawngreen;
  }
  .keyButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.0rem;
    height: 2.0rem;
    padding: 4px;
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
    background-color: cornflowerblue;
  }
</style>
