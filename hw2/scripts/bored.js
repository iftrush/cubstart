const boredButton = document.getElementById("bored-button");
const card = document.getElementById("card");

// BEGIN PART 7

async function fetchActivity() {
  // YOUR CODE HERE
  const response = await fetch("https://www.boredapi.com/api/activity");
  const activity = await response.json();
  return activity;
}

// END PART 7
// color loop
let c = -1;
let colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];

boredButton.addEventListener("click", async () => {
  // empty card
  // get activity from API
  // process this data into 'p' elements
  // append the text elements as children of the card
  card.replaceChildren();
  const activity = await fetchActivity();
  card.style.backgroundColor = "#689ef2";
  c++;
  if (c == 7) {
    c = 0;
  }
  // BEGIN PART 8
  for (const [key, value] of Object.entries(activity)) {
    const detail = document.createElement("p");
    detail.innerHTML = key + ": " + value;
    detail.style.color = colors[c];
    card.appendChild(detail);
    c = (c + 1) % 7;
  }
  // END PART 8
});
