<template>
  <v-container class="about">
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
      <h1>Login</h1>
      <v-alert :value="loginError" type="error">{{loginError}}</v-alert>
      <v-text-field label="Email" placeholder="Email" :value="loginEmail" @input="setLoginEmail"></v-text-field>
      <v-text-field label="Password" placeholder="Password" type="password" autocomplete="new-password" :value="loginPassword" @input="setLoginPassword"></v-text-field>
      <v-btn color="green" dark @click="login"><v-icon class="mr-1">fingerprint</v-icon>Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState('authentication',['loginEmail', 'loginPassword', 'loginError'])
  },
  methods: {
    ...mapMutations('authentication',['setLoginEmail', 'setLoginPassword']),
    ...mapActions('authentication',['login'])
  }

}
</script>

<style>

</style>

