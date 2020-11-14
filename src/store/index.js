import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cookie: '',
    uid: '',
    mvid:'',
    nums: '',
    MusicId: 0,
    SongUrl: '',
  },
  mutations: {
    userInfo(state,data){
      state.cookie = data.cookie
      state.uid = data.profile.userId
    },
    MusicId(state,id){
      state.MusicId = id
    },
    // MusicLists(state,songs){
    //         state.MusicLists = songs
    // }
    // SongUrl(state,url){
    //   state.SongUrl = url
    // }
  },
  actions: {
  },
  modules: {
  }
})
