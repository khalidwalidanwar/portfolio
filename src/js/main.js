import "./Vue/vueFramework.js";
import VueFrame from "./Vue/vueFramework.js";

window.onload = () => {
  if (localStorage.darkmode == "true") {
    $("#app")[0].classList.add("dark");
    $(".darkModed")[0].checked = true;
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= $(".contact-page")[0].offsetTop) {
    VueFrame["_data"].activePage = "Contact Us";
  } else if (window.scrollY >= $(".projects-page")[0].offsetTop) {
    VueFrame["_data"].activePage = "Projects";
  } else if (window.scrollY >= $(".skills-page")[0].offsetTop) {
    VueFrame["_data"].activePage = "Skills";
  } else if (window.scrollY >= $(".certifications-page")[0].offsetTop) {
    VueFrame["_data"].activePage = "Certifications";
  } else if (window.scrollY >= $(".about-page")[0].offsetTop) {
    VueFrame["_data"].activePage = "About";
  } else if (window.scrollY >= $(".home-page")[0].offsetTop) {
    VueFrame["_data"].activePage = "Home";
  }

  if (window.scrollY >= 500) {
    $(".navbar")[0].style.background = "rgb(224 197 197 / 67%)";
    $(".toTop")[0].style.display = "block";
  } else {
    $(".navbar")[0].style.background = "transparent";
    $(".toTop")[0].style.display = "none";
  }

  if (window.scrollY >= $(".about-page")[0].offsetTop - 1000) {
    $(".about-page .container .card")[0].style.transform = "translateX(0)";
  }
  if (window.scrollY >= $(".skills-page")[0].offsetTop - 500) {
    for (var i = 0; i < $(".skills-page .progress .progress-bar").length; i++) {
      $(".skills-page .progress .progress-bar")[i].style.width = `${
        $(".skills-page .progress .progress-bar")[i].innerHTML
      }`;
    }
  }
});

$(".darkModed")[0].onchange = () => {
  if ($(".darkModed")[0].checked) {
    localStorage.darkmode = "true";
    $("#app")[0].classList.add("dark");
  } else {
    localStorage.darkmode = "false";
    $("#app")[0].classList.remove("dark");
  }
};

// delete logo 000webhost
// document.body.children[document.body.children.length - 1].remove();
// document.body.children[document.body.children.length - 1].remove();
