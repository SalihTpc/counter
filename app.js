const allBtns = document.getElementsByTagName("button");
const myResult = document.getElementById("result");

for (const bttn of allBtns) {
  bttn.addEventListener("click", clicker);
}

function clicker(e) {
  let target = e.target;
  if (target.classList[0] === "decrease") {
    myResult.innerHTML = parseInt(myResult.innerHTML) - 1;
  } else if (target.classList[0] === "clear") {
    myResult.innerHTML = 0;
  } else if (target.classList[0] === "increase") {
    myResult.innerHTML = parseInt(myResult.innerHTML) + 1;
  }
}
