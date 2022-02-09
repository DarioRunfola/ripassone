

$(() => {
    localStorage.clear();
    $('#entra').on('click', function () {
        let password = $('#password').val();
        let email = $('#email').val();
        if (email == '' || password == '') {
            alert('inserire nome email e password');
        } else if (emailRegex($('#email').val()) == false) {
            alert('inserisci una mail valida !');
        } else if (pswRegex($('#password').val()) == false) {
            alert('La password deve contenere almeno un numero!')
        } else {
            localStorage.setItem('email', email);
            partenza();
        }   
        
        function emailRegex($email){
            var emailX = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
            return emailX.test($email);
        }
        function pswRegex($password){
            var passX =  /^(?=.*[0-9])/;
            return passX.test($password);
        }

    });
    function partenza() {
        let progressBar = $('#progress');
        let larghezza = 1;
        let intervallo = setInterval(cresci, 10);
        function cresci() {
            if (larghezza > 500) {
                clearInterval(intervallo);
                location.href = 'elencoCorsi.html';
            } else {
                larghezza++
                progressBar.css('width', larghezza + 'px');
            }
        }
    }




});










// var avvia = document.getElementById('avvia');

// avvia.addEventListener('click' ,partenza);




//  

// const regex1 = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
// const regex2 = /^(?=.*[0-9])/;

// localStorage.clear();
// $('#entra').on('click', function () {
//     let utente = $('#user').val();
//     let password = $('#password').val();
//     if (utente == '' || password == '') {
//         alert('Inserisci nome utente e password')
//     } else if (password.length < 6) {
//         alert('La password deve contenere almeno 6 caratteri!')
//     } else if (!regex2.test(password)) {
//         alert('La password deve contenere almeno un numero!')
//     } else if (!regex1.test(utente)) {
//         alert('Inserisci caratteri validi per la mail!')
//     } else {
//         localStorage.setItem('utente', utente);
//         partenza()
//     }
