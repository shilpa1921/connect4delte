(function() {
    var input = $("input");
    var resultsElem = $("#results");
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Angola",
        "Anguilla",
        "Antigua",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia"
    ];

    input.on("input focus", function() {
        var val = input.val();
        console.log("val: ", val);

        // if current value of input field is empty, empty or hide result container element and return out of input event handler

        if (val == "") {
            resultsElem.empty();
            return;
        }

        var matches = [];
        console.log("matches: ", matches);

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                matches.push(countries[i]);
                if (matches.length == 5) {
                    break;
                }
            }

            //convert matches to html elements and put them on the page

            var resultsHtml = "";

            for (var j = 0; j < matches.length; j++) {
                resultsHtml += '<div class="result">' + matches[j] + "</div>";
            }
            // if matches is empty then put "No results" in the result container element
            if (matches.length == 0) {
                resultsHtml +=
                    '<div class = "results">' + "No results." + "</div>";
            }
            resultsElem.html(resultsHtml);
        }
    });

    resultsElem.on("mouseover", function(e) {
        if ($(e.target).text() == "No results.") {
            return;
        } else {
            $(e.target).addClass("highlight");
        }
    });

    resultsElem.on("mouseout", function(e) {
        $(e.target).removeClass("highlight");
    });

    resultsElem.on("mousedown", function(e) {
        if ($(e.target).text() !== "No results.") {
            input.val($(e.target).text());
            resultsElem.html("");
            console.log("shilpa");
        }
    });

    input.on("keydown", function(e) {
        if (e.keyCode === 13) {
            input.val($(".highlight").text());
            resultsElem.html("");
        }

        if (e.keyCode === 40) {
            if ($(".highlight").length == 0) {
                $(".result")
                    .first()
                    .addClass("highlight");
                return;
            } else {
                $(".highlight")
                    .next()
                    .addClass("highlight");
                $(".highlight")
                    .prev()
                    .removeClass("highlight");
            }
        }
        if (e.keyCode === 38) {
            if ($(".highlight").length == 0) {
                $(".result")
                    .last()
                    .addClass("highlight");
                return;
            } else {
                $(".highlight")
                    .prev()
                    .addClass("highlight");
                $(".highlight")
                    .next()
                    .removeClass("highlight");
            }
        }

        console.log("shilpa", $(".result"));
    });

    input.on("blur", function() {
        $(".result").css({ display: "none" });
    });
})();
