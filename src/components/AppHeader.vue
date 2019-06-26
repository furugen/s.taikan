<template>
    <div id="header-content">
        <div id="nav">
        TOJIREP   　TOJIREPOについて　  料金プラン　   ログイン
        <!-- <router-link to="/about">About</router-link> |
        <router-link>ccc</router-link> -->
        
        </div>
    </div>
</template>

<style lang="scss">
#header-content {
    position: sticky;
    top: 0;
    color: whitesmoke;
    font-weight: bold;

    background-color: #058584;
}
#nav {
  padding: 18px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
