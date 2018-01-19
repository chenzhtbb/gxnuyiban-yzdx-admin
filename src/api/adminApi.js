import axios from 'axios'
import {prefix} from './config'
import service from '@/common/js/service'

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

export function deleteSliderItem(id = 0) {
  const url = prefix + '/deleteSliderItem'

  const data = Object.assign({}, {
    id: id
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function updateSliderStatus(id = 0, status) {
  const url = prefix + '/updateSliderStatus'

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

export function login(username, password) {
  const url = prefix + '/login'

  const formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(url, formData, config).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function logout() {

}

export function getFeedBack(page = 1) {
  return service({
    url: '/getFeedBack',
    method: 'get',
    params: {
      page: page
    }
  })
  // const url = prefix + '/getFeedBack'
  //
  // const data = Object.assign({}, {
  //   page: page
  // })
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   console.log(res)
  //   return Promise.resolve(res.data)
  // })
}
