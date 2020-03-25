(function() {
    function* numbers() {
        let n = 1;
        while (n < 101) {
            if (n % 3 == 0 && n % 5 == 0) {
                yield "fizzbuzz";
            } else if (n % 5 == 0) {
                yield "buzz";
            } else if (n % 3 == 0) {
                yield "fizz";
            }
            n++;
        }
    }

    for (const num of numbers()) {
        console.log(num);
    }

    let arr = [1, 2, 3, 4, 5];
    function* reverseArr(arr) {
        let newArr = [...arr];
        return newArr.reverse();
    }

    var arrReverse = reverseArr(arr);
    console.log(arrReverse.next());
})();
