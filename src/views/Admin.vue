<template>
  <div class="AdminContainer">
    <AppMenu class="AdminMenu"/>
    <router-view class="AdminContent"></router-view>
  </div>
</template>

<style lang="scss">
.AdminContainer {
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
    "menu content"
}

.AdminMenu {
  grid-area: menu;
}

.AdminContent {
  grid-area: content;
}
</style>


<script>
import AppMenu from "@/components/AppMenu.vue";

export default {
  components : {
    AppMenu
  }
}
</script>
