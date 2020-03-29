var containerleft = $(".container").offset().left;

$(".bar").on("mousedown", function mouseDown() {
    $(".container").on("mousemove", function(event) {
        $(".container").on("mouseup", function() {
            $(".container").off("mousemove");
        });
        console.log("event.clientX:", event.clientX);
        console.log("outerwidth:", $(".bar").outerWidth());
        console.log("container left", containerleft);
        var newLeft = event.clientX - $(".bar").outerWidth() - containerleft;
        console.log("newlwft:", newLeft);
        $(".bar").css({
            left: newLeft + "px"
        });

        $(".top-image").css({
            width: newLeft + "px"
        });

        if (newLeft <= 0) {
            $(".top-image").css({
                width: 0
            });
            $(".bar").css({
                left: "0px"
            });
        } else if (newLeft >= $(".container").outerWidth() - 20) {
            $(".bar").css({
                left: $(".container").outerWidth() - 20 + "px"
            });
        }
    });
});
