import axios from 'axios'
import {prefix} from './config'

export function addSliderNews(title = '', link = '', author = '') {
  const url = prefix + '/addSliderNews'

  const data = Object.assign({}, {
    title: title,
    link: link,
    author: author
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSliderList(page = 0) {
  const url = prefix + '/getSliderList'

  const data = Object.assign({}, {
    page: page
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
