"use strict";
$(document).ready(function() {

	/*array contenente le citazioni */
    var arrCita = [
        ["balblblblblblblblblblblblblblblbllblblb", "alice"],
        ["cacacacacacacaacaacacacacacacacacacacac", "bob"],
        ["wfwfwfwfwfwfwwfwfwfwfwwfwfwfwfwfwfwfwfw", "carol"]
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
            $(this).parent().prev().find('span').text(4-l);
            $('#shareTwitter').attr({ 'href': 'https://twitter.com/intent/tweet?text=' + testo, 'target': '_blank' });

        }

    });

});
