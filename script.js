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
  document.getElementById("sendButton").classList.toggle("wsendButton");
  document.getElementById("cardName1").classList.toggle("wcardName");
  document.getElementById("cardName2").classList.toggle("wcardName");
  document.getElementById("cardName3").classList.toggle("wcardName");
  document.getElementById("cardName4").classList.toggle("wcardName");
  document.getElementById("cardName5").classList.toggle("wcardName");
  document.getElementById("cardName6").classList.toggle("wcardName");
  document.getElementById("cardName7").classList.toggle("wcardName");
  document.getElementById("cardName8").classList.toggle("wcardName");
  document.getElementById("cardName9").classList.toggle("wcardName");
  document.getElementById("cardName10").classList.toggle("wcardName");
  document.getElementById("cardName11").classList.toggle("wcardName");
  document.getElementById("cardName12").classList.toggle("wcardName");
  document.getElementById("cardName13").classList.toggle("wcardName");
  document.getElementById("cardName14").classList.toggle("wcardName");
  document.getElementById("cardName15").classList.toggle("wcardName");
  document.getElementById("cardName16").classList.toggle("wcardName");
  document.getElementById("cardName17").classList.toggle("wcardName");
  document.getElementById("cardName18").classList.toggle("wcardName");
  document.getElementById("cardName19").classList.toggle("wcardName");
  document.getElementById("cardName20").classList.toggle("wcardName");
  document.getElementById("cardName21").classList.toggle("wcardName");
  //
  document.getElementById("cardPost1").classList.toggle("wcardName");
  document.getElementById("cardPost2").classList.toggle("wcardName");
  document.getElementById("cardPost3").classList.toggle("wcardName");
  document.getElementById("cardPost4").classList.toggle("wcardName");
  document.getElementById("cardPost5").classList.toggle("wcardName");
  document.getElementById("cardPost6").classList.toggle("wcardName");
  document.getElementById("cardPost7").classList.toggle("wcardName");
  document.getElementById("cardPost8").classList.toggle("wcardName");
  document.getElementById("cardPost9").classList.toggle("wcardName");
  document.getElementById("cardPost10").classList.toggle("wcardName");
  document.getElementById("cardPost11").classList.toggle("wcardName");
  document.getElementById("cardPost12").classList.toggle("wcardName");
  document.getElementById("cardPost13").classList.toggle("wcardName");
  document.getElementById("cardPost14").classList.toggle("wcardName");
  document.getElementById("cardPost15").classList.toggle("wcardName");
  document.getElementById("cardPost16").classList.toggle("wcardName");
  document.getElementById("cardPost17").classList.toggle("wcardName");
  document.getElementById("cardPost18").classList.toggle("wcardName");
  document.getElementById("cardPost19").classList.toggle("wcardName");
  document.getElementById("cardPost20").classList.toggle("wcardName");
  document.getElementById("cardPost21").classList.toggle("wcardName");

  document.getElementById("maker").classList.toggle("wmaker");
}
