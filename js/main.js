var background = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var btnbg = document.getElementById("btnbg");
btnbg.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * background.length-1);
    document.body.style.backgroundImage = "url(images/" + background[randomIndex] + ")"
});

function addCart(description, qty, price){
    // cari elemen tempat data akan dimasukkan
    var tableContent = document.getElementById('data')

    // buat row
    var tableRow = document.createElement('tr')

    // buat table data untuk description
    var descTable = document.createElement('td')
    // buat isi description
    var descData = document.createTextNode(description)
    // append description ke table data
    descTable.appendChild(descData)

    // buat table data untuk qty
    var qtyTable = document.createElement('td')
    // buat isi qty
    var qtyData = document.createTextNode(qty)
    // append qty ke table data
    qtyTable.appendChild(qtyData)

    // buat table data untuk price
    var priceTable = document.createElement('td')
    // buat isi price
    var priceData = document.createTextNode(price)
    // append price ke table data
    priceTable.appendChild(priceData)

    // buat table data untuk subtotal
    var subtotalTable = document.createElement('td')
    // buat isi subtotal
    var subtotalData = document.createTextNode(eval(qty+'*'+price));
    // append subtotal ke table data
    subtotalTable.appendChild(subtotalData)

    // append semua td ke tr
    tableRow.appendChild(descTable)
    tableRow.appendChild(qtyTable)
    tableRow.appendChild(priceTable)
    tableRow.appendChild(subtotalTable)

    // append tr ke tbody
    var valueDescription = document.getElementById("description");
    if(valueDescription.value !== '') {
        tableContent.prepend(tableRow);
    }

    // jumlahkan grand total berdasarkan isi subtotal
    var total = 0
    var check = document.getElementById('data')
    for(var i = 0; i < check.children.length; i++) {
        total += Number(check.children[i].children[3].innerHTML)
    }

    // update isi dari grandtotal
    document.getElementById('total').innerHTML = total;
}

// proses delete row
var tableContent = document.getElementById("data");
var total = document.getElementById("total");
var row = document.getElementById('data')
var deleted = document.getElementById('deleted');
deleted.addEventListener("click", function() {
    if(tableContent.children.length == 1) {
        total.innerHTML = 0;
    }
    // confirmasi delete
    if(confirm("Apakah anda yakin ingin menghapus?")) {
        tableContent.deleteRow(0);
        total.innerHTML -= Number(row.children[0].children[3].innerHTML)
    }
});


// cek jika value nya kosong, jika kosong akan muncul alert
var valueDescription = document.getElementById("description");
var valueQty = document.getElementById("qty");
var valueHarga = document.getElementById("price");
var add = document.getElementById("add");
add.addEventListener("click", function() {
    if(valueDescription.value == '') {
        alert("Masukan Nama Barang");
    }
    if(valueQty.value == 0) {
        alert("Masukan Quantity");
    }
    if(valueHarga.value == 0) {
        alert("Masukan Harga Barang");
    }
});