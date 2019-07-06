<template>
  <div class="plan-container">
    <div class="plan-content" style="grid-column: 1;">
      <div class="plan-header">ビジネスプラン</div>
      <div class="plan-body">
        <div>500円 / 月</div>
        <div>
          <ul>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="plan-content" style="grid-column: 2;">
      <div class="plan-header">ビジネスプラン</div>
      <div class="plan-body">
        <div>500円 / 月</div>
        <div>
          <ul>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="plan-content" style="grid-column: 3;">
      <div class="plan-header">ビジネスプラン</div>
      <div class="plan-body">
        <div>500円 / 月</div>
        <div>
          <p style="font-size:large;">参加メンバー ５人まで</p>
          <p style="font-size:large;">写真レポートの保存期間 1ヶ月</p>」
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">


.plan-container {
  display: grid;

  grid-template-columns: 30% 30% 30%;
  grid-template-areas: 
    "sp1 left sp2 center sp3"
}

.plan-content {
  border: darkgray;
  border-style: solid;
  border-width: 1px;
}
.plan-header {
  background-color: gray;
  color: white;
  padding: 18px;
}
.plan-body {
  padding: 10px;
}

.service-plan-wrapper {
  margin-bottom: 4em;
  display: flex;
  flex-wrap: wrap;
}
.service-plan-wrapper .inner {
  width: calc(40% - 10px);
  margin: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.14);
  background: #fff;
  border-radius: 5px;
}
.service-plan-wrapper .head {
  padding: 2em 0.5em;
  color: #fff;
  text-align: center;
}
.service-plan-wrapper .head .title {
  font-size: 20px;
}
.service-plan-wrapper .head .year {
  margin-top: 1em;
}
.service-plan-wrapper .head .price {
  font-size: 30px;
  font-weight: bold;
}
.service-plan-wrapper .txt {
  padding: 0.5em;
  height: 6em;
  font-size: 14px;
}
.service-plan-wrapper .function-list {
  padding: 0.5em;
  font-size: 14px;
}
.service-plan-wrapper .function-list ul {
  margin-left: 0;
  padding-left: 0;
  list-style: none;
}
.service-plan-wrapper .function-list ul li {
  padding: 0.5em 0 0.5em 25px;
  border-top: 1px solid #e5e5e5;
  background-image: url(); /*（）にアップロードした画像URLを記述する */
  background-repeat: no-repeat;
  background-position: 0% 15%;
}
.service-plan-wrapper .none {
  color: #ddd;
  background-image: none;
}
</style>
