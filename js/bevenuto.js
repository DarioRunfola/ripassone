$(() => {

    let email = localStorage.getItem('email');
    $('#benvenuto').html(`<h2> benvenuto  ${email} </h2>`).css('color','silver');



    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'login.html';

    });



})
