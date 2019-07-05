<template>
  <div id="login-container">
    <div id="login-form">
      <v-form ref="form" lazy-validation>
          <div class="invite-container">
            <v-text-field  label="招待する人のメールアドレス" required class="left-area" box></v-text-field>
          </div>
        <v-btn to="/admin/add" color="primary">招待メール送信<v-icon style="margin-left:10px;">group_add</v-icon></v-btn>
      </v-form>
    </div>  
  </div>
</template>

<style lang="scss">
#login-container {
  padding: 10px;
}
#login-form {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
}

.invite-container {
    display: grid;
    grid-template-columns: 45%  5% 45%;
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
