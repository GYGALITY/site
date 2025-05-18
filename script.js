document.addEventListener("DOMContentLoaded", function () {
    const popup1 = document.getElementById("popupCard1");
    const popup2 = document.getElementById("popupCard2");
    const btn1 = document.getElementById("getStartedBtn1");
    const btn2 = document.getElementById("getStartedBtn2");
  
    btn1.addEventListener("click", function () {
      popup1.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  
    btn2.addEventListener("click", function () {
      popup2.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });
  
  function closePopup() {
    document.getElementById("popupCard1").classList.add("hidden");
    document.body.style.overflow = "auto";
    document.getElementById("popupCard2").classList.add("hidden");
  }