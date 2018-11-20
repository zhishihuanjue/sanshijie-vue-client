import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER', // 用户信息
  SET_PREMISES: 'SET_PREMISES' //楼盘信息
}

const state = { // 需要维护的状态
  isAutnenticated: false, // 是否认证
  user: {}, // 存储用户信息
  premises: {}
}

const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user: state => state.user,
  premises: state => state.premises
}

const mutations = {
  [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
    if (isAutnenticated)
      state.isAutnenticated = isAutnenticated
    else
      state.isAutnenticated = false
  },
  [types.SET_USER](state, user) {
    if (user)
      state.user = user
    else
      state.user = {}
  },
  [types.SET_PREMISES](state, premises) {
    if (premises)
      state.premises = premises
    else
      state.premises = {}
  }
}

const actions = {
  setIsAutnenticated: ({
    commit
  }, isAutnenticated) => {
    commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
  },
  setUser: ({
    commit
  }, user) => {
    commit(types.SET_USER, user)
  },
  setPremises: ({
    commit
  }, premises) => {
    commit(types.SET_PREMISES, premises)
  },
  clearCurrentState: ({
    commit
  }) => {
    commit(types.SET_IS_AUTNENTIATED, false)
    commit(types.SET_USER, null)
  }
}

export default new Vuex.Store({
  strict:true,
  state,
  getters,
  mutations,
  actions
})
