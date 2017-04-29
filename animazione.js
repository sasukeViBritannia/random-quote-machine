"use strict";
$(document).ready(function() {

	/*array contenente le citazioni */
    var arrCita = [
    ['Nulla si crea, nulla si distrugge, tutto si trasforma.', 'Antoine Lavoisier'],
    ['La mia libertà finisce quando inizia la vostra.', 'Martin Luther King'],
    ['Dai diamanti non nasce niente, dal letame nascono i fiori.', 'Fabrizio De Andre'],
    ['Qualsiasi cosa tu faccia sarà insignificante, ma è molto importante che tu la faccia.', 'Gandhi'],
    ["Uccidete pure me, ma l'idea che è in me non l'ucciderete mai.", 'Giacomo Matteotti'],
    ['Rigore è quando arbitro fischia.', 'Vujadin Boskov'],
    ['Veni, vidi, vici.', 'Giulio Cesare'],
    ['La mente p come un paracadute, funziona solo se si apre.', 'Albert Einstein'],
    ['La verità si ritrova sempre nella semplicità, mai nella confusione.', 'Isaac Asimov'],
    ["Dove c'è una grande volontà non possono esserci grandi difficoltà.", "Niccolò Macchiavelli"]
    ];

    $("#nextCit").click(function() {

        var l = arrCita.length;

        if (l === 0) {
            window.alert("Citazioni terminate!!");	/*avviso di citazioni terminate*/
        } else {
            var indice = (Math.floor((Math.random() * 10))) % arrCita.length;	/*generazione casuale di un indice per l'array*/
            var testo = arrCita[indice][0];
            var autore = arrCita[indice][1];
            /*window.alert("Autore = " + autore);*/
            arrCita.splice(indice, 1);	/*estrazione dell'elemento dall'array*/

            $("#citazione").text(testo);
            $("#autore").text(autore);
            $(this).parent().prev().find('span').text(11-l);
            $('#shareTwitter').attr({ 'href': 'https://twitter.com/intent/tweet?text=' + testo, 'target': '_blank' });

        }

    });

});
