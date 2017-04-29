"use strict";
$(document).ready(function() {


    var arrCita = [
        ["balblblblblblblblblblblblblblblbllblblb", "alice"],
        ["cacacacacacacaacaacacacacacacacacacacac", "bob"],
        ["wfwfwfwfwfwfwwfwfwfwfwwfwfwfwfwfwfwfwfw", "carol"]
    ];


    $("#nextCit").click(function() {

        var l = arrCita.length;

        if (l === 0) {
            window.alert("Citazioni terminate!!");
        } else {
            var indice = (Math.floor((Math.random() * 10))) % arrCita.length;
            var testo = arrCita[indice][0];
            var autore = arrCita[indice][1];
            window.alert("Autore = " + autore);
            arrCita.splice(indice, 1);

            $("#citazione").text(testo);
            $("#autore").text(autore);
            
            $('#bottone').parent('a').attr('href', 'https://twitter.com/intent/tweet?text='+testo );


        }

    });

});
