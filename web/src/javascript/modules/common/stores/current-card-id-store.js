import { Store, toImmutable } from 'nuclear-js'
import actionTypes from '../../action-types'

export default Store({
  initialize() {
    this.on(actionTypes.SET_CURRENT_CARD_ID, setCurrentCardId)
  },

  getInitialState() {
    return toImmutable({})
  }
})

function setCurrentCardId(state, id) {
  return id
}