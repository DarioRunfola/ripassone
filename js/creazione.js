class Corsi {
    nome;
    corso;
    durata;
    constructor(_nome, _corso, _durata) {
        this.nome = _nome;
        this.corso = _corso;
        this.durata = _durata;
    }
    corsoCompleto() {
        return `corso ${this.nome} di ${this.corso} della durata di ${this.durata} min/ore`;
    }
    

}
class Materie extends Corsi {
    constructor(_nome, _corso, _durata ,_front, _back, _full) {
        super(_nome, _corso, _durata);
        this.front = _front;
        this.back = _back;
        this.full =_full;
        
    }  

}



$(() => {

    $('#stampa').on('click', function () {
        let nome = $('#nome').val();
        let corso = $('#corso').val();
        let durata = $('#durata').val();
        let front = $('#front').val();
        let back = $('#back').val();
        let full = $('#full').val();
        if (nome == '' || corso == '' || durata == '' || front == '' || back == '' || full == '') {
            alert('devi compliare correttamente');
            return;
        } else {
            let corso1 = new Corsi(nome, corso, durata, );
            $('#corso1').append(corso1.corsoCompleto());

        }
    });























});


//$('stampa').html(`<p>${nome} "ha crato il corso di: " ${corso} "che dura: "${durata} "ore"</p>`);