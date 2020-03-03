function logType(arg) {
    if (arg === null) {
        console.log("null!");
    } else if (typeof arg == "undefined") {
        console.log("!undefined");
    } else if (typeof arg == "string") {
        console.log("!string");
    } else if (typeof arg == "boolean") {
        console.log("boolen!");
    } else if (typeof arg == "function") {
        console.log("function!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (typeof arg == "object") {
        console.log("object!");
    } else if (typeof arg == "bigint") {
        console.log("bigint!");
    } else if (Number.isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === "number") {
        console.log("!Number");
    } else {
        console.log("I have no idea!");
    }
}

logType(12);

function objaCopyTob() {
    var a = {
        Berlin: "Germany",
        Paris: "France",
        "New York": "USA"
    };
    var b = {};

    for (var key in a) {
        b[a[key]] = key;
    }
    console.log(b);
}

objaCopyTob();

function countDown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

countDown();
