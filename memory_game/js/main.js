console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];
var cardsInPlay = [];

function createBoard() {
  var ul = document.querySelector("#game-board");
  ul.innerHTML = "";

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    ul.appendChild(cardElement);
  }


}

function checkForMatch() {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  cardsInPlay = [];
  createBoard();

}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  var selectedCard = cards[cardId];
  this.setAttribute("src", selectedCard.cardImage);

  console.log("User flipped " + selectedCard.rank);
  console.log(selectedCard.cardImage);
  console.log(selectedCard.suit);

  cardsInPlay.push(selectedCard);

  if (cardsInPlay.length === 2) {
    checkForMatch()
  }
}

createBoard();
