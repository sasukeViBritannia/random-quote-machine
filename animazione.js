"use strict";
$(document).ready(function() {

    var flag = 0;

    var arrCita = [
        ["balblblblblblblblblblblblblblblbllblblb", "alice"],
        ["cacacacacacacaacaacacacacacacacacacacac", "bob"],
        ["wfwfwfwfwfwfwwfwfwfwfwwfwfwfwfwfwfwfwfw", "carol"]
    ];


    $("#nextCit").click(function() {

        var l = arrCita.length;

        if (flag > 0 && l > 0) {
            $('#tw').empty();
        }
        flag++;
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

            window.twttr.widgets.createShareButton('', document.getElementById("tw"), { text: $('#citazione').text(), size: 'dafault' });

        }

    });

});
