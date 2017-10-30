import * as types from './mutation-types'

const mutations = {
  [types.SET_NEWSLIST] (state, newslist) {
    state.newslist = newslist
  }
}

export default mutations
