(function() {
    var menu = document.getElementById("hamburger");

    var hmenu = document.getElementById("hamburger-menu");

    var menu1 = document.getElementById("menu1");

    var x = document.getElementById("x");

    menu.addEventListener("click", function() {
        hmenu.classList.add("on");
    });

    x.addEventListener("click", function() {
        hmenu.classList.remove("on");
    });

    menu1.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    hmenu.addEventListener("click", function() {
        hmenu.classList.remove("on");
    });

    var background = $("#background");

    var box = $("#box");
    var content = $(".content");

    setTimeout(dialog, 1000);

    function dialog() {
        background.css({
            visibility: "visible"
        });
        box.css({
            visibility: "visible"
        });
    }

    $("#x").on("click", function() {
        background.css({
            visibility: "hidden"
        });
        box.css({
            visibility: "hidden"
        });
    });

    content.on("click", function(event) {
        event.stopPropagation();
    });

    background.on("click", function() {
        background.css({
            visibility: "hidden"
        });
        box.css({
            visibility: "hidden"
        });
    });
})();
