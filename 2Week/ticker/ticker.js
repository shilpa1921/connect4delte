(function() {
    var headlines = document.getElementById("headlines");

    var links = headlines.getElementsByTagName("a");
    var left = headlines.offsetLeft;
    var anim;

    var headlinesBottom = document.getElementById("headlines-bottom");

    var linksBottom = headlines.getElementsByClassName("link");
    var right = headlinesBottom.offsetLeft;
    var animBottom;
    moveHeadlines();
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

    function moveHeadlines1() {
        right--;

        if (right < -links[links.length - 1].offsetWidth) {
            right = right + links[links.length - 1].offsetWidth;
            links[2].parentNode.appendChild(links[2]);
        }
        headlinesBottom.style.right = right + "px";
        animBottom = requestAnimationFrame(moveHeadlines1);
    }

    headlinesBottom.addEventListener("mouseover", function() {
        cancelAnimationFrame(animBottom);
    });

    // for (var i = 0; i < links.length; i++) {
    //     links[i].addEventListener("mouseover", function() {
    //         cancelAnimationFrame(anim);
    //     });
    // }

    headlinesBottom.addEventListener("mouseout", function() {
        animBottom = requestAnimationFrame(moveHeadlines1);
    });

    moveHeadlines1();
})();
