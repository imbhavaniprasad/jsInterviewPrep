const clickBtn = document.getElementById("click");
const popupContainerEl = document.querySelector(".popup-container");
const container = document.querySelector(".container")
const closeBtn = document.querySelector(".close-icon");
clickBtn.addEventListener("click", () => {
  container.classList.add("active")
  popupContainerEl.classList.remove("active")
})

closeBtn.addEventListener("click", () => {
  container.classList.remove("active")
  popupContainerEl.classList.add("active")
})