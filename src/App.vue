<template>
  <div id="app">
    <unicode-table></unicode-table>
  </div>
</template>

<script>
import UnicodeTable from './components/UnicodeTable.vue';


export default {
  name: 'app',
  components: {
    UnicodeTable,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
