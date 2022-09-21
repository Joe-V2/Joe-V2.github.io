function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBot = reveals[i].getBoundingClientRect().bottom;
      var elementVisible = 5;
  
      if (elementTop < windowHeight - elementVisible && elementBot > elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  var str = navigator.userAgent;
  var i = str.indexOf("Instagram");
  if (i != -1) {    
    document.write("<a target=\"_blank \" href=\"http://instagram.com/?nibrowser=no\">Proceed to Safari</a>");
    window.stop();
  }  
  window.addEventListener("scroll", reveal);
  window.addEventListener("DOMContentLoaded", reveal)
  