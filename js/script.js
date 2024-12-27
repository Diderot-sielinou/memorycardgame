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
let buton = document.querySelector(".restart")
buton.addEventListener("click",()=>window.location.reload())
let newTab = emojieTab.sort(()=> (Math.random()> 0.5)?2:-1);
for(let item of newTab ){
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = item;
  box.onclick = ()=>{
    box.classList.add("boxopen");
  }
  document.querySelector(".game").append(box)
}

// document.querySelectorAll(".item").forEach((Item)=>{
//   Item.addEventListener("click",()=>{
//     Item.classList.add("boxopen")
//     console.log("ad")


//   })
// })
