<template>
    <div class="top-container">
        <div style="text-align:center">
            <p class="title-text">戸締りレポート - 安心な戸締りをサポートします。</p>
            <p>戸締りレポートは、戸締り＋レポート。会社やお店の戸締りのレポートすることで、安全に行うためのシンプルなツールです。</p>
        </div>
        <CatchIamge style="margin-top:40px;"></CatchIamge>
        <div style="position: absolute; bottom: 100px;">
            <button class="button-style">まずは、無料プランで</button>
        </div>
    </div>
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
.top-container {
    background-color: #058584;
    color: white;
    font-weight: bold;
    height: 720px;
    padding-top: 50px;
    
    // justify-content: center;
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


<script>
import CatchIamge from "@/components/top/CatchImage.vue"

export default {
    components : {
        CatchIamge
    }
}
</script>
