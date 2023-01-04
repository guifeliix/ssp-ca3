/*!
* Start Bootstrap - Bare v5.0.8 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var gEntreeCount = 0;
function calculateBill(idMenuTable) {
    var fBillTotal = 0.0;
    var i = 0;
    var oTable = document.getElementById(idMenuTable);
    var aCBTags = oTable.getElementsByTagName('INPUT');
    for (i = 0; i < aCBTags.length; i++) {

        if (aCBTags(i).checked) {
            var oTR = getParentTag(aCBTags[i], 'TR');
            var oTDPrice = oTR.getElementsByTagName('TD')[2];
            fBillTotal += parseFloat(oTDPrice.firstChild.data);
        };

    };
    return Math.round(fBillTotal * 100.0) / 100.0;

};
function highlightZeroAlcohol(idTable, bShowZeroAlcohol) {

    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('TBODY')[0];
    var aTRs = oTBODY.getElementsByTagName('TR');

    for (i = 0; i < aTRs.length; i++) {

        if (aTRs[i].getAttribute('zero') && aTRs[i].getAttribute('zero') == "true") {

            if (bShowZeroAlcohol) {
                aTRs[i].getElementsByClassName.backgroundColor = "lightBlue";
            } else {
                aTRs[i].getElementsByClassName.backgroundColor = "";
            };

        };
    };
};

function getParentTag(oNode, sParentType) {


    var oParent = oNode.parentNode;
    while (oParent) {

        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;

    };
    return oParent;
};

window.addEventListener("load", function () {
    document.forms[0].txtBillAmt.value = calculateBill('menuTable');
    document.querySelector("#calcBill").addEventListener("click", function() {
        document.forms[0].txtBillAmt.value = calculateBill('menuTable');

    });
    document.querySelector("#showZero").addEventListener("click", function() {
        highlightZeroAlcohol('menuTable', this.checked);
    });
});
