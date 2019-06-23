<template>
  <div>
    <Content1></Content1>
    <hr>
    <Content2></Content2>
    <hr>
    <Content3></Content3>
    <hr>
    <Content4></Content4>
    <hr>
  </div>
</template>

<script>
// @ is an alias to /src
import Content1 from '@/components/top/Content1.vue'
import Content2 from '@/components/top/Content2.vue'
import Content3 from '@/components/top/Content3.vue'
import Content4 from '@/components/top/Content4.vue'

export default {
  components: {
    Content1,
    Content2,
    Content3,
    Content4
  }
}
</script>
