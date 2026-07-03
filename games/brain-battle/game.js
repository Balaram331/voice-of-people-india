let currentQ = 0;
let score = 0;
let timer;
let timeLeft = 10;
let currentRoom = null;

let playerName = localStorage.getItem("playerName");

if(!playerName){
  playerName = "Player" + Math.floor(Math.random()*100);
  localStorage.setItem("playerName", playerName);
}

// SOLO
function startSolo(){
  document.getElementById("modeScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");

  score = 0;
  currentQ = 0;

  loadQuestion();
}

// ================= GAME =================

function loadQuestion(){

  if(currentQ >= QUESTIONS.length){
    endGame();
    return;
  }

  let q = QUESTIONS[currentQ];

  document.getElementById("question").innerText = q.q;
  document.getElementById("score").innerText = "Score: " + score;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt=>{
    let btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;

    btn.onclick = ()=>checkAnswer(opt);

    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function startTimer(){
  timeLeft = 10;
  document.getElementById("timer").innerText = "⏱️ " + timeLeft;

  clearInterval(timer);

  timer = setInterval(()=>{
    timeLeft--;
    document.getElementById("timer").innerText = "⏱️ " + timeLeft;

    if(timeLeft <= 0){
      clearInterval(timer);
      currentQ++;
      loadQuestion();
    }
  },1000);
}

function checkAnswer(ans){
  clearInterval(timer);

  if(ans === QUESTIONS[currentQ].ans){
    score += 10;
  } else {
    score -= 5;
  }

  currentQ++;
  loadQuestion();
}

function endGame(){
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  document.getElementById("finalScore").innerText = "Final Score: " + score;
}

function comingSoon(){

  // remove old if already exists
  const old = document.getElementById("comingBox");
  if(old) old.remove();

  const box = document.createElement("div");
  box.id = "comingBox";

  box.innerHTML = `
    <div class="coming-card">
      <h2>🔥 Battle Mode</h2>
      <p>Coming very soon! Get ready to challenge your friends ⚡</p>
      <button onclick="closeComing()">Got it 😎</button>
    </div>
  `;

  document.body.appendChild(box);
}

// close
function closeComing(){
  document.getElementById("comingBox").remove();
}