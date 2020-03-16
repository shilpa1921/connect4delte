(function() {
    var headlines = $("#headlines");
    var left = headlines.offset().left;
    var anim;

    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (
            left <
            -$("#headlines a")
                .eq(0)
                .outerWidth()
        ) {
            left =
                left +
                $("#headlines a")
                    .eq(0)
                    .outerWidth();
            $("#headlines a")
                .eq(0)
                .parent()
                .append($("#headlines a").eq(0));
        }
        $("#headlines").css({
            left: left + "px"
        });
        anim = requestAnimationFrame(moveHeadlines);
    }
    $("a").on("mouseover", function(e) {
        cancelAnimationFrame(anim);
    });

    $("a").on("mouseout", function(e) {
        anim = requestAnimationFrame(moveHeadlines);
    });
})();
