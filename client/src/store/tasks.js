// import router from '../router'
import Vue from 'vue'
import HTTP from '../http'
export default {
    namespaced: true,
    state: {
        newTaskDescription: null,
        TaskError: null,
        tasks: []
    },
    actions: {
        createTask({commit, state}, project){
            HTTP().post(`project/${project.id}/task`, {
                description: state.newTaskDescription,
            }).then(({data}) => {
                commit('appendTask', data)
                commit('setNewTaskDescription', null) 
            }).catch(() => {
                commit('setTaskError', 'Error creating new task')
            })
        },
        deleteTask({commit}, task){
            HTTP().delete(`task/${task.id}`)
            .then(() => {
                commit('unsetDeletedTask', task)
            }).catch(() => {
                commit('setTaskError', 'Error deleting task')
            })
        },
        fetchTasks({commit}, project){  
            commit('setTaskError', null)
            HTTP().get(`project/${project.id}/task`).then(({data}) => {
                commit('setTasks', data)
            }).catch(() => {
                commit('setTaskError', 'Error fetching projects')
            })
        },
        saveTask({commit}, task){
            HTTP().patch(`task/${task.id}`, task)
            .then(() => {
                commit('setEditMode', task)
            }).catch(() => {
                commit('setTaskError', 'Error Editing task')
            })
        },

    },
    getters: {
        
    },
    mutations:{
        setNewTaskDescription(state, description){
            state.newTaskDescription = description
        },
        appendTask(state, task){
            state.tasks.push(task)
        },
        setTaskError(state, error){
            state.TaskError = error
        },
        setTasks(state, tasks){
            state.tasks = tasks
        },
        unsetDeletedTask(state, task){
            state.tasks.splice(state.tasks.indexOf(task), 1)
        },
        setEditMode(state, task){
            Vue.set(task, 'isEditMode', !task.isEditMode)
        },
        setTaskDescription(state, {task, description}){
            task.description = description
        },

    }
}