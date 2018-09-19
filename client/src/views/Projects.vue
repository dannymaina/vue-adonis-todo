<template>
  <v-container class="about">
    <v-alert :value="ProjectError" type="error">{{ProjectError}}</v-alert>
    <v-layout>
      <v-flex xs4>
        <Projects></projects>
      </v-flex>
      <v-flex xs8 class="pl-2">
        <panel title="Tasks"><h1>test</h1></panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Projects from '@/components/Projects.vue'
import {mapGetters, mapState} from 'vuex'
import router from '../router'
export default {
  components: {
    Projects
  },
  computed: {
     ...mapState('projects', ['ProjectError']),
     ...mapGetters('authentication', ['isLoggedIn'])
  },

  mounted(){
    if(!this.isLoggedIn){
      router.push('/login')
    }
  }
  
}
</script>
