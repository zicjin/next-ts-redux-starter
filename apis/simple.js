import axios from 'axios'
import 'isomorphic-unfetch'

export function axiosFetch(url) {
  // you can use any ajax lib, which can return promise, or wrap in promise ajax call
  return axios.get(url)
}

export function isomorphicFetch(url) {
  // you can use any ajax lib, which can return promise, or wrap in promise ajax call
  return fetch(url)
}
