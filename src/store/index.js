import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels: '',
    channelIndex: 0,
    channelData: '',
    newDataIndex: '',
    isActive: 0, // 选中的频道的index
    load: true,
    showMy: false,
    showLogin: false,
    collection: [],
    likeImg: require("@/assets/like.png")
  },
  mutations: {
    muChannels(state, data) {
      // 设置频道名称
      state.channels = data
    },
    muChannelIndex(state, index) {
      // 设置频道index
      state.channelIndex = index
    },
    muGetData(state, data) {
      // 获取文章数据
      state.channelData = data
    },
    muNewDataIndex(state, index) {
      state.newDataIndex = index
    },
    increment(state, index) {
      // 删除频道
      state.channels.splice(index, 1)
    },
    decrement(state, item) {
      // 添加频道
      state.channels.push(item)
    },
    loading(state, statu) {
      //设置加载
      state.load = statu
    },
    muIsActive(state, index) { // 设置当前频道
      state.isActive = index
    },
    muShowMy(state, statu) {
      state.showMy = statu
    },
    muShowLogin(state, statu) {
      state.showLogin = statu
    },
    muCollect(state, data) {
      state.collection.push(data)
      // state.collection.reverse()
    },
    muLike(state, data) {
      state.collection.splice(state.collection.indexOf(data), 1)
    },
    muLikeImg(state, url) {
      state.likeImg = url
    }
  },
  actions: {
    acChannels({ commit, state }) {
      // 获取频道
      return new Promise((resolve, reject) => {
        this._vm.$api.article.channelList()
          .then(res => {
            commit('muChannels', res.data.result)
          })
        resolve()
      })
    },
    acGetData({ commit, state }, channel) {
      return new Promise((resolve, reject) => {
        this._vm.$api.article.channelItems(channel)
          .then(res => {
            console.log(res)
            commit('muGetData', res.data.result.list)
            commit('loading',false)
          }).catch(e=>{
            console.error(e)
          })
        resolve()
      })
    }
  }
})

