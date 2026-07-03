
let feedbackMode = null;

function getUserId(){
  let id = localStorage.getItem("userId");

  if(!id){
    id = "user_" + Math.random().toString(36).substr(2,9);
    localStorage.setItem("userId", id);
  }

  return id;
}

function escapeHTML(str){
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// RANDOM
function pick(arr){
  if(!arr || arr.length === 0) return "";
  return arr[Math.floor(Math.random() * arr.length)];
}


// (NEW CODE)

function typeMessage(text, delay = 20){
  let chat = document.getElementById("chatBox");

  let wrapper = document.createElement("div");

let div = document.createElement("div");
div.className = "bot-msg";

wrapper.appendChild(div);
chat.appendChild(wrapper);

  let i = 0;

  let interval = setInterval(()=>{
    div.innerHTML += text.charAt(i);
    i++;
    chat.scrollTop = chat.scrollHeight;

    if(i >= text.length){
      clearInterval(interval);

    }
  }, delay);
}
function sendBotSequence(messages){
  let delay = 0;

  messages.forEach((msg, index)=>{

    setTimeout(()=>{
      typeMessage(msg);

      // 🔥 ONLY LAST MESSAGE er por feedback
      if(index === messages.length - 1){

        setTimeout(()=>{

          let chat = document.getElementById("chatBox");

          let fb = addInlineFeedback();
          chat.appendChild(fb);

          chat.scrollTop = chat.scrollHeight;

        }, 800);

      }

    }, delay);

    delay += 1200;
  });
}


function showOptions(options){
  let chat = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.className = "bot-msg";

  options.forEach(opt=>{
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.style.margin = "5px";

 btn.onclick = ()=>{
  if(opt === "Join Us"){
    openForm();
  } 
  else if(opt === "Submit Voice"){
    openVoiceForm();
  }
  else if(opt === "Analytics Service"){   //  ADD THIS
    window.location.href = "services.html";
  }
  else{
    document.getElementById("userInput").value = opt;
    sendMsg();
  }
};

    div.appendChild(btn);
  });

  chat.appendChild(div);
}

// OPEN / CLOSE
function openAI(){
  let popup = document.getElementById("aiPopup");
  if(popup) popup.style.display = "flex";
}

function closeAI(){
  let popup = document.getElementById("aiPopup");
  if(popup) popup.style.display = "none";
}

// NAME EXTRACT
function extractName(msg){
  msg = msg.toLowerCase().trim();

  //  reject cases
  if(
    msg.includes("not") ||
    msg.includes("wrong") ||
    msg.includes("no ") ||
    msg.includes("name is not")
  ){
    return null;
  }

  //  patterns
  let patterns = ["my name is","i am","i'm","im","call me"];

  for(let p of patterns){
    if(msg.includes(p)){
      let name = msg.split(p)[1].trim().split(" ")[0];

      // extra safety
      if(
        name.length > 1 &&
        name !== "not" &&
        name !== "no"
      ){
        return name;
      }
    }
  }

  return null;
}

// INTENT
function getIntent(msg){
  msg = msg.toLowerCase();

  if(/\bhi\b|\bhello\b|\bhey\b/.test(msg)) return "greeting";

  if(msg.includes("how are you") || msg.includes("fine") || msg.includes("good"))
    return "casual";

  if(msg === "yes" || msg === "yeah" || msg === "yep" || msg === "ok")
    return "positive";

  if(msg === "no" || msg === "nope")
    return "negative";

  
  if(msg.includes("submit voice") || msg.includes("raise voice")){
    return "voice";
}
  // CONTACT FIRST
if(
 /\bservices?\b/.test(msg) &&
  /(need|want|take|hire|contact)/.test(msg)
){
  return "contact";
}
// SERVICE SECOND (to avoid conflict with contact intent)
  if(
  /\bservices\b/.test(msg) &&
  !/(need|want|take|hire|contact)/.test(msg)
){
  return "services";
}

  if(msg.includes("detail")) return "details";

  if(msg.includes("about") || msg.includes("what is this") || msg.includes("why"))

    return "about";

  //  AITTS FULL FORM
  if(
    msg.includes("aitts full form") ||
    msg.includes("full form of aitts") ||
    msg.includes("what is aitts") ||
    msg.includes("aitts means") ||
    msg.includes("aitts ki")
  ){
    return "aitts";
  }

  if(msg.includes("how it works")) return "process";



  //NEW INTENTS

  if(
  msg.includes("join") ||
  msg.includes("register") ||
  msg.includes("sign up") ||
  msg.includes("become member")
){
  return "join";
}
  
  if(msg.includes("mission") || msg.includes("goal")) return "mission";


  if(msg.includes("trending issue") || msg.includes("trending"))
  return "trending";

  

  // CREATOR
 if(
  msg.includes("who") &&
  (msg.includes("made") || msg.includes("created") || msg.includes("built")) &&
  (msg.includes("you") || msg.includes("aitts"))
){
  return "creator";
}

  return "fallback";
}

// FEEDBACK
function handleMiniFeedback(type){

  feedbackMode = type;

  if(type === "good"){
    sendBotSequence([
      "Glad it helped 😄",
      "What did you like the most?"
    ]);
  } else {
    sendBotSequence([
      "Sorry about that 😔",
      "What went wrong?"
    ]);
  }
}

function addInlineFeedback(){

  let chat = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.className = "feedback-inline";

 div.innerHTML = `
  <span onclick="handleMiniFeedback('good')" class="fb-icon" title="Like">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
  </span>
  <span onclick="handleMiniFeedback('bad')" class="fb-icon" title="Dislike">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
    </svg>
  </span>
`;
chat.scrollTop = chat.scrollHeight;
return div;
}
// MAIN CHATBOT
function sendMsg(){


  let input = document.getElementById("userInput");
  let chat = document.getElementById("chatBox");

  if(!input || !chat) return;

  let text = input.value.trim();
  if(text === "") return;

// USER MESSAGE FIRST
chat.innerHTML += `<div class="user-msg">${text}</div>`;
input.value = "";

// FEEDBACK SAVE
if(feedbackMode){

  if(window.db){
    window.db.collection("feedback").add({
      type: feedbackMode,
      message: text,
      time: new Date().toLocaleString()
    })
    .then(()=> console.log("✅ saved"))
    .catch(err => console.error(err));
  }

  typeMessage("Thanks for your feedback 💛");
  setTimeout(()=>{
    typeMessage("We’ll use it to improve!");
  },800);

  feedbackMode = null;
  return;
}


  let name = extractName(text);

  if(name){
  localStorage.setItem("userName", name);

  sendBotSequence([
    `${pick(AI_DATA.nameSaved)}, ${name} 😊`,
    "I’ll remember your name!",
    pick(AI_DATA.loopQuestions)
  ]);

  return;

  
}

  let intent = getIntent(text);
  let reply = "";

  if(intent === "aitts"){
  sendBotSequence([
    pick(AI_DATA.aittsFullForm),
    pick(AI_DATA.loopQuestions)
  ]);
  return;
}

if(intent === "mission"){
  sendBotSequence([
    pick(AI_DATA.mission),
    pick(AI_DATA.loopQuestions)
  ]);
  return;
}

if(intent === "join"){
  sendBotSequence([
    pick(AI_DATA.joinInfo),
    "Click the Join Us button to open the form.",
    pick(AI_DATA.loopQuestions)
  ]);

  //  ADD THIS
  setTimeout(()=>{
    showOptions(["Join Us","Submit Voice","About"]);
  },1200);

  return;
}

// services page info
  if(intent === "contact"){
  sendBotSequence([
    "To take our services, please go to the Analytics Service page.",
    "Click on 'Analytics Service' from the top menu.",
    "There you will find the form — fill it and our team will contact you."
  ]);

  setTimeout(()=>{
    showOptions(["Analytics Service","Join Us","About"]);
  },1200);

  return;
}
if(intent === "voice"){
  sendBotSequence([
    pick(AI_DATA.voiceGuide),
    pick(AI_DATA.loopQuestions)
  ]);
  return;
}

if(intent === "trending"){
  sendBotSequence([
    pick(AI_DATA.trendingInfo),
    pick(AI_DATA.loopQuestions)
  ]);
  return;
}

  if(intent === "creator"){

  if(text.toLowerCase().includes("aitts")){
    sendBotSequence([
      "AITTS was created by a dedicated team to give people a voice 🇮🇳",
      "It’s a platform built to highlight real issues and connect people.",
      pick(AI_DATA.loopQuestions)
    ]);
  } else {
    sendBotSequence([
      "I was created by the AITTS team 🚀 to guide and support people like you 😊",
      "I'm here to help, listen, and make things easier for you!",
      pick(AI_DATA.loopQuestions)
    ]);
  }

  return;
}

  if(intent === "greeting"){

  let storedName = localStorage.getItem("userName");

  if(storedName){
    sendBotSequence([
      `Hello ${storedName} 👋`,
      pick(AI_DATA.loopQuestions)
    ]);

    // ADD THIS
    setTimeout(()=>{
      showOptions(["Services","About","Join Us"]);
    },800);

  } else {
    sendBotSequence([
      pick(AI_DATA.greeting)
    ]);

    setTimeout(()=>{
      showOptions(["Services","About","Join Us"]);
    },800);
  }

  return;
}


  else if(intent === "casual"){
    reply = pick(AI_DATA.casual);
  }

  else if(intent === "services"){
    reply = AI_DATA.services.join("\n");
  }

  else if(intent === "details"){
    reply = AI_DATA.serviceDetails.join("\n");
  }

  else if(intent === "about"){
    reply = AI_DATA.aboutSite.join("\n");
  }

  else if(intent === "process"){
    reply = AI_DATA.howItWorks.join("\n");
  }

  else if(intent === "form"){
    reply = AI_DATA.formGuide.join("\n");
  }

  else if(intent === "positive"){
    reply = "Great. Tell me what type of help you need.";
  }

  else if(intent === "negative"){
    reply = "No problem. Let me know what you are looking for.";
  }

  else{
    reply = pick(AI_DATA.fallback);
  }

  let storedName = localStorage.getItem("userName");
  if(storedName){
    reply = storedName + ", " + reply;
  }

 sendBotSequence([
  reply,
  pick(AI_DATA.loopQuestions)
]);


}

// READ MORE / LESS FUNCTION
function toggleRead(btn, fullText){

  let card = btn.closest(".voice-card") || btn.closest(".trending-box");

  if(!card){
    console.log("❌ card not found");
    return;
  }

  let p = card.querySelector(".post-text");

  // fallback (important)
  if(!p){
    p = btn.parentElement.querySelector(".post-text");
  }

  if(!p){
    console.log("❌ text element not found");
    return;
  }

  if(btn.innerText.includes("More")){
    p.innerText = fullText;
    btn.innerText = "Read Less ←";
  } else {
    p.innerText = fullText.substring(0,120) + "...";
    btn.innerText = "Read More →";
  }
}

// ENTER
document.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    let input = document.getElementById("userInput");
    if(document.activeElement === input){
      e.preventDefault();
      sendMsg();
    }
  }
});

