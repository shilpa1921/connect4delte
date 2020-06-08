// task:1

function changeStyle(str) {
    var newStyle = document.querySelectorAll(str);
    for (var i = 0; i < newStyle.length; i++) {
        newStyle[i].style.fontStyle = "italic";
        newStyle[i].style.textDecoration = "underline";
        newStyle[i].style.fontWeight = "bold";
    }
}
changeStyle("p");

// task:2
function classArray(string) {
    var array = [];
    var arrOfClass = document.getElementsByClassName(string);
    for (var i = 0; i < arrOfClass.length; i++) {
        array.push(arrOfClass[i]);
    }
    return array;
}

var arrayOfClass = classArray("info");
console.log(arrayOfClass);

// task:3
function insertElement() {
    var myEle = document.createElement("div");
    var myText = document.createTextNode("AWESOME");
    myEle.appendChild(myText);
    document.body.appendChild(myEle);

    myEle.style.position = "fixed";
    myEle.style.zIndex = "2147483647";
    myEle.style.left = "20px";
    myEle.style.top = "100px";
    myEle.style.fontSize = "200px";
}

insertElement();
