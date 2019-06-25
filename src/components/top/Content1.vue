<template>
    <div class="content">
        <div>
        <p class="title-text">TOJIMARI - 会社、お店で安心な戸締りツール</p>
        <p>TOJIMARI(とじまり)は、毎日の会社やお店の戸締りを、安心して行うためのシンプルなツールです。</p>

        </div>
    </div>
    <!-- <div class="content">
        <div class="content-container">
            <div class="content-left">
                <p class="title-text">最終退館チェックリストって？</p>
    <p class="detail-text">会社やお店の最後の戸締り。</p>
    <p class="detail-text">鍵の閉め忘れ、電気の消し忘れ。不安になりませんか？</p>
    <p class="detail-text">スマホで写真を撮って退館報告をしましょう。</p>
            </div>
            <div class="content-right">
                画像
            </div>
        </div>
    </div> -->
</template>


<style lang="scss">
.content-container {
    display: grid;
    width: 100%;
    grid-template-rows: 100%;
    grid-template-columns: 5% 42% 6% 42% 5%;
}
.title-text {
    font-size: 2.5rem;
    margin-bottom: 10px;
}
.detail-text {
    font-size:large;
}
.content-left {
    grid-column: 2;
    text-align: left;
}
.content-right {
    grid-column: 4;
}
.content {
    background-color: #058584;
    color: white;
    font-weight: bold;
    height: 720px;
    display: flex;
    justify-content: center;
    //align-items: center;
}

.content-blue {
    background-color: #058584;
    color: white;
    font-size: x-large;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content2 {
    background-color: whitesmoke;
    color: gray;
    font-size: x-large;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-textbox-left {
    display: flex;
    justify-content: left;
}
</style>
