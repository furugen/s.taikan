<template>
  <div id="login-container">
    <div id="login-form">
      <v-form ref="form" lazy-validation>
          <div class="invite-container">
            <v-text-field  label="e-mail" required class="left-area"></v-text-field>
            <v-text-field  label="password" required class="right-area"></v-text-field>
          </div>
        <v-btn to="/admin/list">ログイン</v-btn>
      </v-form>
    </div>  
  </div>
</template>

<style lang="scss">
#login-container {
  padding: 20px;
  color: darkgray;
}
#login-form {
  padding: 40px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
}

.invite-container {
    display: grid;
    grid-template-columns: 45%  10% 45%;
    grid-template-areas: 
        "left space right";
}
.left-area {
    grid-area: left;
}
.right-area {
    grid-area: right;
}
</style>


<script>
// @ is an alias to /src

export default {
  components: {},
};
</script>
