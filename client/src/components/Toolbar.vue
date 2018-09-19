<template>
    <v-toolbar color="green" dark fixed>
        <v-toolbar-title class="mr-4">VUE TODO</v-toolbar-title>
        <v-toolbar-items>
          <v-btn v-if="isLoggedIn" to="/" flat><v-icon class="mr-1">playlist_add_check</v-icon>Projects</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-if="!isLoggedIn" flat to="/register"><v-icon class="mr-1">account_box</v-icon>Register</v-btn>
          <v-btn flat v-if="!isLoggedIn" to="/login"><v-icon class="mr-1">fingerprint</v-icon>Login</v-btn>
          <v-btn @click="logout" flat v-if="isLoggedIn"><v-icon class="mr-1">exit_to_app</v-icon>Logout</v-btn>
          <v-btn flat><v-icon class="mr-1">ondemand_video</v-icon>How it was made</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters('authentication', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('authentication', ['logout'])
  }

}
</script>

<style>

</style>
