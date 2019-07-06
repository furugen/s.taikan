<template>
  <div class="plan-container">
    <div style="grid-area:desc-head"></div>
    <div style="grid-area:d1">戸締りチェックリストの作成可能数</div>
    <div style="grid-area:d2">メンバー数</div>
    <div style="grid-area:d3">通知機能</div>
    <div style="grid-area:d4">容量制限</div>
    

    <div style="grid-area:free-head" class="plan-header-free">無料プラン</div>
    <div style="grid-area:f1">3</div>
    <div style="grid-area:f2">3</div>


    <div style="grid-area:family-head" class="plan-header-family">家族向けプラン</div>
    <div style="grid-area:m1">3</div>
    <div style="grid-area:m2">10</div>


    <div style="grid-area:business-head" class="plan-header-business">ビジネスプラン</div>
    <div style="grid-area:b1">無制限</div>
    <div style="grid-area:b2">無制限</div>

  </div>
</template>

<style lang="scss">

.plan-header {
  padding: 10px;
  text-align: center;
}

.plan-header-free {
  @extend .plan-header;
  background-color: gray;
  color: white;
}


.plan-header-family {
  @extend .plan-header;
  background-color: greenyellow;

}



.plan-header-business {
  @extend .plan-header;
  background-color: orange;
  color: white;
}


.plan-container {
  display: grid;
  width: 80%;
  grid-template-columns: 40% 20% 20% 20%;
  grid-template-areas: 
    "desc-head free-head family-head business-head"
    "d1 f1 m1 b1"
    "d2 f2 m2 b2" 
    "d3 f3 m3 b3" 
    "d4 f4 m4 b4" 
    "d5 f5 m5 b5" 
}


</style>
