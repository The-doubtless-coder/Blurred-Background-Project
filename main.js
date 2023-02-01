const containerEl = document.querySelector(".container");
const containerbtnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");

const timesBtnEl = document.querySelector(".close-icon");

containerbtnEl.addEventListener("click", (event) => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

timesBtnEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});
