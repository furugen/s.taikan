<template>
  <div>
    <v-toolbar app>
        <v-toolbar-title class="headline ">
          <router-link  to="/">
          <span class="font-weight-light">戸締りReport</span>
          </router-link>
          
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn flat to="/about">
         <span class="mr-2">機能について</span>
        </v-btn>

        <v-btn flat to="/price">
         <span class="mr-2">各プラン</span>
        </v-btn>
        
        <v-btn flat to="/login">
         <span class="mr-2">ログイン</span>
        </v-btn>
    </v-toolbar>

  </div>

</template>


<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 5% 20% 1fr;
  grid-template-areas: "space left-menu right-menu";
}

.left-menu {
  grid-area: left-menu;
}

.right-menu {
  grid-area: right-menu;
}

#header-content {
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}

</style>

<script>
import RouterLinkButton from "@/components/RouterLinkButton.vue";

export default {
  components: {
    RouterLinkButton
  },
  mounted: function() {
    //  window.addEventListener( "scroll", function() {

    //     var headerElement = document.getElementById("header-content") ; // `#header`セレクタを取得
    //     var rect = headerElement.getBoundingClientRect() ; //
    //     var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
    //     if (y > 0) { // 変数yの値が0よりも
    //       headerElement.classList.remove('scroll'); // 大きければhiddensセレクタを削除する
    //     } else {
    //       headerElement.classList.add('scroll'); // そうでなければhiddensセレクタを追加する
    //     }
    //   } ) ;
    var header = $("#header-content");
    console.log(header);

    $(window).scroll(function() {
      var header_offset = $("#header-content").offset();
      var header_height = $("#header-content").height();

      console.log("window.scrollTop:" + $(window).scrollTop());

      console.log("header_offset.top:" + header_height + 100);

      if ($(window).scrollTop() > 0) {
        console.log("addClass");
        $("#header-content").addClass("scroll");
        $("#header-content").removeClass("top-scroll");
      } else {
        console.log("removeClass");
        $("#header-content").addClass("top-scroll");
        $("#header-content").removeClass("scroll");
      }
    });
  }
};
</script>

