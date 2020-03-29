(function() {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.querySelectorAll("#dots .dot");
    var currentKitty = 0;
    var timer;
    var isTransitioning = false;

    // we'll have to detect in our code when there's a transition happenign
    // when there's a transition happening, we'll have to set isTransitioning to true
    // when there's no transition happening, set isTransitioning to false

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", clickHandler(i));
    } // for loop ends here

    function clickHandler(dotIndex) {
        return function() {
            if (isTransitioning) {
                // if there's a transition happening
                // do nothing
                return;
            }
            clearTimeout(timer);
            moveKitties(dotIndex);
        };
    }

    function moveKitties(index) {
        console.log("index: ", index);

        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("offscreen-left");
        dots[currentKitty].classList.remove("on");

        if (typeof index === "number") {
            // user clicked a dot! we need to show the image the corresponds with the dot that was clicked
            currentKitty = index;
        } else {
            // user didn't touch it. let carousel run on its own
            currentKitty++;
        }

        if (currentKitty == 4) {
            currentKitty = 0;
        }

        kitties[currentKitty].classList.add("onscreen");
        dots[currentKitty].classList.add("on");
    }

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 3000);
        }
    });

    timer = setTimeout(moveKitties, 3000);
})();
