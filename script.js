// ------------JavaScript for Toggle Menu------------

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no";
}

function hideMenu(){
    navLinks.style.right = "-300px";
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}    