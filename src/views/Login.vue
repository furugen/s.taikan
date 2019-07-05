<template>
  <div id="login-container">
    <div id="login-form">
      <v-form ref="form" lazy-validation>
        <v-text-field  label="user" required></v-text-field>

        <v-text-field  label="password" required></v-text-field>

        <v-btn to="/admin/list">ログイン</v-btn>
      </v-form>
    </div>  
  </div>
</template>

<style lang="scss">
#login-container {
  padding: 20px;
}
#login-form {
  width: 500px;
  height: 400px;
  padding: 40px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
}
</style>


<script>
// @ is an alias to /src

export default {
  components: {},
};
</script>
