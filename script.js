// joke generator

let jokeText = document.getElementById("joke-text");
let generateJoke = document.getElementById("generate-btn");
const jokeUrl = "https://official-joke-api.appspot.com/jokes/random";
let btnDisable = false;
let randomMsg;
let btnMsg;

const btnMsgArray = [
  "Want another one? Haha.",
  "Hope I made your day! Another one?!",
  "The next one will be way funnier haha!",
  "Did you get it? Haha",
  "Haha! Another one?",
  "Bruh, I'm dead haha. Another one?!",
  "I swear the next one be funnier! Again? ",
  "You’re on a roll! How about one more?",
  "Still up for a laugh? Let’s go!",
  "Craving more? I’ve got you covered!",
  "Don’t stop now, here comes another!",
  "Ready for round two? Let’s do it!",
  "One more for the road? Haha!",
  "Feeling lucky? Try another!",
  "How about another chuckle? Click away!",
  "You’re unstoppable! Here’s another one!",
  "Another one? You’re on fire!",
  "Can’t get enough, huh? Here’s more!",
  "Still laughing? Let’s keep it going!",
  "You’re a comedy machine! More?",
  "The fun never stops! Click for more!",
];

function disableBtn() {
  if (!btnDisable) {
    generateJoke.disabled = true;
    btnDisable = true;
    generateJoke.style.backgroundColor = "#faf2f2";
    generateJoke.style.transform = "translateY(-5px)";
    generateJoke.style.transition = "1s ease";
    generateJoke.style.color = "#faf2f2";
    setTimeout(function () {
      generateJoke.disabled = false;
      btnDisable = false;
      generateJoke.style.backgroundColor = "";
      generateJoke.style.transform = "translateY(0px)";
      generateJoke.style.transition = "1s ease";
      generateJoke.style.color = "";
      randomMsg = Math.floor(Math.random() * btnMsgArray.length);
      btnMsg = btnMsgArray[randomMsg];
      generateJoke.textContent = btnMsg;
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
