<template>
    <router-link v-bind:to="to">{{label}}</router-link>
</template>

<style lang="scss">

</style>


<script>


export default {
    props : {
        label : String,
        to : String,
    }
}
</script>
