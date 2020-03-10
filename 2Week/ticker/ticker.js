(function() {
    var headlines = document.getElementById("headlines");

    var links = headlines.getElementsByTagName("a");
    var left = headlines.offsetLeft;
    var anim;
    function moveHeadlines() {
        left--;
        if (left < -links[0].offsetWidth) {
            left = left + links[0].offsetWidth;
            links[0].parentNode.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
        anim = requestAnimationFrame(moveHeadlines);
    }

    headlines.addEventListener("mouseover", function() {
        cancelAnimationFrame(anim);
    });

    // for (var i = 0; i < links.length; i++) {
    //     links[i].addEventListener("mouseover", function() {
    //         cancelAnimationFrame(anim);
    //     });
    // }

    headlines.addEventListener("mouseout", function() {
        anim = requestAnimationFrame(moveHeadlines);
    });

    moveHeadlines();
})();
