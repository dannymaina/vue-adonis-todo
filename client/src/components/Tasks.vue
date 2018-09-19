<template>
     <panel title="Tasks">
        <div v-for="task in tasks" :key="task.id" class="task mt-2">
            <EditableRecord @onInput="setTaskDescription({task, description:$event})" @onSave="saveTask(task)" @onEdit="setEditMode(task)" @onDelete="deleteTask(task)" :record="task" :isEditMode="task.isEditMode" :title="task.description"/>
        </div>
        <CreateRecord placeholder="Task Description..." @onInput="setNewTaskDescription" @create="createTask(currentProject)" :value="newTaskDescription"/>
    </panel>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import CreateRecord from '@/components/CreateRecord.vue'
import EditableRecord from '@/components/EditableRecord.vue'
export default {
    computed: {
        ...mapState('tasks',['tasks','newTaskDescription']),
        ...mapState('projects', ['currentProject']),
    },

    methods: {
        ...mapMutations('tasks',['setNewTaskDescription', 'setEditMode', 'setTaskDescription']),
        ...mapActions('tasks', ['createTask','fetchTasks', 'deleteTask', 'saveTask']),
    },

    mounted(){
        //this.fetchTasks()
    },

    components: {
        CreateRecord, EditableRecord
    }
}
</script>

<style>
.task {
    font-size:18px
}

.icon {
    cursor: pointer;
}

.icon:hover {
    color: green;
}
</style>
