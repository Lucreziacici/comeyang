import Vuex from 'vuex'
import Vue from 'vue'
import * as types from '../mutation-types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        token: null,
    },
    getter:{
        token:state=>state.token,
        user:state=>state.user
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            console.log(data)
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null;
        },
        [types.USER]: (state) => {
            localStorage.user = data;
            state.user = data;
        },
        // [types.TITLE]: (state, data) => {
        //     state.title = data;
        // }
    }
})