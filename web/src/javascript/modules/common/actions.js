import actionTypes from '../action-types'
import reactor from '../../reactor'
import { fetchCards } from '../../api'

export const dispatchFetchCards = () => {
  fetchCards().then(data => {
    reactor.dispatch(actionTypes.FETCH_CARDS, data)
    // do this at random
    reactor.dispatch(actionTypes.SET_CURRENT_CARD_ID, 1)
  }).catch(e => {
    console.log(e);
  })
}

export const nextCard = () => {
  const currentCardId = reactor.evaluate(['currentCardId'])
  const cards = reactor.evaluate(['cards'])
  debugger
  
  // cards.get(currentCardId)
  // choose next card ID
  // dispatch SET_CURRENT_CARD_ID
}

export const createReview = () => {
  // create a review, update the card
}

export const otherMethod = () => {}
