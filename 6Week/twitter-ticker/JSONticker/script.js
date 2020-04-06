(function() {
    var headlines = $("#headlines");
    var left = headlines.offset().left;
    var anim;

    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function(response) {
            console.log("response: ", response);

            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                var links =
                    "<a href" +
                    response[i].url +
                    ">" +
                    response[i].text +
                    "</a>";

                myHtml += links;
            }

            headlines.html(myHtml);

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
        },
        error: function(err) {
            console.log("err: ", err);
        }
    });
})();
