var loader = document.getElementById("mainLoader");
var body = document.querySelector("body");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

var click = document.querySelector(".click");

click.addEventListener("click", function () {
  loader.style.display = "none";
});

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  setTimeout(() => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }, 30);
});

const show = document.querySelector(".connect");
const contact = document.querySelector(".contactUs");
const close = document.querySelector(".crossButton");

show.addEventListener("click", function () {
  contact.classList.remove("hidden");
});

close.addEventListener("click", function () {
  contact.classList.add("hidden");
});

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

document.querySelector(".mainBackgroundImage").classList.remove("blur");
$(window).scroll(function (e) {
  var distanceScrolled = $(this).scrollTop();

  $(".blurme").css("-webkit-filter", "blur(" + distanceScrolled / 60 + "px)");
});
