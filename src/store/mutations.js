import * as types from './mutation-types'

const mutations = {
  [types.SET_NEWSLIST] (state, newslist) {
    state.newslist = newslist
  },
  [types.SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
  }
}

export default mutations
