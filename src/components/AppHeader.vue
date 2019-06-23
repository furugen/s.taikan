<template>
    <div id="header-content">
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link>ccc</router-link>
        
        </div>
    </div>
</template>

<style lang="scss">
#header-content {
    position: sticky;
    top: 0;
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
