
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'
import login from './modules/login'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: "",
        user:{}
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.USER]: (state, data) => {
            localStorage.user = data;
            state.user = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null
        },
       
       

    },
    modules: {
        login,
    }
})
