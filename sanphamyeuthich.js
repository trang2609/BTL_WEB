function showgiohang() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";

    for (let i = 0; i < giohang.length; i++) {
        ttgh +=
            '<tr>' +
            '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td class="dongia">' + giohang[i][2] + '</td>' +
            '<td class="xoasp"><i class="far fa-times-circle"></i></td>'+
            '<td class="themvaogio"><button class="add-to-cart-button">Thêm vào giỏ hàng</button></td>' +
            '</tr>';
    }

    document.getElementById("mycart").innerHTML = ttgh;
}