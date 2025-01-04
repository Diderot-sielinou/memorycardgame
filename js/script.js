const emojieTab = [
  "🇨🇦",
  "🇨🇦",
  "🇦🇲",
  "🇦🇲",
  "🍺",
  "🍺",
  "👍",
  "👍",
  "💔",
  "💔",
  "😖",
  "😖",
  "😍",
  "😍",
  "🧑‍💻",
  "🧑‍💻",
];
// console.log(emojieTab);
let buton = document.querySelector(".restart");
buton.addEventListener("click", () => window.location.reload());
let newTab = emojieTab.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let item of newTab) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = item;
  box.onclick = () => {
    box.classList.add("boxopen");
    setTimeout(() => {
      if (document.querySelectorAll(".boxopen").length > 1) {
        if (
          document.querySelectorAll(".boxopen")[0].innerHTML ==
          document.querySelectorAll(".boxopen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxopen")[0].classList.add("boxmatch");
          document.querySelectorAll(".boxopen")[1].classList.add("boxmatch");

          document.querySelectorAll(".boxopen")[0].classList.remove("boxopen");
          // document.querySelectorAll(".boxopen")[1].classList.remove("boxopen");

          if (
            document.querySelectorAll(".boxmatch").length == emojieTab.length
          ) {
            alert("you win 👍👍👍👍");
          }
        } else {
          document.querySelectorAll(".boxopen")[1].classList.remove("boxopen");
          document.querySelectorAll(".boxopen")[0].classList.remove("boxopen");
        }
      }
    }, 500);
  };
  document.querySelector(".game").append(box);
}

let timer;
let totalSeconds = 60;
function startCountdown() {
  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      document.querySelector(".chromometre").textContent = "Temps écoulé !";
      changeAfterTimeOver();
      return;
    }

    totalSeconds--;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    document.querySelector(".chromometre").textContent =
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  }, 1000);
}

// fonction pour cache les sections
let isclik = false;
function changeSection() {
  let section1 = document.querySelector(".started");
  let section2 = document.querySelector(".container");
  isclik = !isclik;
  console.log(isclik);
  if (isclik) {
    section1.style.display = "none";
    section2.style.display = "flex";
    startCountdown();
  }
}

function changeAfterTimeOver(){
  let section1 = document.querySelector(".started");
  let section2 = document.querySelector(".container");
  section1.style.display = "flex";
   section2.style.display = "none";
}


document.querySelector(".start-btn").addEventListener("click",changeSection);
