(function() {
    var input = $("input");
    var resultsElem = $("#results");

    input.on("input focus", function() {
        var val = input.val();
        console.log("val: ", val);

        $.ajax({
            url: "http://spicedworld.herokuapp.com/",
            data: {
                // you have to change 'a' to be w/e the user typed in the input field
                // make it dynamic!
                q: val
            },
            // success only runs when we get a positive response from API
            success: function(response) {
                console.log("response: ", response);
                if (val == "") {
                    resultsElem.empty();
                    return;
                }

                if ($("input").val() == val) {
                    resultsHtml = "";

                    for (var j = 0; j < response.length; j++) {
                        resultsHtml +=
                            '<div class="result">' + response[j] + "</div>";
                    }

                    if (response.length == 0) {
                        resultsHtml +=
                            '<div class = "result">' + "No results." + "</div>";
                    }
                    resultsElem.html(resultsHtml);
                } else {
                    return;
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
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
    });

    input.on("blur", function() {
        $(".result").css({ display: "none" });
    });
})();
