fizzbuzz();

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("fizzbuzz");
            } else {
                console.log("fizz");
            }
        } else {
            if (i % 5 == 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    console.log(9 % 3);

    var n;
    n = 10 % 3;
    console.log(n);
    n = 2;
    console.log(n);

    console.log(null + false);

    console.log(typeof "text");
    console.log('shilpa"s');

    console.log(typeof 9);
}
