(function() {
    var headlines = document.getElementById("headlines");

    var links = headlines.getElementsByTagName("A");
    var left = headlines.offsetLeft;

    function moveHeadlines() {
        left--;
        if (left < -links[0].offsetWidth) {
            left = left + link[0].offsetWidth;
            links[0].parentNode.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
        requestAnimationFrame(moveHeadlines);
    }

    moveHeadlines();
})();