// CHAT SIZE
let isMinimized = false;

function toggleSize(){
  let chat = document.getElementById("aiBox");

  if(!chat) return;

  if(!isMinimized){
    chat.classList.add("minimized");
    isMinimized = true;
  } else {
    chat.classList.remove("minimized");
    isMinimized = false;
  }
}

//  POSTS FROM BACKEND (IMPORTANT)
async function loadPosts(){

  const container = document.getElementById("posts");
  if(!container) return;

  container.innerHTML = "<p>Loading posts...</p>";

  try{

    // Firebase (approved posts)
    let firebasePosts = [];

    let snap = await db
  .collection("approvedPosts")
  .orderBy("createdAt", "desc")
  .get();

    snap.forEach(doc=>{
  let p = doc.data();

  firebasePosts.push({
  id: doc.id,
  text: p.problem,
  name: p.name,
  city: p.city,
  likes: p.likes || 0,
  supports: p.supports || 0,
  likedBy: p.likedBy || {},
  supportedBy: p.supportedBy || {},
  source: "firebase"
});
});


    // 3. Merge (firebase first)
    let allPosts = firebasePosts;

    // CREATE TRENDING COPY (DO NOT TOUCH LEFT SIDE)
let trendingPosts = [...allPosts];

// SORT ONLY FOR TRENDING
trendingPosts.sort((a, b) => {
  return (b.likes + b.supports) - (a.likes + a.supports);
});

// TOP POST
if(trendingPosts.length > 0){

  let top = trendingPosts[0];

  let box = document.getElementById("trendingBox");

if(box){
  box.innerHTML = `
    <p>
      <b>${top.name} (${top.city})</b>
    </p>

    <p class="post-text">
      ${(top.text || "").substring(0,200)}...
    </p>

    <span class="read-btn" onclick="toggleRead(this, \`${top.text || ""}\`)">
      Read More →
    </span>

    <div style="margin-top:10px;">
      ❤️ ${top.likes || 0} &nbsp; ⭐ ${top.supports || 0}
    </div>
  `;
}
}


    //  Only 3 show
    let visiblePosts = allPosts.slice(0,3);

    container.innerHTML = "";

    visiblePosts.forEach(post=>{

      const safeText = post.text || "";
      const shortText = safeText.substring(0,120);

      container.innerHTML += `
  <div class="voice-card">

    <h4>${(post.text || "").substring(0,60)}...</h4>

    <div class="location">
      <span class="name">👤 ${post.name}</span>
      <span class="dot">•</span>
      <span class="city">📍 ${post.city}</span>
    </div>

    <p class="post-text">
  ${shortText}...
</p>

<span class="read-btn" onclick="toggleRead(this, \`${safeText}\`)">
  Read More →
</span>

<div class="actions">

  <span id="like-${post.id}" class="like-btn" onclick="likePost('${post.id}')">
    ❤️ Like ${post.likes || 0}
  </span>

  <span id="support-${post.id}" class="support-btn" onclick="supportPost('${post.id}')">
    ⭐ Support ${post.supports || 0}
  </span>

</div>

  </div>
`;

const userId = getUserId();

// LIKE ACTIVE
if(post.likedBy && post.likedBy[userId]){
  setTimeout(()=>{
    document.getElementById(`like-${post.id}`)?.classList.add("active-like");
  },10);
}

// SUPPORT ACTIVE
if(post.supportedBy && post.supportedBy[userId]){
  setTimeout(()=>{
    document.getElementById(`support-${post.id}`)?.classList.add("active-support");
  },10);
}
    });

    // store for load more
    window.ALL_POSTS = allPosts;

    if(allPosts.length > 3){
      container.innerHTML += `<button onclick="loadMore()">Load More</button>`;
    }

  } catch(err){

    console.error("Fetch error:", err);

    // USER FRIENDLY ERROR
    container.innerHTML = `
      <p style="color:red;">
        ⚠️ Unable to load posts. Please try again later.
      </p>
    `;
  }
}


