<template>
  <v-app>
    <AppHeader></AppHeader>
          <router-view name="maincontant" />
    <v-content >
      <router-view />
    </v-content>
  </v-app>
</template>

<style lang="scss">
.ContentContainer {
  display: grid;
  grid-template-columns: 300px 1fr;
  //grid-template-areas: "menu maincontent";
}

.AppContainer {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "header haeder"
    "menu   maincontent";
}
.AppHeader {
  grid-area: header;
}
.AppMenu {
  grid-column: 1/2;
  //grid-area: menu;
}
.AppMainContent {
  grid-column: 2/3;
  //grid-area: maincontent;
}
</style>


<script>
import HelloWorld from "./components/HelloWorld";
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppHeader
  },
  data() {
    return {
      drawer : false
    };
  },
  
};
</script>
