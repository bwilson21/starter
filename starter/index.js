//Part 1.1: Random Joke
const randomJoke = "https://official-joke-api.appspot.com/random_joke";
axios.get(randomJoke).then((response) => {
  const joke = response.data;
  console.log("Part 1.1: Random Joke");
  console.log(joke.setup);
  console.log(joke.punchline);
});

//Part 1.2: Multiple Jokes
const multipleJokes = "https://official-joke-api.appspot.com/random_ten";
axios.get(multipleJokes).then((response) => {
  const joke = response.data;
  console.log("Part 1.2: Multiple Jokes");
  for (let i = 0; i < 10; i++) {
    console.log("Joke" + (i + 1) + ": " + joke[i].setup);
    console.log(joke[i].punchline);
  }
});

//Part 1.3: Jokes by Type
const byType = "https://official-joke-api.appspot.com/jokes/programming/ten";
axios.get(byType).then((response) => {
  const joke = response.data;
  console.log("Part 1.3: Jokes by Type");
  for (let i = 0; i < 10; i++) {
    console.log("Joke" + (i + 1) + ": " + joke[i].setup);
    console.log(joke[i].punchline);
  }
});

//Part 1.4: Stretch Goal - Multiple Requests for the Same Thing
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

  console.log("Part 1.4: Stretch Goal - Multiple Requests for the Same Thing");
  console.log("Joke 1: " + joke1Data.setup);
  console.log(joke1Data.punchline);
  console.log("Joke 2: " + joke2Data.setup);
  console.log(joke2Data.punchline);
  console.log("Joke 3: " + joke3Data.setup);
  console.log(joke3Data.punchline);
  console.log("Joke 4: " + joke4Data.setup);
  console.log(joke4Data.punchline);
});

//Part 1.5: Stretch Goal - Helper Function
async function getJoke() {
  console.log("Part 1.5: Stretch Goal - Helper Function");
  for (let i = 0; i < 5; i++) {
    await axios.get(randomJoke).then((response) => {
      const joke = response.data;
      console.log("Joke" + (i + 1) + ": " + joke.setup);
      console.log(joke.punchline);
    });
  }
}
