<template>
  <div>
    <Content1></Content1>
    <Content2></Content2>
    <Content3></Content3>
    <Content4></Content4>
    <Content5></Content5>
    <Content6></Content6>
  </div>
</template>



<script>
// @ is an alias to /src
import Content1 from "@/components/top/Content1.vue";
import Content2 from "@/components/top/Content2.vue";
import Content3 from "@/components/top/Content3.vue";
import Content4 from "@/components/top/Content4.vue";
import Content5 from "@/components/top/Content5.vue";
import Content6 from "@/components/top/Content6.vue";


export default {
  components: {
    Content1,
    Content2,
    Content3,
    Content4,
    Content5,
    Content6
  }
};
</script>
