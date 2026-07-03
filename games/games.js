document.addEventListener("DOMContentLoaded", () => {

  // 👤 Player Name
  let name = localStorage.getItem("playerName");

  if(!name){
    name = "Player" + Math.floor(Math.random()*100);
    localStorage.setItem("playerName", name);
  }

  document.getElementById("playerName").innerText = "Hi, " + name + " 👋";

  // 🔥 DOT INDICATOR
  const slider = document.querySelector(".slider");
  const dots = document.querySelectorAll(".dots span");

  slider.addEventListener("scroll", () => {
    let index = Math.round(slider.scrollLeft / window.innerWidth);

    dots.forEach(dot => dot.classList.remove("active"));

    if(dots[index]){
      dots[index].classList.add("active");
    }
  });

});


// 🔥 TAB BUTTONs (GLOBAL)
function goSlide(index){
  const slider = document.querySelector(".slider");
  const width = window.innerWidth;

  slider.scrollTo({
    left: width * index,
    behavior: "smooth"
  });

  updateActive(index);
}

function updateActive(i){
  const btns = document.querySelectorAll(".tabs button");

  btns.forEach(btn => btn.classList.remove("active"));
  btns[i].classList.add("active");
}