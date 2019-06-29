<template>
    <div class="content">
        <div style="position: relative;">
            <p class="title-text">戸締りレポート - 会社やお店の安心な戸締りをサポートします。</p>
            <p>戸締りレポートは、戸締り＋レポート。会社やお店の戸締りのレポートすることで、安全に行うためのシンプルなツールです。</p>
        </div>

        <div style="position: absolute; bottom: 100px;">
            <button class="button-style">まずは、無料プランで</button>
        </div>
    </div>
</template>


<style lang="scss">
.button-style {
    font-size: x-large;
    color: black;
    border-radius: 10px;
    background:  #42f4dc;
    width: 400px;
    border-style: none;
    padding: 10px;
}
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
    //background-color: #058584;
    //color: white;
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
