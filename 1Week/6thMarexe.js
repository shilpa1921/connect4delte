function Parent(width, height) {
    this.width = width;
    this.height = height;
}
Parent.prototype = {
    constructor: Parent,
    getArea: function() {
        return this.width * this.height;
    }
};

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}
function Square(n) {
    this.width = n;
    this.height = n;
}
Square.prototype = Object.create(Parent.prototype);
Rectangle.prototype = Object.create(Parent.prototype);

var square = new Square(4);
var areaOfsquare = square.getArea(); //16
console.log(areaOfsquare);

var rect = new Rectangle(4, 5);
var areaOfRectangle = rect.getArea(); //20
console.log(areaOfRectangle);

function invertCase(str) {
    var newstr = [];
    var strToArr = str.split("");
    for (var i = 0; i < strToArr.length; i++) {
        if (strToArr[i] == strToArr[i].toLowerCase()) {
            newstr[i] = strToArr[i].toUpperCase();
        } else {
            newstr[i] = strToArr[i].toLowerCase();
        }
    }
    return newstr;
}

var newString = invertCase("w1Er");
console.log(newString.join(""));
