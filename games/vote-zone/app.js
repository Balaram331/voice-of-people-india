let globalChecked = false;
let user = JSON.parse(localStorage.getItem("user")) || null;
let currentTeamId = null;



// ================= PROFILE =================

function saveProfile(){

  const name = document.getElementById("name").value.trim();
  const gender = document.getElementById("gender").value;

  if(!name) return alert("Enter name");

  user = { 
    id: Date.now(),
    name,
    gender
  };

  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("profileBox").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("userName").innerText = name;

  loadGlobalLive(); // 🔥 FIXED
}
// ================= NAV =================

function goTeam(){
  window.location.href = "team.html";
}

function goHome(){
  window.location.href = "index.html";
}

// ================= LIVE VOTE =================

function loadGlobalLive(){

  db.collection("globalBattle").doc("battle1").onSnapshot(doc=>{

    let b = doc.data();

    if(!b || !b.active){
      document.getElementById("voteCard").innerHTML = "<p>No live battle now</p>";
      return;
    }

    let html = "";

   let voted = b.voters || [];

b.candidates.forEach(c=>{

  if(voted.includes(user.id)){
    html += `
      <div class="card">
        <h3>${c.name}</h3>
<p>${c.idea}</p>

        <button disabled style="opacity:0.5">✔ Voted</button>
      </div>
    `;
  } else {
    html += `
      <div class="card">
        <h3>${c.name}</h3>
<p>${c.idea}</p>

        <button onclick="voteGlobal('${c.name}')">Vote</button>
      </div>
    `;
  }

});
    document.getElementById("voteCard").innerHTML = html;

  });

}

// ================= CREATE TEAM =================

function createTeam(){

  if(!user || !user.id){
  return alert("User not ready, please refresh or create profile again");
}

  if(!user) return alert("Create profile first");

  const name = document.getElementById("teamName").value.trim();
  const idea = document.getElementById("ideology").value.trim();
  const pass = document.getElementById("password").value.trim();

  if(!name || !idea || !pass) return alert("Fill all fields");

  db.collection("teams").get().then(snapshot=>{

    let already = false;

    snapshot.forEach(doc=>{
      let t = doc.data();
      t.members?.forEach(m=>{
        if(m.id === user.id) already = true;
      });
    });

    if(already) return alert("You already have a team!");

    let code = "T" + Date.now().toString(36);

    db.collection("teams").doc(code).set({
      name,
      ideology: idea,
      password: btoa(pass),
      owner: user.name,
      ownerId: firebase.auth().currentUser.uid,
      members: [user],
      votes: {},
      gameStarted: false
    });

    alert("🔥 Team Created!\nCode: " + code + "\nPassword: " + pass);

    document.getElementById("createSection")?.style.setProperty("display","none");
  });
}

// ================= JOIN TEAM =================

function joinTeam(){

  if(!user) return alert("Create profile first");

  const id = document.getElementById("joinCode").value.trim();
  const pass = document.getElementById("joinPass").value.trim();

  if(!id || !pass) return alert("Enter code & password");

  db.collection("teams").get().then(snapshot=>{

    let already = false;

    snapshot.forEach(doc=>{
      doc.data().members?.forEach(m=>{
        if(m.id === user.id) already = true;
      });
    });

    if(already) return alert("Already in a team!");

    db.collection("teams").doc(id).get().then(doc=>{

      if(!doc.exists) return alert("Invalid team");

      let t = doc.data();

      if(t.gameStarted) return alert("Game already started!");
      if(atob(t.password) !== pass) return alert("Wrong password");
      if(t.members.length >= 4) return alert("Team full");

      currentTeamId = id;

      db.collection("teams").doc(id).update({
        members: firebase.firestore.FieldValue.arrayUnion(user)
      });

      loadMembers(id);
      document.getElementById("createSection")?.style.setProperty("display","none");
    });

  });
}

// ================= LOAD MEMBERS =================

function loadMembers(id){

  db.collection("teams").doc(id).onSnapshot(doc=>{

    // ❌ TEAM DELETE HANDLE
    if(!doc.exists){

      alert("⚠️ Team has been deleted!");

      document.getElementById("inTeam")?.classList.add("hidden");
      document.getElementById("noTeam")?.classList.remove("hidden");

      document.getElementById("members").innerHTML = "";
      document.getElementById("pmVote").innerHTML = "";
      document.getElementById("startGame").innerHTML = "";

      currentTeamId = null;

      return;
    }

    let t = doc.data();

    // 🔥 UI SWITCH
    document.getElementById("noTeam")?.classList.add("hidden");
    document.getElementById("inTeam")?.classList.remove("hidden");

    // 👥 MEMBERS
    let html = "";
    let pmHtml = "";

    t.members.forEach(m=>{
      html += `<div class="card">${m.name}</div>`;
      pmHtml += `<button onclick="votePM('${id}','${m.name}')">${m.name}</button>`;
    });

    document.getElementById("members").innerHTML = html;
    document.getElementById("pmVote").innerHTML = pmHtml;

    const startDiv = document.getElementById("startGame");

    if(startDiv){

      let buttons = "";

      // 🔥 GAME START → redirect
      if(t.gameStarted){

        if(window.location.pathname.includes("team.html")){
          window.location.href = "vote.html?team=" + id;
        }

        return;
      }

      // ✅ OWNER + 2+ MEMBERS
      if(t.members.length >= 2 && t.ownerId === firebase.auth().currentUser.uid){

        buttons += `
          <button onclick="startGame('${id}')">
            🚀 Start Game
          </button>
        `;
      }

      // ❗ OWNER but less players
      else if(t.ownerId === firebase.auth().currentUser.uid){
        buttons += `<p>Need at least 2 players</p>`;
      }

      // 👥 non-owner
      else{
        buttons += `<p>Waiting for owner...</p>`;
      }

      // ❌ DELETE (owner only)
      if(t.ownerId === firebase.auth().currentUser.uid){
        buttons += `
          <button onclick="deleteTeam('${id}')">
            ❌ Delete Team
          </button>
        `;
      }

      startDiv.innerHTML = buttons;
    }

  });

}

