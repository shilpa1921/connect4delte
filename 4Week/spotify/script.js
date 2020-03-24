(function() {
    $("#submit").on("click", function() {
        var userInput = $("input[name=user-input]").val();
        var dropdownSelectVal = $("select").val();
        var baseUrl = "https://elegant-croissant.glitch.me/spotify";

        $.ajax({
            url: baseUrl,
            method: "GET",
            data: {
                query: userInput,
                type: dropdownSelectVal
            },
            success: function(response) {
                // console.log("response:", response);
                response = response.albums || response.artists;
                console.log("responseAfter:", response);
                var myHtml = "";
                var imgUrl = "/default.jpg";
                for (var i = 0; i < response.items.length; i++) {
                    // console.log("response.items[i]", response.items[i].name);
                    if (response.items[i].images[0]) {
                        imgUrl = response.items[i].images[0].url;
                    }
                    myHtml +=
                        "<div><h4><a href='" +
                        response.items[i].external_urls.spotify +
                        "'>" +
                        response.items[i].name +
                        "</a></h4><a href='" +
                        response.items[i].external_urls.spotify +
                        "'><img src='" +
                        imgUrl +
                        "'></a></div>";
                }
                $("#results-container").html(myHtml);
                console.log("response.next: ", response.next);
                var nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "elegant-croissant.glitch.me/spotify"
                    ); // take 2 args, first the pattern that I want to replece, 2nd what I want to replace it with
                console.log("shilpa", nextUrl.length);
                var morehtml = "";

                if (nextUrl.length > 0) {
                    morehtml = "<button>more</button>";
                    $("#more").html(morehtml);
                }

                $("#more").on("click", function() {
                    $.ajax({
                        url: nextUrl,
                        method: "GET",
                        success: function(response) {
                            if (nextUrl.length === 0) {
                                $("#more")
                                    .html(morehtml)
                                    .css({
                                        visibility: "hidden"
                                    });
                            }
                            console.log("in the secon ajax");
                            response = response.albums || response.artists;
                            for (var i = 0; i < response.items.length; i++) {
                                console.log(
                                    "response.items[i]INAJAX2",
                                    response.items[i].name
                                );
                                if (response.items[i].images[0]) {
                                    imgUrl = response.items[i].images[0].url;
                                }
                                myHtml +=
                                    "<div><h4><a href='" +
                                    response.items[i].external_urls.spotify +
                                    "'>" +
                                    response.items[i].name +
                                    "</a></h><a href='" +
                                    response.items[i].external_urls.spotify +
                                    "'><img src='" +
                                    imgUrl +
                                    "'></a></div>";
                            }
                            $("#results-container").append(myHtml);
                        }
                    });
                });
            }
        });
    });
})();
