<template>
  <div>
    <div id="header-content">
      <div id="nav">
        戸締りレポート 機能について 料金プラン ログイン
      </div>
    </div>
  </div>
</template>


<style lang="scss">
#header-content {
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
.top-scroll {
  background-color: #058584;
  color: whitesmoke;
}
.scroll {
  background-color: white;
  color: darkolivegreen;
  box-shadow: 0 2px 4px grey;
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

<script>
export default {
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

