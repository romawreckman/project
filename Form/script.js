let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_name'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

chooseBtn.addEventListener('mouseenter', function(){
    heading.textContent = "Работает!";
});

chooseBtn.addEventListener('mouseleave', function(){
    heading.textContent = "Ну шо, всё!";
});

receiveBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

nameInput.addEventListener('input', function(){
    text.value = `Вы ${nameInput.value}`;
});