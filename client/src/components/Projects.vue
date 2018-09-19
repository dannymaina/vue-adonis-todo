<template>
     <panel title="Projects">
        <v-layout row wrap>
            <v-flex xs8>
                <v-text-field :value="newProjectName" @input="setNewProjectName" placeholder="Project name..."></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-btn @click="createProject" color="green" dark class="mt-2"><v-icon class="mr-1">add_circle</v-icon>Create</v-btn>
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    computed: {
        ...mapState('projects',['newProjectName'])
    },

    methods: {
        ...mapMutations('projects',['setNewProjectName']),
        ...mapActions('projects', ['createProject'])
    }
}
</script>

<style>

</style>
