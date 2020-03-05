function each(list, fun) {
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            fun(list[i], i);
        }
    } else if (typeof list == "object") {
        for (var prop in list) {
            fun(list[prop], prop);
        }
    }
}

each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

// each(["a", "b"], function(val, idx) {
// console.log("The value of item " + idx + " is " + val);
// }); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

function reverseFun(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

var reverseArray = reverseFun([10, 20, 50]);
console.log(reverseArray);

function getLessThanZero(arr) {
    var negativeArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeArr.push(arr[i]);
        }
    }
    return negativeArr;
}

var lessThanZeroNum = getLessThanZero([1, 2, -1, -90, 10]);
console.log(lessThanZeroNum);
getLessThanZero([1, 2]); //[]
