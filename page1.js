
document.addEventListener("DOMContentLoaded", function() {
const openmodal = document.querySelectorAll("#button, #button2, #button3");
const Modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

  
openmodal.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    Modal.style.display = "block";
    e.preventDefault();
  });
});

closeModal.addEventListener('click', function(e) {
  Modal.style.display = "none";
  e.preventDefault();
});

window.addEventListener('click', function(event) {
  if (event.target == Modal) {
    Modal.style.display = "none";
  }
});
});


