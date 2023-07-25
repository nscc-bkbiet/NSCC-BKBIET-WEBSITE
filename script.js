function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.querySelector(".sendButton").addEventListener("click", function () {
  const contactUs = (document.querySelector(".contactMsg").textContent =
    "Message was sent");
  console.log(contactUs);
});
const name = document.querySelector(".name").value;
const email = document.querySelector(".email").value;

window.addEventListener("scroll", slide);

function slide() {
  var reveals = document.querySelectorAll(".slide");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", leftSlide);

function leftSlide() {
  var reveals = document.querySelectorAll(".leftSlide");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rightSlide);

function rightSlide() {
  var reveals = document.querySelectorAll(".rightSlide");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scale);

function scale() {
  var reveals = document.querySelectorAll(".scale");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", zoom);

function zoom() {
  var reveals = document.querySelectorAll(".zoom");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function mode() {
  document.body.classList.toggle("wbody");
  document.getElementById("navbar").classList.toggle("wnavbar");
  document
    .getElementById("mainBackgroundImage")
    .classList.toggle("wmainBackgroundImage");
  document
    .getElementById("timeline-content1")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content2")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content3")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content4")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content5")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content6")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content7")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content8")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content9")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content10")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content11")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content12")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content13")
    .classList.toggle("wtimeline-content");
  document
    .getElementById("timeline-content14")
    .classList.toggle("wtimeline-content");

  document.getElementById("para").classList.toggle("wpara");
}
