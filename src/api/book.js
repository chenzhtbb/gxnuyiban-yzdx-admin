import axios from 'axios'
import {prefix} from './config'

export function getBookList(page = 0) {
  const url = prefix + '/getBookList'

  const data = Object.assign({}, {
    page: page
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function updateBookStatus(id = 0, status) {
  const url = prefix + '/updateBookStatus'

  const data = Object.assign({}, {
    id: id,
    status: status
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function deleteBookItem(id = 0, status) {
  const url = prefix + '/deleteBookItem'

  const data = Object.assign({}, {
    id: id,
    status: status
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
