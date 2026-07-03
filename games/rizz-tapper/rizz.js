let score = 0;
let timeLeft = 30;
let gameInterval;
let spawnInterval;
let speed = 700;

let level = 1;
let target = 100;

// 🔥 EMOJIS
const EMOJIS = [
  {icon:"❤️", score:10},
  {icon:"🔥", score:15},
  {icon:"😍", score:12},
  {icon:"⚡", score:20},

  {icon:"💔", score:-5},
  {icon:"☠️", score:-15},

  {icon:"✨", score:25}
];

// START GAME
function startGame(){

  clearInterval(gameInterval);
  clearInterval(spawnInterval);

  score = 0;
  timeLeft = 30;
  speed = 700;
  level = 1;
  target = 100;

  updateUI();

  document.getElementById("result").classList.add("hidden");

  const gameArea = document.getElementById("gameArea");
  gameArea.innerHTML = "";

  gameInterval = setInterval(()=>{
    timeLeft--;
    updateUI();

    if(timeLeft <= 0){
      endGame();
      return;
    }

  },1000);

  resetSpawn();
}

// RESET SPAWN
function resetSpawn(){
  clearInterval(spawnInterval);
  spawnInterval = setInterval(spawnEmoji, speed);
}

// UPDATE UI
function updateUI(){
  document.getElementById("score").innerText = "Score: " + score;
  document.getElementById("timer").innerText = "⏱️ " + timeLeft;
  document.getElementById("level").innerText = "Lv " + level + " 🎯 " + target;
}

// SPAWN
function spawnEmoji(){

  const gameArea = document.getElementById("gameArea");

  let random = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

  let el = document.createElement("div");
  el.className = "emoji";
  el.innerText = random.icon;

  let padding = 50;

  let x = Math.random() * (gameArea.clientWidth - padding);
  let y = Math.random() * (gameArea.clientHeight - padding);

  el.style.left = x + "px";
  el.style.top = y + "px";

  el.onclick = ()=>{

    score += random.score;

    //  LEVEL UP SYSTEM
    if(score >= target){
      level++;
      target += 150;
      speed -= 100;
      if(speed < 200) speed = 200;

      timeLeft += 5;

      resetSpawn();

      alert("🔥 LEVEL UP! Level " + level);
    }

    updateUI();
    el.remove();
  };

  gameArea.appendChild(el);

  setTimeout(()=>{
    el.remove();
  },1200);
}

// END GAME
function endGame(){
  clearInterval(gameInterval);
  clearInterval(spawnInterval);

  document.getElementById("finalScore").innerText =
    "Final Score: " + score + " | Level " + level;

  document.getElementById("result").classList.remove("hidden");
}

// AUTO START
startGame();