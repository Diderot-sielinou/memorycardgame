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
          (document.querySelectorAll(".boxopen")[0].innerHTML ==
            document.querySelectorAll(".boxopen")[1].innerHTML)
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

// document.querySelectorAll(".item").forEach((Item)=>{
//   Item.addEventListener("click",()=>{
//     Item.classList.add("boxopen")
//     console.log("ad")

//   })
// })
