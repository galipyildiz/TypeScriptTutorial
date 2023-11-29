var message = 'Hello, Type!';
// create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
var heading1 = document.createElement('h1');
heading1.textContent = "".concat(getTotal(1, 2, 3, 4, 5, 6, 7));
document.body.appendChild(heading1);
function add(a, b) {
    return a + b;
}
var heading2 = document.createElement('h1');
heading2.textContent = "".concat(add(1, 2));
document.body.appendChild(heading2);
var heading3 = document.createElement('h1');
heading3.textContent = "".concat(add("ali", "veli"));
document.body.appendChild(heading3);
var heading4 = document.createElement('h1');
heading4.textContent = "".concat(add("ali", 1));
document.body.appendChild(heading4);
