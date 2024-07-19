// joke generator

let jokeText = document.getElementById("joke-text");
let generateJoke = document.getElementById("generate-btn");
const jokeUrl = "https://official-joke-api.appspot.com/jokes/random";
let btnDisable = false;

function disableBtn() {
  if (!btnDisable) {
    generateJoke.disabled = true;
    btnDisable = true;
    generateJoke.style.backgroundColor = "gray";
    generateJoke.style.transform = "translateY(-10px)";
    generateJoke.style.transition = "1s ease";
    setTimeout(function () {
      generateJoke.disabled = false;
      btnDisable = false;
      generateJoke.style.backgroundColor = "";
      generateJoke.style.transform = "";
      generateJoke.style.transition = "1s ease";
    }, 3000);
  }
}

generateJoke.addEventListener("click", function () {
  fetch(jokeUrl)
    .then(function (feedback) {
      return feedback.json();
    })
    .then(function (data) {
      jokeText.textContent = data.setup;
      setTimeout(function () {
        jokeText.innerHTML = `${data.setup} <br>${data.punchline}😂`;
      }, 2500);
    })
    .catch(function (error) {
      jokeText.textContent = "Failure to fetch joke, try again later.";
      console.error("Error fetching joke:", error);
    });
  disableBtn();
});
