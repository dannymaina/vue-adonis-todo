// import router from '../router'
import HTTP from '../http'
export default {
    namespaced: true,
    state: {
        newProjectName: "jgsdjhgfjs",
        setCreateProjectError: null,
        projects: []
    },
    actions: {
        createProject({commit, state}){
            //commit('setNewProjectName', null)            
            HTTP().post('project', {
                title: state.newProjectName,
            }).then(({data}) => {
                commit('appendProject', data)
                commit('setNewProjectName', null) 
            }).catch(() => {
                commit('setCreateProjectError', 'Error creating new project')
            })
        }
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
        setCreateProjectError(state, error){
            state.setCreateProjectError = error
        },
    }
}