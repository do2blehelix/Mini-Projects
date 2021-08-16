var ctc = document.getElementById("ctc").value;
var bonus = document.getElementById("bonus").value;
var retirals = document.getElementById("retirals").value;

var totsal = document.getElementById("totsal").value;
var basesalperc = document.getElementById("basesalperc").value;
var basesal = document.getElementById("basesal").value;
var addlsal = document.getElementById("basesal").value;

function onupdate(vol) {
    document.querySelector('#totsal').value = ctc-bonus-retirals;
    document.querySelector('#basesalperc').value = vol;
    document.querySelector('#basesal').value = vol*ctc/100;
    document.querySelector('#additional').value = totsal-basesal;
}

$("#ctc").on("input", function () {
    if ($("#ctc").val() != "") {
        terms = "Three year lease on " + $("#myInputText").val();
    } else terms = terms = "Three year lease on <car>";

    $("#contract").val(terms);
});