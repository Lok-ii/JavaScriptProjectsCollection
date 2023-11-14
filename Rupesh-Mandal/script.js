let button = document.querySelectorAll("button");
let display = document.querySelector(".display-paragraphs");
let inputkeys = document.querySelector("textarea");
let timer = document.querySelector(".timer");
let details = document.querySelectorAll("span");
const paragraph = ["Jai mata di", "jai shree ram", "om sai ram"];

let timeleft = 60;
let time;
let mistakes = 0;
let Totalcharacters=0;

inputkeys.addEventListener("input", () => {
  let arrdisplay = display.querySelectorAll("span");
  let inputval = inputkeys.value.split("");

  Totalcharacters++;
  console.log(Totalcharacters);

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
});

button[0].addEventListener("click", () => {
  let para = randomparagraph();
  // console.log(para);

  display.innerHTML = "";
  para.split("").forEach((character) => {
    let displaycharacterspan = document.createElement("span");
    displaycharacterspan.innerText = character;
    display.appendChild(displaycharacterspan);
    // console.log(display);
  });

  countdown();
});

function randomparagraph() {
  let random = Math.floor(Math.random() * paragraph.length);
  return paragraph[random];
}

function gettimer() {
  if (timeleft > 0) {
    timeleft--;
    timer.innerText = timeleft;
  } else {
    clearInterval(time);
  }
}

function countdown() {
  time = setInterval(gettimer, 1000);
}
