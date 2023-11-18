let button = document.querySelectorAll("button");
let display = document.querySelector(".display-paragraphs");
let inputarea = document.querySelector("textarea");
let timer = document.querySelector(".timer");
let details = document.querySelectorAll("span");
let maincontainer = document.querySelector(".main");
let info = document.querySelectorAll("p");
const paragraph = [
  "Scolding is something common in student life. Being a naughty boy, I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day, I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching, I was completely engrossed in reading that book. Nancy Drew was caught in the trap laid by some smugglers and it was then when I felt a light tap on my bent head. The teacher had caught me red handed. She scolded me then and there and insulted me in front of the whole class. I was embarrassed. My cheeks burned being guilty conscious. When the class was over, I went to the teacher to apologize. When she saw that I had realized my mistake, she cooled down and then told me in a very kind manner how disheartening it was when she found any student not paying attention. I was genuinely sorry and promised to myself never to commit such a mistake again.",
  "Recently, an exhibition 'Building A New India' was held in the capital. It was organized by the Ministry of Information and Broadcasting, Government of India. The exhibition was set up in the Triveni Kala Sangam. The chief exhibits were photographs, novels, some sculptures by Indian modern artists presenting Indian cultural inheritance. First of all, I visited the general section of the exhibition where different charts and photographs depicting India's development in various fields were set. Most impressive photographs among these were those showing India's nuclear development. The second section dealt with India's magnificent historical background. I was fascinated by the pictures of Mohanjodaro excavation. Then I saw the most beautiful and colorful section of the exhibition i.e. the cultural section. It consisted of paintings, sculptures, photographs etc. The Rajasthani and Gujarati paintings were very colourful and attractive. This exhibition, inaugurated by the Prime Minister, lasted for a week. It proved to be of great educational value. It brushed up my knowledge about India as my motherland. It enhanced my respect for my great country, India. I would very much appreciate if the Indian government organized some more such exhibitions.",
  "Days are not of equal value in one's life. Some bring happiness while others bring sadness. Sadness and happiness both are equally important to man's life, since they are the two sides of a coin. As we cannot forget the happiest day, we are unable to forget the saddest day of our life too. The saddest day of my life was the Diwali Day. Diwali is considered to be a happy festival and till last Diwali, it was my favorite festival. On last Diwali, my sister, my brother and I were busy lighting the fireworks. I was holding a 'fuljhari' in my hand and unfortunately my younger brother, who was standing just beside me, had a cracker in his hand. This cracker caught fire and a very loud explosion was heard which shook my sister and me. After that, we all could think of nothing else than blood stained cotton, bandage, dettol etc. My cousin took my brother to the doctor where he got 14 stitches in his forefinger and thumb. But at home, everybody kept cursing and blaming me for the mishap. That night, I could not sleep and I cried a lot. For next few days, I bore the burden of this blame for being responsible for this unfortunate incident. I felt deeply guilty conscious which I was able to overcome after a long time.",
  "Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never confine himself to his schoolbooks only. He should not miss the pleasure locked in the classics, poetry, drama, history, philosophy etc. We can derive benefit from other's experiences with the help of books. The various sufferings, endurance and joy described in books enable us to have a closer look at human life. They also inspire us to face the hardships of life courageously. Nowadays there are innumerable books and time is scarce. So we should read only the best and the greatest among them. With the help of books we shall be able to make our thinking mature and our life more meaningful and worthwhile.",
  "A teacher is called builder of the nation. The profession of teaching needs men and women with qualities of head and heart. There are many teachers in our school and a large number of teachers among them are highly qualified. I have great respect for all of them. Yet I have a special liking for Miss Y. Miss Y is a woman of great principles. She is jewel among all the teachers. Almost all the students respect her. She teaches us English. She is quite at home in this subject. She takes keen interest in teaching students. Simple living and high thinking is her motto. She is a woman of sweet temper and is always ready to help in difficulties. She treats us like her own brothers and sisters. She is an ideal teacher. It is these qualities of head and heart that have endeared Miss Y to the students and teachers alike. She is an ideal teacher in real sense of the word. She is the real model to emulate. May she live as long as there is sweet fragrance in the flowers?",
];
const images = [
  "./assets/image1.jpg",
  "./assets/image 2.jpg",
  "./assets/image 3.jpg",
  "./assets/henry-be-lc7xcWebECc-unsplash.jpg",
  "./assets/image5.jpg",
];
let timelimit = 60;

let timeleft = timelimit;
let timepassed = 0;
let time;
let Totalcharacters = 0;
let accuracy = 0;
let charperminute = 0;
let wordsperminute = 0;
let lastcharacter = "";

inputarea.disabled = true;

inputarea.addEventListener("input", () => {
  inputarea.disabled = false;
  let arrdisplay = display.querySelectorAll("span");

  let inputval = inputarea.value.split("");

  Totalcharacters++;
  // console.log(Totalcharacters);

  let error = 0;

  if (arrdisplay.length === inputval.length) {
    clearInterval(time);
    inputarea.disabled = true;
  }

  arrdisplay.forEach((characterspan, index) => {
    let character = inputval[index];

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
    }
  });

  details[0].textContent = error;

  let correctCharacters = Totalcharacters - error;

  accuracy = (correctCharacters / Totalcharacters) * 100;
  details[3].textContent = Math.round(accuracy);

  // charperminute = Math.round((Totalcharacters / timepassed) * 60);
  // details[2].textContent = charperminute;

  // wordsperminute = Math.round((Totalcharacters / 5 / timepassed) * 60);
  // details[1].textContent = wordsperminute;
});

button[0].addEventListener("click", () => {
  inputarea.disabled = false;

  countdown();
});

function randomparagraph() {
  let random = Math.floor(Math.random() * paragraph.length);

  return random;
}

function gettimer() {
  if (timeleft > 0) {
    timeleft--;
    timepassed++;
    timer.innerText = timeleft;
  } else {
    display.innerText="";
    display.innerText="<--------------------------------------------------Your TIME's Up------------------------------------------------>";
    clearInterval(time);
    inputarea.disabled = true;
    info.forEach((element) => {
      element.style.display = "block";
    });
    charperminute = Math.round(((Totalcharacters / timepassed) * 60));
    details[2].textContent = charperminute;
  
    wordsperminute = Math.round((((Totalcharacters / 5 )/ timepassed) * 60));
    details[1].textContent = wordsperminute;
  }
}

function countdown() {
  time = setInterval(gettimer, 1000);
}

function displayquotes() {
  let p = randomparagraph();
  let para = paragraph[p];

  document.body.style.backgroundImage = `url('${images[p]}')`;

  display.innerHTML = "";
  para.split("").forEach((character) => {
    let displaycharacterspan = document.createElement("span");
    displaycharacterspan.innerText = character;
    display.appendChild(displaycharacterspan);
  });
}
displayquotes();

button[1].addEventListener("click", reset);

function reset() {
  displayquotes();
  clearInterval(time);
  inputarea.disabled = true;
    info.forEach((element) => {
      element.style.display = "none";
    });

  timeleft = timelimit;
  timer.innerText = timeleft;
  timepassed = 0;
  Totalcharacters = 0;
  accuracy = 0;
  charperminute = 0;
  wordsperminute = 0;

  inputarea.value = "";
  inputarea.disabled = true;
  details[0].textContent = 0;
  details[1].textContent = 0;
  details[2].textContent = 0;
  details[3].textContent = 0;
}
