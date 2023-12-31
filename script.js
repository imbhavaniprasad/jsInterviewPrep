const box = document.querySelectorAll(".item");
const winner = document.getElementById("winner");
let playerA = true;
let playerB = false;
let fillCount = 0;
box.forEach((item, idx) => {
  item.addEventListener("click", function (e) {
    if (playerA) {
      item.innerHTML = "<b>X</b>"
      playerA = false;
      playerB = true;
    }
    else {
      item.innerHTML = "<b>O</b>";
      playerB = false;
      playerA = true;
    }
    ++fillCount;
    checkWinner();
  })
})

const checkWinner = () => {
  console.log(fillCount)
  let check = playerA ? "OOO" : "XXX"
  if ([box[0].textContent, box[1].textContent, box[2].textContent].join("") == check || [box[0].textContent, box[4].textContent, box[8].textContent].join("") == check
    || [box[2].textContent, box[4].textContent, box[6].textContent].join("") == check || [box[0].textContent, box[3].textContent, box[6].textContent].join("") == check
    || [box[2].textContent, box[5].textContent, box[8].textContent].join("") == check || [box[3].textContent, box[4].textContent, box[5].textContent].join("") == check
    || [box[6].textContent, box[7].textContent, box[8].textContent].join("") == check || [box[1].textContent, box[4].textContent, box[7].textContent].join("") == "XXX") {
    winner.textContent = `Player ${playerA ? "B" : "A"} Wins`
    resetGame();
  }
  else if (fillCount == 9) {
    winner.textContent = "Resetting"
    resetGame();
  }
}
const resetGame = () => {
  setTimeout(() => {
    box.forEach((item, idx) => {
      item.innerHTML = "";
      winner.textContent = "Winner is..."
    })
  }, 2000);
}