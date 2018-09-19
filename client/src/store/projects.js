// import router from '../router'
import Vue from 'vue'
import HTTP from '../http'
export default {
    namespaced: true,
    state: {
        newProjectName: null,
        ProjectError: null,
        projects: []
    },
    actions: {
        saveProject({commit}, project){
            HTTP().patch(`project/${project.id}`, project)
            .then(() => {
                commit('setEditMode', project)
            }).catch(() => {
                commit('setProjectError', 'Error Editing project')
            })
        },
        deleteProject({commit}, project){
            HTTP().delete(`project/${project.id}`)
            .then(() => {
                commit('unsetDeletedProject', project)
            }).catch(() => {
                commit('setProjectError', 'Error deleting project')
            })
        },
        createProject({commit, state}){
            HTTP().post('project', {
                title: state.newProjectName,
            }).then(({data}) => {
                commit('appendProject', data)
                commit('setNewProjectName', null) 
            }).catch(() => {
                commit('setCreateProjectError', 'Error creating new project')
            })
        },
        fetchProjects({commit}){  
            commit('setProjectError', null)
            HTTP().get('projects').then(({data}) => {
                commit('setProjects', data)
            }).catch(() => {
                commit('setProjectError', 'Error fetching projects')
            })
        },

    },
    getters: {
        
    },
    mutations:{
        setNewProjectName(state, name){
            state.newProjectName = name
        },
        appendProject(state, project){
            state.projects.push(project)
        },
        setProjectError(state, error){
            state.ProjectError = error
        },
        setProjects(state, projects){
            state.projects = projects
        },
        setProjectTitle(state, {project, title}){
            project.title = title
        },
        setEditMode(state, project){
            Vue.set(project, 'isEditMode', !project.isEditMode)
        },
        unsetDeletedProject(state, project){
            state.projects.splice(state.projects.indexOf(project), 1)
        }

    }
}