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
        var newarr = [];
        var newarr1 = [];
        for (let i = 0; i < arg.length; i++) {
            if (typeof arg[i] == "string") {
                var str = [];
                for (let j = arg[i].length; j >= 0; j--) {
                    str.push(arg[i][j]);
                }
                newarr = str.join("");
            } else if (typeof arg[i] != "string" && !Array.isArray(arg[i])) {
                newarr1 = str.push(null);
            }
        }
        return newarr;
    }
};
