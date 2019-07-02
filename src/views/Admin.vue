<template>
  <div style="height: 100%">
    <AppMenu />
      <router-view name="maincontant" />
  </div>
</template>


<script>
import AppMenu from "@/components/AppMenu.vue";

export default {
  components : {
    AppMenu
  }
}
</script>
