document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'geralt',
      img: 'images/geralt.jpg'
    },
    {
      name: 'yennifer',
      img: 'images/yennifer.jpg'
    },
    {
      name: 'ciri',
      img: 'images/ciri.jpg'
    },
    {
      name: 'calanthe',
      img: 'images/calanthe.png'
    },
    {
      name: 'jaskier',
      img: 'images/jaskier.png'
    },
    {
      name: 'renfri',
      img: 'images/renfri.jpg'
    },
    {
      name: 'geralt',
      img: 'images/geralt.jpg'
    },
    {
      name: 'yennifer',
      img: 'images/yennifer.jpg'
    },
    {
      name: 'ciri',
      img: 'images/ciri.jpg'
    },
    {
      name: 'calanthe',
      img: 'images/calanthe.png'
    },
    {
      name: 'jaskier',
      img: 'images/jaskier.png'
    },
    {
      name: 'renfri',
      img: 'images/renfri.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blankw.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blankw.png')
      cards[optionTwoId].setAttribute('src', 'images/blankw.png')
      
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blankw.png')
      cards[optionTwoId].setAttribute('src', 'images/blankw.png')
      
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})

