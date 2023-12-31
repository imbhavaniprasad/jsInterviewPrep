const emojiEl = document.querySelectorAll(".far")
const starEl = document.querySelectorAll(".fa-star");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "voilet"];

starEl.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  })
})

const updateRating = (index) => {
  starEl.forEach((star, idx) => {
    if (idx <= index) {
      star.classList.add("active");
    }
    else star.classList.remove("active");
  })

  emojiEl.forEach((emoji, idx) => {
    emoji.style.transform = `translateX(-${index * 50}px)`;
    emoji.style.color = colorsArray[idx];
  })
}