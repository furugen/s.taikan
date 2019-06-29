<template>
        <div style="display:grid;">
      <div class="images-container">
        <div class="images-left">
          <p style="font-size:x-large;">Step1</p>
          <img src="@/assets/about1.png" width="320" />
          <br />施錠した様子や、電気のスイッチを切った写真をスマホで撮って。
        </div>
        <div class="images-right">
          <p style="font-size:x-large;">Step2</p>
          <img src="@/assets/logomini.png" width="220" height="200"/>
          <br />戸締りレポートで報告！
        </div>
      </div>
    </div>

</template>

<style lang="scss">
.images-container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "left right ";
}
.images-left {
  grid-area: left;
  margin: 0 auto;


  padding: 30px;
}
.images-right {
  grid-area: right;
  margin: 0 auto;

  padding: 30px;
}
</style>


