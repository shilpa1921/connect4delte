(function() {
    // console.log("sanity?", $);

    var coordinates = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [5, 10, 15, 20],
        [4, 9, 14, 19],
        [3, 8, 13, 18],
        [11, 16, 21, 26],
        [10, 15, 20, 25],
        [9, 14, 19, 24],
        [17, 22, 27, 32],
        [16, 21, 26, 31],
        [15, 20, 25, 30],
        [23, 28, 33, 38],
        [22, 27, 32, 37],
        [21, 26, 31, 36],
        [36, 31, 26, 21],
        [37, 32, 27, 22],
        [38, 33, 28, 23],
        [30, 25, 20, 15],
        [31, 26, 21, 16],
        [32, 27, 22, 17],
        [24, 19, 14, 9],
        [25, 20, 15, 10],
        [26, 21, 16, 11],
        [18, 13, 8, 3],
        [19, 14, 9, 4],
        [20, 15, 10, 5],
        [41, 34, 27, 20],
        [40, 33, 26, 19],
        [39, 32, 25, 18],
        [35, 28, 21, 14],
        [34, 27, 20, 13],
        [33, 26, 19, 12],
        [29, 22, 15, 8],
        [28, 21, 14, 7],
        [27, 20, 13, 6],
        [23, 16, 9, 2],
        [22, 15, 8, 1],
        [21, 14, 7, 0]
    ];
    var currentPlayer = "";
    $(".player1").on("click", function() {
        currentPlayer = "player1";
        $("#turn").html("player1 turn");
    });

    $(".player2").on("click", function() {
        currentPlayer = "player2";
        $("#turn").html("player2 turn");
    });

    // console.log("currentPlayer before switch: ", currentPlayer);
    $(".column").on("click", function(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        // loop through all the slots and find the first available slot.
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log("slotsInCol[i]", slotsInCol.eq(i).hasClass('player1'));
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log("do something....");
                slotsInCol.eq(i).addClass(currentPlayer);

                break;
            }
        }
        console.log("i: ", i);
        var slotsInRow = $(".row" + i);
        console.log("slotsInRow: ", slotsInRow);
        if (i === -1) {
            return;
        }

        // first we will check for a column victory, so we need to pass slotsInCol
        if (checkForVictory(slotsInCol)) {
            // time to do the victory dance!
            console.log("There was a column victory!!!", currentPlayer);
            setTimeout(Resultbox(), 30000);
        } else if (checkForVictory(slotsInRow)) {
            // time to do the victory dance!
            console.log("There was a ROW victory!!!");
            setTimeout(Resultbox(), 30000);
        } else if (checkForDiagnolVictory()) {
            console.log("There was a ROW victory!!!");
            setTimeout(Resultbox(), 30000);
        } else {
            console.log("There was no victory, so switching turns...");
            switchPlayer();
        }
    });

    function checkForDiagnolVictory() {
        diagonalcount = 0;
        for (var j = 0; j < coordinates.length; j++) {
            for (var k = 0; k <= 4; k++) {
                if ($("." + coordinates[j][k] + "").hasClass(currentPlayer)) {
                    diagonalcount++;
                }
            }
            if (diagonalcount == 4) {
                return true;
            } else {
                diagonalcount = 0;
            }
        }
    }

    function checkForVictory(slots) {
        // we need some logic to find victories and if we do return true.
        console.log("slots in checkForVictory: ", slots);
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            console.log(
                "has current player? ",
                slots.eq(i).hasClass(currentPlayer)
            );
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                console.log("count: ", count);
                if (count === 4) {
                    return true;
                }
            } else {
                // reset the count back to zero because it found the other player (or no player)
                count = 0;
            }
        }
    }

    // console.log("currentPlayer after: ", currentPlayer);

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
            $("#turn").html("player2 turn");
        } else {
            currentPlayer = "player1";
            $("#turn").html("player1 turn");
        }

        // currentPlayer === "player1"
        //     ? (currentPlayer = "player2")
        //     : (currentPlayer = "player1");
    }

    function Resultbox() {
        var score1 = localStorage.getItem("score1");

        var score2 = localStorage.getItem("score2");
        var winner;

        if (currentPlayer === "player1") {
            winner = "Player 1";
            score1++;
            localStorage.setItem("score1", score1);
        } else {
            winner = "Player 2";
            score2++;

            localStorage.setItem("score2", score2);
        }

        $(".victory")
            .html(
                winner +
                    " wins the game! Start the new game<br> Player1 score:" +
                    score1 +
                    "<br>Player2 score:" +
                    score2
            )
            .css({
                visibility: "visible",
                backgroundColor: "pink",
                fontSize: "25px",
                fontStyle: "italic",
                textAlign: "center"
            });

        $(".victory-box").css({
            visibility: "visible"
        });
        $(".victory-box").on("click", function() {
            $(".victory").css({
                visibility: "hidden"
            });
            $(".victory-box").css({
                visibility: "hidden"
            });
            $(".slot").removeClass("player1");

            $(".slot").removeClass("player2");
        });
    }

    var button = $(".hotpink");
    button.on("click", function() {
        location.reload();
        localStorage.setItem("score2", 0);
        localStorage.setItem("score1", 0);
    });
})();
