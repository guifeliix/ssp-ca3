window.onload = populateSelect();

function populateSelect() {
    $.getJSON("beermenu.json", function (json) {
        let ddlbeerlist = document.getElementById('beerlist');
        ddlbeerlist.innerHTML = "<option selected disabled>Choose your beer type</option>"

        for (let i = 0; i < json.beertype.length; i++) {
            ddlbeerlist.innerHTML = ddlbeerlist.innerHTML + '<option value="' + json.beertype[i].type + '">' + json.beertype[i].type + '</option>';
        }
    });
}

function populateTypeBeer() {
    $.getJSON("beermenu.json", function (json) {
        let ddlbeerlist = document.getElementById('beerlist').selectedIndex - 1;

        if (ddlbeerlist == -1)
            return;

        let ddloptionbeerlist = document.getElementById('optionbeerlist');

        for (let i = ddloptionbeerlist.options.length; i >= 0; i--) {
            ddloptionbeerlist.remove(i);
        }

        for (let i = 0; i < json.beertype[ddlbeerlist].beer.length; i++) {
            ddloptionbeerlist.innerHTML = ddloptionbeerlist.innerHTML + '<option value="' + json.beertype[ddlbeerlist].beer[i].price + '">' + json.beertype[ddlbeerlist].beer[i].listing + '</option>';
        }
    });
}

function addSelected() {
    let ddloptionbeerlist = document.getElementById('optionbeerlist');
    let index = ddloptionbeerlist.selectedIndex;

    var amount = document.getElementById('txtAmount').value;
    var listing = ddloptionbeerlist[index].text;
    var price = ddloptionbeerlist[index].value;
}