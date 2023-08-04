function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  setTimeout(() => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }, 10);
});

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

function projectmode() {
  document.body.classList.toggle("wbody");
  document.getElementById("navbar").classList.toggle("wnavbar");
  document.getElementById("knowMore").classList.toggle("wsubheading");
  document.getElementById("cardContent1").classList.toggle("wsubheading");
  document.getElementById("cardContent2").classList.toggle("wsubheading");
  document.getElementById("cardContent3").classList.toggle("wsubheading");
  document.getElementById("heading1").classList.toggle("wheading");
  document.getElementById("heading2").classList.toggle("wheading");
  document.getElementById("heading3").classList.toggle("wheading");
}
