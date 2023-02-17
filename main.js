let select = document.querySelector("select");
let lvl = document.querySelector(".lvl");
let sec = document.querySelector(".sec");
let timeOut = document.querySelector(".timeOut");
let mainBtn = document.querySelector("button");
let mainInp = document.querySelector("input");
let allWords = document.querySelector(".all-words");
let word = document.querySelector(".word");
let begin = document.querySelector(".begin");
let arrayWords = [
  "zain",
  "ahmed",
  "ali",
  "ibrahim",
  "rawan",
  "mostafa",
  "zeina",
  "congratulations",
  "rayan",
  "ismaily",
  "mahmoud",
  "mohamed",
  "abdelkader",
  "abdelaziz",
  "cristiano",
  "programming",
  "encapsulation",
];
let endscore = (document.querySelector(".end").innerHTML = arrayWords.length);
let tmp;
select.onchange = () => {
  let timeLeft = select.value;
  tmp = select.value;
  if (timeLeft == 3) {
    lvl.innerHTML = "hard";
  } else if (timeLeft == 4) {
    lvl.innerHTML = "normal";
  } else {
    lvl.innerHTML = "easy";
  }
  sec.innerHTML = timeLeft;
  timeOut.innerHTML = timeLeft;
  document.querySelector(".div").style.display = "none";
};

mainInp.onpaste = () => {
  return false;
};
mainBtn.addEventListener("click", () => {
  mainBtn.remove();
  mainInp.focus();
  genWords();
});

function genWords() {
  // get random ele of array
  let randomEl = arrayWords[Math.floor(Math.random() * arrayWords.length)];

  //   get the index of ele
  let Elindex = arrayWords.indexOf(randomEl);
  //   del ele from array
  let delEl = arrayWords.splice(Elindex, 1);
  //   add the the word to their place
  word.innerHTML = randomEl;
  //   showing the all ele of array
  allWords.innerHTML = "";

  for (let i = 0; i < arrayWords.length; i++) {
    allWords.innerHTML += `<div>${arrayWords[i]}</div>`;
  }
  timing();
}
function timing() {
  timeOut.innerHTML = tmp;
  let start = setInterval(() => {
    timeOut.textContent--;
    if (timeOut.innerHTML == "0") {
      clearInterval(start);
      if (word.innerHTML.toLowerCase() == mainInp.value.toLowerCase()) {
        mainInp.value = "";
        begin.textContent++;
        if (arrayWords.length > 0) {
          genWords();
        } else {
          document.querySelector(".finish").innerHTML = "Winner";
          ddocument.querySelector(".finish").style.color = "green";
        }
      } else {
        document.querySelector(".finish").innerHTML = "Game Over";
      }
    }
  }, 1000);
}
