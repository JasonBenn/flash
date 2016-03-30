// code that actually calls to API
import requestPromise from 'request-promise'

export const fetchCards = () => {
  return requestPromise('http://localhost:8000/api/cards/', {
    json: true
  })
}