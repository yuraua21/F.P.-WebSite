document.addEventListener("DOMContentLoaded", function() {

    const openpopup = document.querySelector(".icon1");
    const Popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
  
     openpopup.addEventListener('click', function(i) {
      Popup.style.display = "block";
      i.preventDefault();
    });
  
    closePopup.addEventListener('click', function(m) {
      Popup.style.display = "none";
      m.preventDefault();
    });
  
    
  
  
  });
  