// ================= START GAME =================

function startGame(teamId){

  db.collection("teams").doc(teamId).update({
    gameStarted: true,
    votes: {},
    votedUsers: [] // 🔥 reset voters
  });

  alert("Game Started 🚀");
}

// ================= LOAD MY TEAM =================

function loadMyTeam(){

  if(!user) return;

  db.collection("teams").get().then(snapshot=>{

    let found = false;

    snapshot.forEach(doc=>{

      let t = doc.data();

      if(!t.members) return;

      t.members.forEach(m=>{
        if(m.id === user.id){

          currentTeamId = doc.id;

          document.getElementById("noTeam")?.classList.add("hidden");
          document.getElementById("inTeam")?.classList.remove("hidden");
          document.getElementById("createSection")?.style.setProperty("display","none");

          loadMembers(doc.id);

          found = true;
        }
      });

    });

    // 🔥 IMPORTANT FIX
    if(!found){

      currentTeamId = null; // 🔥 RESET

      document.getElementById("noTeam")?.classList.remove("hidden");
      document.getElementById("inTeam")?.classList.add("hidden");

    }

  });

}

// ================= LOAD TEAMS =================

function loadTeams(){

  db.collection("teams").onSnapshot(snapshot=>{

    let html = "";

    snapshot.forEach(doc=>{

      let t = doc.data();
      let isOwner = user && t.ownerId === firebase.auth().currentUser.uid;

      html += `
        <div class="card ${isOwner ? 'my-team' : ''}">
          <h3>${t.name}</h3>
          <p>${t.ideology}</p>
          <p>${t.members.length}/4 members</p>

          ${isOwner ? `
            <div>
              🔑 ${doc.id}<br>
              🔒 ${t.password}
            </div>` : ""}
        </div>
      `;
    });

    document.getElementById("teams").innerHTML = html;
  });
}


function votePM(teamId, name){

  db.collection("teams").doc(teamId).update({
    ["votes."+name]: firebase.firestore.FieldValue.increment(1)
  });

  alert("Vote given to " + name);
}
// ================= INIT =================

if(document.getElementById("teams")){
  loadTeams();
  loadMyTeam();
}

if(user && document.getElementById("main")){
  document.getElementById("profileBox").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("userName").innerText = user.name;

  loadGlobalLive(); // 
}

// ================= GLOBAL AUTO REDIRECT =================


function startGlobalBattle(){

  db.collection("teams").get().then(snapshot=>{

    let pmList = [];

    snapshot.forEach(doc=>{
      let t = doc.data();
      if(t.pm && t.pm.name){
  pmList.push(t.pm);
}
    });

    if(pmList.length < 2){
      console.log("Not enough PMs");
      return;
    }

    db.collection("globalBattle").doc("battle1").get().then(doc=>{

      let b = doc.data();

      // 🔥 already active thakle abar start korbe na
      if(doc.exists && b?.active){
        console.log("Global already running");
        return;
      }

      // 🔥 START GLOBAL
      db.collection("globalBattle").doc("battle1").set({
        candidates: pmList,
        votes: {},
        voters: [],
        endTime: Date.now() + 30000,
        active: true
      });

      console.log("🔥 Global Battle Started");

    });

  });

}


function voteGlobal(name){

  db.collection("globalBattle").doc("battle1").get().then(doc=>{

    let b = doc.data();

    if((b.voters || []).includes(user.id)){
      return alert("Already voted!");
    }

    db.collection("globalBattle").doc("battle1").update({
      ["votes."+name]: firebase.firestore.FieldValue.increment(1),
      voters: firebase.firestore.FieldValue.arrayUnion(user.id)
    });

  });

}

// ================= AUTO GLOBAL CHECK =================

setInterval(()=>{

  db.collection("teams").get().then(snapshot=>{

    let pmList = [];

    snapshot.forEach(doc=>{
      let t = doc.data();
      if(t.pm){
        pmList.push(t.pm);
      }
    });

    if(pmList.length >= 2){

      db.collection("globalBattle").doc("battle1").get().then(doc=>{

        let b = doc.data();

        if(!doc.exists || !b?.active){
          startGlobalBattle(); // 🔥 AUTO START
        }

      });

    }

  });

}, 5000); // every 5 sec check

function deleteTeam(teamId){

  if(!confirm("Are you sure to delete this team?")) return;

  db.collection("teams").doc(teamId).delete()
  .then(()=>{
    alert("Team deleted successfully!");

    // UI reset
    document.getElementById("inTeam")?.classList.add("hidden");
    document.getElementById("noTeam")?.classList.remove("hidden");

    document.getElementById("members").innerHTML = "";
    document.getElementById("pmVote").innerHTML = "";
    document.getElementById("startGame").innerHTML = "";

    currentTeamId = null;
  })
  .catch(err=>{
    console.error(err);
    alert("Error deleting team");
  });

}