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
    let total = price*amount;

    let table = document.getElementById("tdisplay");
    let row = table.insertRow(-1); 

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    c1.innerText = listing;
    c2.innerText = price;
    c3.innerText = amount;  
    c4.innerText = total;
}

function deleteRow(ele) {
    var table = document.getElementById('tdisplay');
    var rowCount = table.rows.length;
    if (rowCount <= 1) {
        alert("There is no row available to delete!");
        return;
    }
    if (ele) {
        ele.parentNode.parentNode.remove();
    } else {
        table.deleteRow(rowCount - 1);
    }
}