// CALL
window.addEventListener("load", ()=>{
  loadPosts();
});
let count = 3;
let expanded = false;

function loadMore(){

  const container = document.getElementById("posts");

  if(!expanded){
    count = window.ALL_POSTS.length; // show all
    expanded = true;
  } else {
    count = 3; // back to small
    expanded = false;
  }

  container.innerHTML = "";

  let posts = window.ALL_POSTS.slice(0, count);

  posts.forEach(post=>{

    const safeText = post.text || "";
    const shortText = safeText.substring(0,120);

   container.innerHTML += `
  <div class="voice-card">

    <h3>${(post.text || "").substring(0,60)}...</h3>

    <div class="location">
       <span class="name">👤 ${post.name}</span>
       <span class="dot">•</span>
       <span class="city">📍 ${post.city}</span>
    </div>

    <p class="post-text">
      ${shortText}...
    </p>

    <span class="read-btn" onclick="toggleRead(this, \`${safeText}\`)">
      Read More →
    </span>

    <div class="actions">

      <span id="like-${post.id}" class="like-btn" onclick="likePost('${post.id}')">
        ❤️ Like ${post.likes || 0}
      </span>

      <span id="support-${post.id}" class="support-btn" onclick="supportPost('${post.id}')">
        ⭐ Support ${post.supports || 0}
      </span>

    </div>

  </div>
`;

const userId = getUserId();

// LIKE ACTIVE
if(post.likedBy && post.likedBy[userId]){
  setTimeout(()=>{
    document.getElementById(`like-${post.id}`)?.classList.add("active-like");
  },10);
}

// SUPPORT ACTIVE
if(post.supportedBy && post.supportedBy[userId]){
  setTimeout(()=>{
    document.getElementById(`support-${post.id}`)?.classList.add("active-support");
  },10);
}
  });

  // Button text change
  if(window.ALL_POSTS.length > 3){
    container.innerHTML += `
      <button onclick="loadMore()">
        ${expanded ? "Show Less" : "Load More"}
      </button>
    `;
  }
}

