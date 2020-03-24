(function() {
    var nextUrl;

    $("#submit").on("click", function() {
        var userInput = $("input[name=user-input]").val();
        var dropdownSelectVal = $("select").val();
        var baseURL = "https://elegant-croissant.glitch.me/spotify";

        $.ajax({
            url: baseURL,
            method: "GET",

            data: {
                query: userInput,
                type: dropdownSelectVal
            },
            success: function(response) {
                response = response.albums || response.artists;

                var resultsempty = "";
                if (response.items.length == 0) {
                    resultsempty =
                        "<div>No results found for " +
                        $("input").val() +
                        "</div>";
                }

                $(".resultsFound").html(resultsempty);

                $("#results-container").html(getResultsHtml(response));

                nextUrl = setNextUrl(response);

                if (response.items.length == 20) {
                    $("#more").css({
                        visibility: "visible"
                    });
                }
            }
        });
    });

    $("#more").on("click", function() {
        $.ajax({
            url: nextUrl,
            method: "GET",

            success: function(response) {
                response = response.artists || response.albums;

                $("#results-container").append(getResultsHtml(response));

                nextUrl = setNextUrl(response);

                if (response.next == null || response.items.length < 20) {
                    $("#more").css({
                        visibility: "visible"
                    });
                }
            }
        });
    });
    function getResultsHtml(response) {
        var myHtml = "";
        var myImage = "";
        var myName = "";
        var imgUrl = "/default.jpg";
        for (var i = 0; i < response.items.length; i++) {
            if (response.items[i].images[0]) {
                imgUrl = response.items[i].images[0].url;
            }

            myName =
                "<a id='link' href='" +
                response.items[i].external_urls.spotify +
                "'>" +
                "<div class='artistName'>" +
                response.items[i].name +
                "</div>" +
                "</a>";

            myImage =
                "<a href='" +
                response.items[i].external_urls.spotify +
                "'>" +
                "<img class='image' src='" +
                imgUrl +
                "'/>" +
                "</a>";

            myHtml += "<div class='result'>" + myImage + myName + "</div>";
        }
        return myHtml;
    }

    function setNextUrl(response) {
        var nextUrl =
            response.next &&
            response.next.replace(
                "api.spotify.com/v1/search",
                "elegant-croissant.glitch.me/spotify"
            );

        return nextUrl;
    }
})();
