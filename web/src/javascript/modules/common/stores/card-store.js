import { Store, toImmutable } from 'nuclear-js'
import actionTypes from '../../action-types'

export default Store({
  initialize() {
    this.on(actionTypes.FETCH_CARDS, loadCards)
  },

  getInitialState() {
    return toImmutable({})
  }
})

function loadCards(state, cardList) {
  var newState = state.withMutations(s =>{
    cardList.forEach(card => {
      s.setIn([card.id], toImmutable(card))
    })
  })
  return newState
}