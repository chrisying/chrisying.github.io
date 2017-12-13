var curState = 0;  // 0 = init, 1 = about, 2 = links, 3 = photos, 4 = contact, 5 = blog
var aboutTimeout, linksTimeout, photosTimeout, contactTimeout, blogTimeout;

function expand_content() {
    var e = document.getElementById("content_box");
    e.style.animationName = "expand_content";
    e.style.animationDuration = "0.5s";
    e.style.animationDelay = "0s";
    e.style.animationFillMode = "forwards";

    var n = document.getElementById("main_name");
    n.style.color = "#57626D";
    n.style.animationName = "shrink_name";
    n.style.animationDuration = "0.5s";
    n.style.animationDelay = "0s";
    n.style.animationFillMode = "forwards";
    n.style.animationIterationCount = "1";
    setTimeout(function() { n.style.fontSize = "5vh"; }, 500);
}

function load_about() {
    function show_about() {
        var e = document.getElementById("about");
        e.style.display = "inline-block";
    }
    switch (curState) {
        case 0:
            expand_content();
            aboutTimeout = setTimeout(show_about, 500);
            break;
        case 1:
            break;
        case 2:
            document.getElementById("links_button").style.borderStyle = "none";
            clearTimeout(linksTimeout);
            document.getElementById("links").style.display = "none";
            show_about();
            break;
        case 3:
            document.getElementById("photos_button").style.borderStyle = "none";
            clearTimeout(photosTimeout);
            document.getElementById("photos").style.display = "none";
            show_about();
            break;
        case 4:
            document.getElementById("contact_button").style.borderStyle = "none";
            clearTimeout(contactTimeout);
            document.getElementById("contact").style.display = "none";
            show_about();
            break;
        case 5:
            document.getElementById("blog_button").style.borderStyle = "none";
            clearTimeout(photosTimeout);
            document.getElementById("blog").style.display = "none";
            show_about();
            break;
    }

    document.getElementById("about_button").style.borderStyle = "solid";
    curState = 1;
}

function load_links() {
    function show_links() {
        var e = document.getElementById("links");
        e.style.display = "inline-block";
    }
    switch (curState) {
        case 0:
            expand_content();
            linksTimeout = setTimeout(show_links, 500);
            break;
        case 1:
            document.getElementById("about_button").style.borderStyle = "none";
            clearTimeout(aboutTimeout);
            document.getElementById("about").style.display = "none";
            show_links();
            break;
        case 2:
            break;
        case 3:
            document.getElementById("photos_button").style.borderStyle = "none";
            clearTimeout(photosTimeout);
            document.getElementById("photos").style.display = "none";
            show_links();
            break;
        case 4:
            document.getElementById("contact_button").style.borderStyle = "none";
            clearTimeout(contactTimeout);
            document.getElementById("contact").style.display = "none";
            show_links();
            break;
        case 5:
            document.getElementById("blog_button").style.borderStyle = "none";
            clearTimeout(photosTimeout);
            document.getElementById("blog").style.display = "none";
            show_links();
            break;
    }

    document.getElementById("links_button").style.borderStyle = "solid";
    curState = 2;
}

function load_photos() {
    function show_photos() {
        var e = document.getElementById("photos");
        e.style.display = "inline-block";
    }
    switch (curState) {
        case 0:
            expand_content();
            photosTimeout = setTimeout(show_photos, 500);
            break;
        case 1:
            document.getElementById("about_button").style.borderStyle = "none";
            clearTimeout(aboutTimeout);
            document.getElementById("about").style.display = "none";
            show_photos();
            break;
        case 2:
            document.getElementById("links_button").style.borderStyle = "none";
            clearTimeout(linksTimeout);
            document.getElementById("links").style.display = "none";
            show_photos();
            break;
        case 3:
            break;
        case 4:
            document.getElementById("contact_button").style.borderStyle = "none";
            clearTimeout(contactTimeout);
            document.getElementById("contact").style.display = "none";
            show_photos();
            break;
        case 5:
            document.getElementById("blog_button").style.borderStyle = "none";
            clearTimeout(photosTimeout);
            document.getElementById("blog").style.display = "none";
            show_photos();
            break;
    }

    document.getElementById("photos_button").style.borderStyle = "solid";
    curState = 3;
}

function load_contact() {
    function show_contact() {
        var e = document.getElementById("contact");
        e.style.display = "inline-block";
    }
    switch (curState) {
        case 0:
            expand_content();
            contactTimeout = setTimeout(show_contact, 500);
            break;
        case 1:
            document.getElementById("about_button").style.borderStyle = "none";
            clearTimeout(aboutTimeout);
            document.getElementById("about").style.display = "none";
            show_contact();
            break;
        case 2:
            document.getElementById("links_button").style.borderStyle = "none";
            clearTimeout(linksTimeout);
            document.getElementById("links").style.display = "none";
            show_contact();
            break;
        case 3:
            document.getElementById("photos_button").style.borderStyle = "none";
            clearTimeout(photosTimeout);
            document.getElementById("photos").style.display = "none";
            show_contact();
            break;
        case 4:
            break;
        case 5:
            document.getElementById("blog_button").style.borderStyle = "none";
            clearTimeout(blogTimeout);
            document.getElementById("blog").style.display = "none";
            show_contact();
            break;
    }

    document.getElementById("contact_button").style.borderStyle = "solid";
    curState = 4;
}

function load_blog() {
    function show_blog() {
        var e = document.getElementById("blog");
        e.style.display = "inline-block";
    }
    switch (curState) {
        case 0:
            expand_content();
            blogTimeout = setTimeout(show_blog, 500);
            break;
        case 1:
            document.getElementById("about_button").style.borderStyle = "none";
            clearTimeout(aboutTimeout);
            document.getElementById("about").style.display = "none";
            show_blog();
            break;
        case 2:
            document.getElementById("links_button").style.borderStyle = "none";
            clearTimeout(linksTimeout);
            document.getElementById("links").style.display = "none";
            show_blog();
            break;
        case 3:
            document.getElementById("photos_button").style.borderStyle = "none";
            clearTimeout(photosTimeout);
            document.getElementById("photos").style.display = "none";
            show_blog();
            break;
        case 4:
            document.getElementById("contact_button").style.borderStyle = "none";
            clearTimeout(contactTimeout);
            document.getElementById("contact").style.display = "none";
            show_blog();
            break;
        case 5:
            break;
    }

    document.getElementById("blog_button").style.borderStyle = "solid";
    curState = 5;
}

var easter_egg = new Konami(function() {
    var e = document.getElementById("main_name");
/*
    e.style.animationName = "rainbow";
    e.style.animationDuration = "1s";
    e.style.animationDelay = "0s";
    e.style.animationStyle = "infinite";
*/
    e.style.animation = "rainbow 1s infinite";
});
