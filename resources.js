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

function resourcemode() {
  document.body.classList.toggle("wbody");
  document.getElementById("navbar").classList.toggle("wnavbar");
  document.getElementById("heading").classList.toggle("headingChange");
  document.getElementById("subHeading").classList.toggle("headingChange");
  document.getElementById("anker").classList.toggle("headingChange");
}
