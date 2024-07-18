// joke generator

let jokeText = document.getElementById("joke-text");
let generateJoke = document.getElementById("generate-btn");
const jokeUrl = "https://official-joke-api.appspot.com/jokes/random";

generateJoke.addEventListener("click", function () {
  fetch(jokeUrl)
    .then(function (feedback) {
      return feedback.json();
    })
    .then(function (data) {
      jokeText.textContent = data.setup + " " + data.punchline;
    })
    .catch(function (error) {
      jokeText.textContent = "Failure to fetch joke, try again later.";
      console.error("Error fetching joke:", error);
    });
});
