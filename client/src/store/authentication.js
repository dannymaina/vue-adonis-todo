import router from '../router'
import HTTP from '../http'
export default {
    namespaced: true,
    state: {
        registerEmail: "dannymaina@gmail.com",
        registerPassword: "12345",
        registerError: null,
        loginEmail: "dannymaina@gmail.com",
        loginPassword: "12345",
        loginError: null,
        token: null
    },
    actions: {
        register({commit, state}){
            commit('setRegisterError', null)            
            HTTP().post('auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
            }).then(({data}) => {
                commit('setToken', data.token)
                router.push('/')
            }).catch(() => {
                commit('setRegisterError', 'Error while registering user')
            })
        },
        login({commit, state}){
            commit('setLoginError', null)            
            HTTP().post('auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            }).then(({data}) => {
                commit('setToken', data.token)
                router.push('/')
            }).catch(() => {
                commit('setLoginError', 'Invalid Email or Password')
            })
        },
        logout({commit}){
            commit('setToken', null)
            router.push('/login')
        }
    },
    getters: {
        isLoggedIn(state){
            return !!state.token
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token
        },
        setRegisterError(state, error){
            state.registerError = error
        },
        setRegisterEmail(state, email){
            state.registerEmail = email
        },
        setRegisterPassword(state, password){
            state.registerPassword = password
        },
        setLoginError(state, error){
            state.loginError = error
        },
        setLoginEmail(state, email){
            state.loginEmail = email
        },
        setLoginPassword(state, password){
            state.loginPassword = password
        },
    }
}