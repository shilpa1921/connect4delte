(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    /////////////////////////// SETUP CODE ABOVE /////////////////////////////////////

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

                var myHtmlString = Handlebars.templates.info(response);
                $("#results-container").html(myHtmlString);

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

                var myHtmlString = Handlebars.templates.info(response);
                $("#results-container").append(myHtmlString);

                nextUrl = setNextUrl(response);

                if (response.next == null || response.items.length < 20) {
                    $("#more").css({
                        visibility: "hidden"
                    });
                }
            }
        });
    });

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
