'use_strict';


var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;  
var obj = {
    name: "SHIT"
};

console.log(4/0);
console.log(obj.name);

let arr = ['apple.jpg','grapes.jpg','something.bmp'];

console.log(arr[0]);

//alert("Hello Beautiful World");
//let answer = confirm("Are you here?");
//console.log(answer);

//let answer = +prompt("Ну шо, помчали, малышка?");
//console.log(typeof(answer));

//console.log("arr" + "- object");
//console.log(4 + "- object");

let incr = 10,
    decr = 10;
//incr++;
//decr--;

console.log(++incr);
console.log(--decr);

let isChecked = true;
    isClose = true;

    console.log(isChecked || !isClose);