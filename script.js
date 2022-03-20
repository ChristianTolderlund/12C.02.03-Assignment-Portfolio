window.addEventListener("load", startmain);

function startmain() {
  console.log("start main page");
  document.querySelector(".burger-icon").addEventListener("click", openMenu);
  document.querySelector(".cross-icon").addEventListener("click", closeMenu);
}

function openMenu() {
  console.log("open menu");
  document.querySelector(".mob-menu").classList.remove("close");
  document.querySelector(".mob-menu").classList.add("show");
  document.querySelector(".burger-icon").removeEventListener("click", openMenu);
  document.querySelector(".cross-icon").addEventListener("click", closeMenu);
}
function closeMenu() {
  console.log("close menu");
  document.querySelector(".mob-menu").classList.remove("show");
  document.querySelector(".mob-menu").classList.add("close");
  document.querySelector(".cross-icon").removeEventListener("click", closeMenu);
  document.querySelector(".burger-icon").addEventListener("click", openMenu);
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);