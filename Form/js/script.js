let chooseBtn = document.getElementById('choose'),
    recieveBtn = document.getElementById('recieve'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_name'),
    mailInput = document.querySelectorAll('.contactform_mail')[0];

function hover(){
    heading.textContent = "Thats all folks!";
}