(function() {
    console.log("shilpa");
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");

    var mainc = document.getElementById("biggercanvas");
    var ctx1 = mainc.getContext("2d");

    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, (360 * Math.PI) / 180);
    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(100, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100, 230);
    ctx.lineTo(20, 180);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100, 230);
    ctx.lineTo(180, 180);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(30, 350);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(180, 350);
    ctx.stroke();
    ctx.closePath();
})();
