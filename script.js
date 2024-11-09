//Get DOM elements
let openModalBtn = document.getElementById("Opn-modal-btn");
let modal = document.getElementById("modal");
let modalOverlay = document.getElementById("modal-overlay");
let closeBtn1 = document.getElementById("close-btn-1");
let closeBtn2 = document.getElementById("close-btn-2");

//Open Modal
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
});

//Close modal
closeBtn1.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal);

//Function to close modal and overlay
function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}

//Close modal with ESC Key
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

//Close modal is overlay is clicked
modalOverlay.addEventListener("click", closeModal);
