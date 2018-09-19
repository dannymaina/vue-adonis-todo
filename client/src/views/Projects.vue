<template>
  <v-container class="about">
    <v-alert :value="ProjectError" type="error">{{ProjectError}}</v-alert>
    <v-layout>
      <v-flex xs4>
        <Projects></projects>
      </v-flex>
      <v-flex xs8 class="pl-2" v-if="currentProject">
        <Tasks :currentProject="currentProject"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Projects from '@/components/Projects.vue'
import Tasks from '@/components/Tasks.vue'
import {mapGetters, mapState} from 'vuex'
import router from '../router'
export default {
  components: {
    Projects,
    Tasks
  },
  computed: {
     ...mapState('projects', ['ProjectError', 'currentProject']),
     ...mapGetters('authentication', ['isLoggedIn'])
  },

  mounted(){
    if(!this.isLoggedIn){
      router.push('/login')
    }
  }
  
}
</script>
