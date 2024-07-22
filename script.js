// Definir les variables
var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var l = document.getElementById('lenght');



//lorsque l'utilisateur clique sur le champs du mot de passe ,afficher la boite de message
myInput.onfocus = function(){
    document.getElementById('message').style.display='block';
}
//losque l'utilisateur clique  en dehors du champ de mot de passe masquer la boite de message

myInput.onblur= function(){
    document.getElementById('message').style.display='none'
}

//lorsque l'utilisateur commence a taper quelques choses sur le champ de mot de passe
myInput.onkeyup = function(){
    //valider les lettres minuscules
    var lowerCaseLetters = /[a-z]/g
    if (myInput.value.match(lowerCaseLetters)) {
        // si le mot de passe contient une lettre minuscule , enlever la classe 'invalid' et ajouter la classe 'valid'
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        // sinon , enòever la class 'valid ' et mettre la classe 'invalid'
       letter.classList.remove('valid');
       letter.classList.add('invalid');
    }

    var upperCaseLetters = /[A-Z]/g
    if (myInput.value.match(upperCaseLetters)) {

        capital.classList.remove('invalid');
        capital.classList.add('valid');
        
    } else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
        
    }

    var numbers = /[0-9]/g
    if (myInput.value.match(numbers)) {

        number.classList.remove('invalid');
        number.classList.add('valid');
        
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }


    //valider la longeur du mot de passe
    if (myInput.value.length >= 8) {
       //si la longeur au moins 8 caracteres
        l.classList.remove('invalid');
        l.classList.add('valid');
        
    } else {
        // sinon 
        l.classList.remove('valid');
        l.classList.add('invalid');
        
    }
}