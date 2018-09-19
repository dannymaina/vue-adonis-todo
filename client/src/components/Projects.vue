<template>
     <panel title="Projects">
        <div v-for="project in projects" :key="project.id" class="project mt-2">

        <v-layout row wrap>
            <v-flex xs9 class="text-xs-left">
                <span v-if="!project.isEditMode">
                {{project.title}}
                </span>
                <v-text-field autofocus @keyup.enter="saveProject(project)" @input="setProjectTitle({project, title:$event})" v-if="project.isEditMode" :value="project.title"></v-text-field>
            </v-flex>
            <v-flex xs3>
                <v-icon @click="setEditMode(project)" v-if="!project.isEditMode">edit</v-icon>
                <v-icon @click="saveProject(project)" v-if="project.isEditMode">check</v-icon>
                <v-icon @click="deleteProject(project)">delete</v-icon>
            </v-flex>
            
        </v-layout>
        </div>
        <v-layout row wrap class="mt-4">
            <v-flex xs8>
                <v-text-field @keyup.enter="createProject" :value="newProjectName" @input="setNewProjectName" placeholder="Project name..."></v-text-field>
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
        ...mapState('projects',['newProjectName', 'projects'])
    },

    methods: {
        ...mapMutations('projects',['setNewProjectName', 'setEditMode', 'setProjectTitle']),
        ...mapActions('projects', ['createProject','fetchProjects', 'saveProject', 'deleteProject'])
    },

    mounted(){
        this.fetchProjects()
    }
}
</script>

<style>
.project {
    font-size:24px
}

.icon {
    cursor: pointer;
}

.icon:hover {
    color: green;
}
</style>
