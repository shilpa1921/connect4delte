(function() {
    var textarea = $(".text");
    var secret = $(".secret");
    var open = $(".open");

    textarea.on("input", function() {
        var val = textarea.val();
        localStorage.setItem("secret", val);
    });
    secret.on("click", function(e) {
        textarea.val("");
    });
    open.on("click", function() {
        var text = localStorage.getItem("secret");
        textarea.val(text);
    });
})();
