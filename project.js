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

function projectmode() {
  document.body.classList.toggle("wbody");
  document.getElementById("navbar").classList.toggle("wnavbar");
  document.getElementById("heading1").classList.toggle("wheading");
  document.getElementById("subheading1").classList.toggle("wheading");
  document.getElementById("heading2").classList.toggle("wheading");
  document.getElementById("subheading2").classList.toggle("wheading");
  document.getElementById("heading3").classList.toggle("wheading");
  document.getElementById("subheading3").classList.toggle("wheading");
  document.getElementById("heading4").classList.toggle("wheading");
  document.getElementById("subheading4").classList.toggle("wheading");
  document.getElementById("knowMore").classList.toggle("wheading");
}
