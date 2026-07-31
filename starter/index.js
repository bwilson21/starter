//Part 1.1: Random Joke
const randomJoke = "https://official-joke-api.appspot.com/random_joke";
async function RandomJoke() {
  axios.get(randomJoke).then((response) => {
    const joke = response.data;
    console.log("Part 1.1: Random Joke");
    console.log(joke.setup);
    console.log(joke.punchline);
  });
}

//Part 1.2: Multiple Jokes
const multipleJokes = "https://official-joke-api.appspot.com/random_ten";
async function MultipleJokes() {
  axios.get(multipleJokes).then((response) => {
    const joke = response.data;
    console.log("Part 1.2: Multiple Jokes");
    for (let i = 0; i < 10; i++) {
      console.log("Joke" + (i + 1) + ": " + joke[i].setup);
      console.log(joke[i].punchline);
    }
  });
}

//Part 1.3: Jokes by Type
const byType = "https://official-joke-api.appspot.com/jokes/programming/ten";
async function ByType() {
  axios.get(byType).then((response) => {
    const joke = response.data;
    console.log("Part 1.3: Jokes by Type");
    for (let i = 0; i < 10; i++) {
      console.log("Joke" + (i + 1) + ": " + joke[i].setup);
      console.log(joke[i].punchline);
    }
  });
}

//Part 1.4: Stretch Goal - Multiple Requests for the Same Thing
async function FourJokes() {
  Promise.all([
    axios.get(randomJoke),
    axios.get(randomJoke),
    axios.get(randomJoke),
    axios.get(randomJoke),
  ]).then((responses) => {
    const joke1 = responses[0];
    const joke2 = responses[1];
    const joke3 = responses[2];
    const joke4 = responses[3];

    const joke1Data = joke1.data;
    const joke2Data = joke2.data;
    const joke3Data = joke3.data;
    const joke4Data = joke4.data;

    console.log(
      "Part 1.4: Stretch Goal - Multiple Requests for the Same Thing",
    );
    console.log("Joke 1: " + joke1Data.setup);
    console.log(joke1Data.punchline);
    console.log("Joke 2: " + joke2Data.setup);
    console.log(joke2Data.punchline);
    console.log("Joke 3: " + joke3Data.setup);
    console.log(joke3Data.punchline);
    console.log("Joke 4: " + joke4Data.setup);
    console.log(joke4Data.punchline);
  });
}

//Part 1.5: Stretch Goal - Helper Function
async function GetJoke() {
  console.log("Part 1.5: Stretch Goal - Helper Function");
  for (let i = 0; i < 5; i++) {
    await axios.get(randomJoke).then((response) => {
      const joke = response.data;
      console.log("Joke" + (i + 1) + ": " + joke.setup);
      console.log(joke.punchline);
    });
  }
}

async function Cards() {
  //Part 2.1: New Deck
  const newDeck = "https://deckofcardsapi.com/api/deck/new/";
  let deck = await axios.get(newDeck);
  let deck_id = deck.data.deck_id;
  console.log("Part 2.1: New Deck");
  console.log("Deck ID: " + deck_id);
  //Part 2.2: Draw One Card
  const oneCard = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?`;
  await axios.get(oneCard).then((response) => {
    const cardData = response.data;
    console.log("Part 2.2: Draw One Card");
    console.log(
      "Value: " + cardData.cards[0].value + " Suit: " + cardData.cards[0].suit,
    );
  });
  //Part 2.3: Draw Multiple Cards
  const fiveCards = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`;
  await axios.get(fiveCards).then((response) => {
    const cardData = response.data;
    console.log("Part 2.3: Draw Multiple Cards");
    let cardNumber = 1;
    for (let i = 0; i < 5; i++) {
      console.log(
        "Card: " +
          cardNumber +
          " Value: " +
          cardData.cards[i].value +
          " Suit: " +
          cardData.cards[i].suit,
      );
      cardNumber++;
    }
  });

  //Part 2.4: Stretch Goal 1 - Shuffle and Re-Draw
  const shuffle = `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`;
  const drawTwo = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`;
  await axios.get(shuffle).then();
  await axios.get(drawTwo).then((response) => {
    cardData = response.data;
    console.log("Part 2.4: Stretch Goal 1 - Shuffle and Re-Draw");
    let cardNumber = 1;
    for (let i = 0; i < 2; i++) {
      console.log(
        "Card: " +
          cardNumber +
          " Value:" +
          cardData.cards[i].value +
          " Suit: " +
          cardData.cards[i].suit,
      );
      cardNumber++;
    }
  });

  //Part 2.5: Stretch Goal 2 - Array of Cards
  async function drawFive(deck_id, count) {
    const draw = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`;
    const response = await axios.get(draw);
    return response.data.cards;
  }
  console.log("Part 2.5: Stretch Goal 2 - Array of Cards");
  for (let i = 0; i < 4; i++) {
    const hand = await drawFive(deck_id, 5);
    console.log("Player " + (i + 1) + ":");

    for (let j = 0; j < hand.length; j++) {
      console.log("   Card: " + hand[j].value + " of " + hand[j].suit);
    }
  }
}

RandomJoke();
MultipleJokes();
ByType();
FourJokes();
GetJoke();
Cards();
