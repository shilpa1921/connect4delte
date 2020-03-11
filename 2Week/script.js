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
})();
