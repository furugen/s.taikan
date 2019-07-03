<template>
  <div style="height: 100%">
   <v-navigation-drawer
      permanent
    >
      <v-list>
        <v-list-tile to="/admin/list">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>レポート一覧</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile to="/admin/checklist">
          <v-list-tile-action>
            <v-icon >home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>戸締り手順の作成</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

       <v-list-tile to="/admin/add">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>メンバーの追加</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

       <v-list-tile to="/admin/message">
          <v-list-tile-action>
            <v-icon>message</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>おつかれさまメッセージ</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/admin/calender">
          <v-list-tile-action>
            <v-icon>event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>戸締りを行う日カレンダー</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

  </div>
</template>
