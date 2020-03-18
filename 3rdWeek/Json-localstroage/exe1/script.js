(function() {
    $(".text").on("input", function() {
        var val = $(".text").val();
        localStorage.setItem("input", val);
    });

    $(".validate").on("click", function() {
        var value = localStorage.getItem("input");

        try {
            JSON.parse(value);
            $(".text").val("input is JSON");

            $(".text").css({
                backgroundColor: "green",
                color: "white",
                textAlign: "center"
            });
        } catch {
            $(".text").val("Wrong input");
            $(".text").css({
                backgroundColor: "red",
                color: "white",
                textAlign: "center"
            });
        }
    });

    $(".clear").on("click", function() {
        $(".text")
            .val("")
            .css({
                backgroundColor: "white"
            });
    });
})();
