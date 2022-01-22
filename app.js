const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}
closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    closeModal();
  }
});
