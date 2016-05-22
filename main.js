
function fade_out() {
    var e1 = document.getElementById("main_name");
    e1.style.color = "#57626D";
    e1.style.animationName = "fade_out";
    e1.style.animationDuration = "0.5s";
    e1.style.animationDelay = "0s";

    var e2 = document.getElementsByClassName("menu_button");
    for (var i = 0; i < e2.length; i++) {
        e2[i].style.color = "#57626D";
        e2[i].style.animationName = "fade_out";
        e2[i].style.animationDuration = "0.5s";
        e2[i].style.animationDelay = "0s";
    }
}

function load_about() {
    fade_out();
    setTimeout(function() {window.location = "about.html";}, 600);
}

function load_links() {
    fade_out();
    setTimeout(function() {window.location = "links.html";}, 600);
}

function load_contact() {
    fade_out();
    setTimeout(function() {window.location = "contact.html";}, 600);
}

function mouse_name_enter() {
    var e = document.getElementById("head_name");
    e.style.animationName = "no_animation";
    e.style.color = "#57626D";
    e.style.backgroundColor = "#BCC0C5";
    e.style.border = "2px solid #BCC0C5";
}

function mouse_name_exit() {
    var e = document.getElementById("head_name");
    e.style.color = "#BCC0C5";
    e.style.backgroundColor = "#57626D";
}

