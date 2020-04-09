module.exports = function fn(arg) {
    if (typeof arg == "string") {
        let str = [];
        for (let i = arg.length; i >= 0; i--) {
            str.push(arg[i]);
        }
        return str.join("");
    } else if (typeof arg != "string" && !Array.isArray(arg)) {
        return null;
    } else if (Array.isArray(arg)) {
        var str = [];
        for (let i = 0; i < arg.length; i++) {
            if (typeof arg[i] == "string") {
                let str = arg[i];
                str = str.split("");
                str = str.reverse();
                str = str.join("");
                arg[i] = str;
            } else {
                arg[i] = null;
            }
        }
        return arg;
    }
};
