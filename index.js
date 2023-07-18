// Navbar ONCLICK Functions

// Show the selected div
function showDiv(divId) {
    var div = document.getElementById(divId);
    div.style.display = "flex";
}

// Hide the selected div
function hideDiv(divId) {
    var div = document.getElementById(divId);
    div.style.display = "none";
}

// Set Active div for page to persist
function setActive(link) {
    // Retrieve all elements with class 'nav-link'
    var links = document.getElementsByClassName('nav-link');
    // Remove 'active' class from all nav-link elements
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    // Add 'active' class to current link
    link.classList.add('active');
}