let button = document.querySelectorAll("button");
let display = document.querySelector(".display-paragraphs");
let inputarea = document.querySelector("textarea");
let timer = document.querySelector(".timer");
let details = document.querySelectorAll("span");
const paragraph = ["Jai mata di", "jai shree ram", "om sai ram"];

let timelimit = 60;

let timeleft = timelimit;
let timepassed = 0;
let time;
let mistakes = 0;
let Totalcharacters = 0;
let accuracy = 0;
let charperminute = 0;
let wordsperminute = 0;

inputarea.addEventListener("input", () => {
  inputarea.disabled = false;
  let arrdisplay = display.querySelectorAll("span");
  let inputval = inputarea.value.split("");

  Totalcharacters++;
  // console.log(Totalcharacters);

  let error = 0;

  arrdisplay.forEach((characterspan, index) => {
    let character = inputval[index];
    // console.log(character);
    // console.log(characterspan);
    if (character == null) {
      characterspan.classList.remove("correct");
      characterspan.classList.remove("incorrect");
    } else if (character === characterspan.innerText) {
      characterspan.classList.add("correct");
      characterspan.classList.remove("incorrect");
    } else {
      characterspan.classList.remove("correct");
      characterspan.classList.add("incorrect");
      error++;
      // details[0].innerText=mistakes;
    }
  });
  details[0].textContent = error;
  // details[0].innerText=mistakes;
  let correctCharacters = Totalcharacters - error;
  // console.log(correctCharacters);
  accuracy = Math.round((correctCharacters / Totalcharacters) * 100);
  // console.log(accuracy);
  charperminute = Math.round((Totalcharacters / timepassed) * 60);
  // console.log(charperminute);
  wordsperminute = Math.round((Totalcharacters / 5 / timepassed) * 60);
  // console.log(wordsperminute);
});

button[0].addEventListener("click", () => {
  // let para = randomparagraph();
  // // console.log(para);

  // display.innerHTML = "";
  // para.split("").forEach((character) => {
  //   let displaycharacterspan = document.createElement("span");
  //   displaycharacterspan.innerText = character;
  //   display.appendChild(displaycharacterspan);
  //   // console.log(display);
  // });

  countdown();
});

function randomparagraph() {
  let random = Math.floor(Math.random() * paragraph.length);
  return paragraph[random];
}

function gettimer() {
  if (timeleft > 0) {
    timeleft--;
    timepassed++;
    timer.innerText = timeleft;
  } else {
    clearInterval(time);
    inputarea.disabled = true;
  }
}

function countdown() {
  time = setInterval(gettimer, 1000);
}

function displayquotes() {
  let para = randomparagraph();

  display.innerHTML = "";
  para.split("").forEach((character) => {
    let displaycharacterspan = document.createElement("span");
    displaycharacterspan.innerText = character;
    display.appendChild(displaycharacterspan);
    // console.log(display);
  });
}
displayquotes();

button[1].addEventListener("click", reset);

function reset() {
  displayquotes();
  clearInterval(time);
  // timer.innerText=60
  timeleft = timelimit;
  timer.innerText=timeleft;
  timepassed = 0;
  time;
  mistakes = 0;
  Totalcharacters = 0;
  accuracy = 0;
  charperminute = 0;
  wordsperminute = 0;

  inputarea.value="";
}
