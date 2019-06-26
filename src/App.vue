<template>
  <div id="app">
    <appHeader style="height:60px;"></appHeader>
    <router-view />
    <appFooter></appFooter>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  components : {
    AppHeader,
    AppFooter
  },
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0px;
  padding: 0px;

}
</style>
