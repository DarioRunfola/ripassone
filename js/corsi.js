class Corsi {
    nome;
    argomento;
    durata;
    constructor(_nome, _argomento, _durata) {
        this.nome = _nome;
        this.argomento = _argomento;
        this.durata = _durata;
    }
    corsoCompleto() {
        return `corso ${this.nome} du ${this.argomento} della durata di ${this.durata}`;
    }

}




$(() => {

    var corso1 = new Corsi('FE07', 'front-end development', '4 mesi');
    var corso2 = new Corsi('BE07', 'back-end development', '3 mesi');
    var corso3 = new Corsi('FS07', 'full-stack development', '4 mesi');

    $('#corso1').html(corso1.corsoCompleto()).css('color', 'black', 'font-size', '20px');
    $('#corso2').html(corso2.corsoCompleto()).css('font-size', '20px');
    $('#corso3').html(corso3.corsoCompleto()).css('font-size', '20px');

});