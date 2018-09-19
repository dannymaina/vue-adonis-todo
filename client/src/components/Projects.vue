<template>
     <panel title="Projects">
        <div v-for="project in projects" :key="project.id" class="project mt-2">
            <editableRecord class="editable-record" @onClick="setProject(project)" @onDelete="deleteProject(project)" @onSave="saveProject(project)" @onEdit="setEditMode(project)" :record="project" @onInput="setProjectTitle({project, title:$event})" :isEditMode="project.isEditMode" :title="project.title"/>
        </div>
        <CreateRecord placeholder="Project Title..." @onInput="setNewProjectName" @create="createProject" :value="newProjectName"/>
    </panel>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import CreateRecord from '@/components/CreateRecord.vue'
import EditableRecord from '@/components/EditableRecord.vue'
export default {
    computed: {
        ...mapState('projects',['newProjectName', 'projects'])
    },

    methods: {
        ...mapMutations('projects',['setNewProjectName', 'setEditMode', 'setProjectTitle', 'setCurrentProject']),
        ...mapActions('projects', ['createProject','fetchProjects', 'saveProject', 'deleteProject']),
        ...mapActions('tasks', ['fetchTasks']),
        setProject(project){
            this.setCurrentProject(project)
            this.fetchTasks(project)
        },
    },

    mounted(){
        this.fetchProjects()
    },

    components: {
        CreateRecord, EditableRecord
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

.editable-record {
    cursor: pointer;
}
</style>