async function likePost(postId){

  const userId = getUserId();
  const ref = db.collection("approvedPosts").doc(postId);

  const doc = await ref.get();
  if(!doc.exists) return;

  const data = doc.data() || {};

  let likedBy = data.likedBy || {};
  let likes = data.likes || 0;

  if(likedBy[userId]){
    delete likedBy[userId];
    likes--;
  } else {
    likedBy[userId] = true;
    likes++;
  }

  if(likes < 0) likes = 0;

  await ref.update({
    likes: likes,
    likedBy: likedBy
  });

  // UI update
  const btn = document.getElementById(`like-${postId}`);
  if(btn){
    btn.innerText = `❤️ Like ${likes}`;

    if(likedBy[userId]){
      btn.classList.add("active-like");
    } else {
      btn.classList.remove("active-like");
    }
  }
}




async function supportPost(postId){

  const userId = getUserId();
  const ref = db.collection("approvedPosts").doc(postId);

  await db.runTransaction(async (transaction)=>{

    const doc = await transaction.get(ref);

if(!doc.exists) return;

const data = doc.data() || {};

    let supportedBy = data.supportedBy || {};
    let supports = data.supports || 0;

    if(supportedBy[userId]){
      // 🔴 UNSUPPORT
      delete supportedBy[userId];
      supports--;
    } else {
      // 🟢 SUPPORT
      supportedBy[userId] = true;
      supports++;
    }
    if(supports < 0) supports = 0;

    transaction.update(ref,{
      supports: supports,
      supportedBy: supportedBy
    });

    // UI UPDATE 
    const btn = document.getElementById(`support-${postId}`);

    if(btn){
      btn.innerText = `⭐ Support ${supports}`;

      if(supportedBy[userId]){
        btn.classList.add("active-support");   // color change
      } else {
        btn.classList.remove("active-support");
      }
    }

  });

}


// MOUSE (Laptop)
document.addEventListener("DOMContentLoaded", () => {

  let chat = document.getElementById("aiBox");
  if(!chat) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // MOUSE
  chat.addEventListener("mousedown", (e) => {
    isDragging = true;
    chat.classList.add("dragging");

    offsetX = e.clientX - chat.offsetLeft;
    offsetY = e.clientY - chat.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    chat.style.left = (e.clientX - offsetX) + "px";
    chat.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    chat.classList.remove("dragging");
  });

  // TOUCH
  chat.addEventListener("touchstart", (e) => {
    isDragging = true;

    offsetX = e.touches[0].clientX - chat.offsetLeft;
    offsetY = e.touches[0].clientY - chat.offsetTop;
  });

  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    let x = e.clientX - offsetX;
let y = e.clientY - offsetY;

// limit inside screen
x = Math.max(0, Math.min(window.innerWidth - chat.offsetWidth, x));
y = Math.max(0, Math.min(window.innerHeight - chat.offsetHeight, y));

chat.style.left = x + "px";
chat.style.top = y + "px";
  });

  document.addEventListener("touchend", () => {
    isDragging = false;
  });

});


