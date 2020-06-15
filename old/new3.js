let count = 5;
function shitSaysHello(user) {
    let count = 10;
    count++;
    console.log(count);
    console.log('Hello ' + user + '!');
}
shitSaysHello('Roman');
console.log(count);
//function declaration

let calc = function (a, b){
    return a + b;
};
//function expression
console.log(calc(100, 100000000));