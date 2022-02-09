const boredButton = document.getElementById("bored-button");
const card = document.getElementById("card");

// BEGIN PART 7

async function fetchActivity() {
  // YOUR CODE HERE
}

// END PART 7

boredButton.addEventListener("click", async () => {
  // empty card
  // get activity from API
  // process this data into 'p' elements
  // append the text elements as children of the card
  card.replaceChildren();
  const activity = await fetchActivity();
  // BEGIN PART 8

  // END PART 8
});
