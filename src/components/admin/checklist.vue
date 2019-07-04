<template>
  <div style="padding:20px;">
    <h1>戸締りチェックリストを作成しましょう。</h1>
    <v-card style="margin : 10px;">
      <v-card-title>
        No.1
        <v-text-field label="戸締り内容を入力してください。" style="width: 100%;"></v-text-field>
        <v-switch label="写真アップロードをする"></v-switch>
      </v-card-title>
    </v-card>

    <v-btn color="primary">チェック追加</v-btn>

    <div style="margin-top:30px;"></div>

    <h1>戸締りをする日時を設定しよう。</h1>

    <div style="margin : 20px">
      <h2>時間を設定</h2>
      <div style="padding-left : 20px; padding-top: 10px;">
        <v-time-picker format="24hr" landscape color="blue lighten-1"></v-time-picker>
      </div>
    </div>

    <div style="margin : 20px">
      <h2>日付を設定</h2>

      <div style="padding-left : 20px;">
        <v-radio-group>
          <v-radio label="毎日" value="radio-1"></v-radio>
          <v-radio label="月曜日から金曜日" value="radio-2"></v-radio>
          <v-radio label="曜日を選択" value="radio-3"></v-radio>
          <v-radio label="特定の日付" value="radio-4"></v-radio>
        </v-radio-group>
      </div>
    </div>

    <br />
    <v-btn color="primary">チェックリストを作成する。</v-btn>
  </div>
</template>
