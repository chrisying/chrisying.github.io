var currentContent = "init";    // Current content window
var currentTimeout = null;      // Timeout for current animation
var aboutTimeout, linksTimeout, photosTimeout, contactTimeout, blogTimeout;

// Expand the content window for the first time
function expand_content() {
    var e = document.getElementById("content_box");
    e.style.animationName = "expand_content";
    e.style.animationDuration = "0.3s";
    e.style.animationDelay = "0s";
    e.style.animationFillMode = "forwards";

    var n = document.getElementById("main_name");
    n.style.color = "#555555";
    n.style.animationName = "shrink_name";
    n.style.animationDuration = "0.1";
    n.style.animationDelay = "0s";
    n.style.animationFillMode = "forwards";
    setTimeout(function() { n.style.fontSize = "7vh"; }, 300);
}

// Load the contents of a menu box
function load_content(contentId) {
    function show_content() {
        document.getElementById(contentId).style.display = "inline-block";
    }

    document.getElementById(contentId + "_button").style.borderStyle = "solid";
    
    if (currentContent == "init") {
        expand_content();
        currentTimeout = setTimeout(show_content, 300);
    } else if (currentContent != contentId) {
        document.getElementById(currentContent + "_button").style.borderStyle = "none";
        clearTimeout(currentTimeout);
        document.getElementById(currentContent).style.display = "none";
        show_content();
    }

    currentContent = contentId;
}

// :)
var easter_egg = new Konami(function() {
    var e = document.getElementById("main_name");
    e.style.animation = "rainbow 1s infinite";
});
