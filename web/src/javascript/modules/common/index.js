import Reactor from '../../reactor.js'
import cardStore from './stores/card-store'
import currentCardIdStore from './stores/current-card-id-store'

import * as Actions from './actions'
import * as Getters from './getters'

Reactor.registerStores({
  'cards': cardStore,
  'currentCardId': currentCardIdStore
})

export default { 
  actions: Actions,
  getters: Getters
}