export const cards = ['cards']
export const currentCard = [
  ['currentCardId'],
  ['cards'],
  (currentCardId, cards) => {
    return cards.get(currentCardId) 
  }
]

export const cardCount = [
  ['cards'],
  cards => cards.size
]

// given a card ID, find reviews for that card ID