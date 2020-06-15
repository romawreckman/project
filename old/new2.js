let age = prompt('How old are you?');

//if(age < 18) {
  //  alert('You cant come in');
//} else if(age > 100) {
 //   alert("You're late");
//}else {
 //   alert('You can come in');
//}

switch(age){
    case '18':
    alert('You can come');
    break;
    case '75':
    alert('You are late');
    break;
    default:
        alert('NaN');
        break;
}