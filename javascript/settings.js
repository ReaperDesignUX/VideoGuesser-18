// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var settings_button = document.getElementById("settings");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
settings_button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Hide settings_button box on refresh
window.onload = modal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.visibility = "hidden";
//  }
//}