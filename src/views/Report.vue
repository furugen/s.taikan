<template>
  <div>
    レポート

        <v-stepper v-model="nowstep" vertical>

            <v-stepper-step step="1" >
                電気は消しましたか？
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-btn color="primary" @click="nowstep = 2">写真をアップロード</v-btn>
            </v-stepper-content>

            <v-stepper-step step="2" >
                鍵は閉めましたか？
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-btn color="primary" @click="nowstep = 3">写真をアップロード</v-btn>
            </v-stepper-content>

            <v-stepper-step step="3" >
                レポート
            </v-stepper-step>
            <v-stepper-content step="3">
                <p>お疲れ様でした！報告ボタンをタップして完了してください。</p>

                <v-btn color="primary" to="/report-complete">報告</v-btn>
            </v-stepper-content>
            
        </v-stepper>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
  },
  data() {
      return {
          nowstep: 1
      }
  }
  
}
</script>
a