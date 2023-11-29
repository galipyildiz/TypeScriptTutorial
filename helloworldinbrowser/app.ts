let message: string = 'Hello, Type!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
let heading1 = document.createElement('h1');
heading1.textContent = `${getTotal(1, 2, 3, 4, 5, 6, 7)}`;
document.body.appendChild(heading1);


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {//dynamic variable type
    return a + b;
}

let heading2 = document.createElement('h1');
heading2.textContent = `${add(1, 2)}`;
document.body.appendChild(heading2);

let heading3 = document.createElement('h1');
heading3.textContent = `${add("ali", "veli")}`;
document.body.appendChild(heading3);