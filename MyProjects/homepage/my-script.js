// Get the button:
let toTopBtn = document.getElementById("back-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
toTopBtn.style.display = "block";
} else {
toTopBtn.style.display = "none";
}
}