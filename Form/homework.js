function myFirstApp (name, age) {
    alert(`Hey, my name is ${name} and this my very first app!`);

    function showSkills(){
        let skills = ['pizzaeating', 'gigplaying', 'javascript'];
        for(let i = 0; i < skills.length; i++){
            alert(`I have some skills like: ` + skills[i]);
        } 
    }
showSkills();

    function checkAge(){
        let age = prompt(`How old are you?`);
        if (age < 10) {
            alert(`You're a smartass kid`);
        }
        else {
            alert(`Never too old bro`);
        }
    }
checkAge(age);
    
    function calcPow(num){
        return num*num;
    }
    console.log(calcPow(4));
calcPow();
}

myFirstApp('Roman', 27);