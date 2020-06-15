let money = +prompt("Your monthly budget?");    // созданные переменные 
    time = prompt("Enter the date" + " YYYY-MM-DD");
//console.log(money, time);    // вывод в консоль браузера

let appData = {  //создали объект, а ниже описали его свойства в фигурных скобках
budget: money,
timeData: time,
expenses: {},    // свойства могут содержать свои свойства
optionalExpenses: {},
income: [],
savings: false
};

let a = prompt("What do you need to buy?");
let b = +prompt("How much will it cost?");
let c = prompt("What do you also need to buy?");
let d = +prompt("How much will it cost?");

appData.expenses[a] = b;
appData.expenses[c] = d;

alert("Your daily budget:" + " " + (appData.budget/30)); 

console.log(appData.expenses);

let num = 50;

if (num < 49){
    console.log('Wrong')
} else if (num > 100) {
    console.log('A lot!')
} else {
    console.log('Right')
}

switch (num) {
    case num < 49:
        console.log('Wrong');
        break;
    case num > 100:
        console.log('A lot');
        break;
    case 50:
        console.log('OK');
        break; 
}
//let arr = ['1', '2', '3'];    // создали массив (ЭТО СПЕЦ ОБЪЕКТ) в квадратных скобках
//console.log(arr[0]);      

//alert("Hello BITCH");      // выводим инфо в модальное окно в браузере

//confirm("Are you here?");   // выводим инфо в модальное окно и спрашиваем Y N

//'use_strict';

//let money = prompt("Your budget for a month");
//let time = prompt("Enter: YYYY/MM/DD");
