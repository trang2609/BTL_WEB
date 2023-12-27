/*function showgiohang(){
    var gh=sessionStorage.getItem("giohang");
    var giohang=JSON.parse(gh);
    var ttgh="";
    for (let i = 0; i<giohang.length;i++){
        var tt=parseInt(giohang[i][2])*1;
        ttgh+='<tr>'+
                    '<td>'+(i+1)+'</td>'+
                    '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
                    '<td>'+giohang[i][1]+'</td>'+
                    '<td>'+giohang[i][2]+'</td>'+
                    '<td>'+1+'</td>'+
                    '<td>'+tt+'000</td>'+
                '</tr>';
}
document.getElementById("mycart").innerHTML=ttgh;
}*/




// cart.js

// Mã JavaScript hiện tại của bạn...
/*

function showgiohang() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";

    for (let i = 0; i < giohang.length; i++) {
        var soLuongInput = '<input type="number" value="1" min="1" onchange="updateQuantity(' + i + ', this.value)">';
        var tt = (giohang[i][2]) * 1;
        ttgh +=
            '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>'+giohang[i][2]+'</td>'+
            '<td>'+soLuongInput+'</td>' +
            '<td>' + tt + '</td>' +
            '</tr>';
    }

    document.getElementById("mycart").innerHTML = ttgh;


    

    // Lắng nghe sự kiện khi số lượng thay đổi
    var quantityInputs = document.getElementsByClassName("quantity-input");

    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("input", function (event) {
            var index = event.target.dataset.index;
            giohang[index][3] = event.target.value; // Cập nhật số lượng trong giỏ hàng
            tt= parseInt(giohang[i][2]) * giohang[index][3];
            showgiohang(); // Hiển thị lại giỏ hàng sau khi cập nhật
            updateTotal(); // Cập nhật tổng giá trị đơn hàng
        });
    }

    // Cập nhật tổng giá trị đơn hàng ban đầu
    updateTotal();
}

// Hàm cập nhật giá tổng
function updateTotal() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var tamtinh = 0;

    for (let i = 0; i < giohang.length; i++) {
        var soLuong = parseInt(giohang[i][3]);
        var giaSanPham = giohang[i][2]; // Giả sử giá mỗi sản phẩm là 10,000 VND
        var thanhTien = soLuong * giaSanPham;

        tamtinh += thanhTien;
    }

    // Cập nhật giá tạm tính
    document.getElementById("subtotal").innerHTML = `
        <h3>Tổng giá trị đơn hàng</h3>
        <table>
            <tr>
                <td>Tạm tính</td>
                <td>${tamtinh.toLocaleString()} VND</td>
            </tr>
            <tr>
                <td>Phí vận chuyển</td>
                <td>Miễn phí</td>
            </tr>
            <tr>
                <td><strong>Tổng cộng</strong></td>
                <td><strong>${tamtinh.toLocaleString()} VND</strong></td>
            </tr>
         </table>
         <button class="normal">Thanh toán</button>
    `;
}

// Gọi hàm showgiohang để khởi tạo
showgiohang();  */



function showgiohang() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";

    for (let i = 0; i < giohang.length; i++) {
        thanhTien=(parseInt(giohang[i][2],10)*1);
        ttgh +=
            '<tr>' +
            '<td class="xoasp"><i class="far fa-times-circle"></i></td>'+
          //  '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td class="dongia">' + giohang[i][2] + '</td>' +
            '<td class="soluong"><input type="number" value="1" min="1"></td>' +
            '<td class="tongtien">'+thanhTien+'</td>' +
            '</tr>';
    }

    document.getElementById("mycart").innerHTML = ttgh;
}

/*//tổng tiền mỗi dòng
    function tinhTongTien($dongHienTai) {
    var dongia = $dongHienTai.find('.dongia').text(); 
    var soluong = $dongHienTai.find('.soluong input').val();

    // Chuyển đổi giá trị sang số
    dongia = parseInt(dongia);
    soluong = parseInt(soluong);


    var thanhTien = (dongia * soluong).toFixed(3);
    $dongHienTai.find('.tongtien').text(thanhTien);
    
}*/


function tinhTongTienDH(){
    var tongtiendh=0;

    $("#mycart tr").each(function(){
        var dongia = $(this).find('.dongia').text(); 
        var soluong = $(this).find('.soluong input').val();

        // Chuyển đổi giá trị sang số
        dongia = parseInt(dongia,10);
        soluong = parseInt(soluong);

        console.log(dongia)


        var thanhTien = (dongia * soluong);//.toFixed(3);
        $(this).find('.tongtien').text(thanhTien);

        tongtiendh = tongtiendh + thanhTien;

    });
    $("#tong-tien-don-hang").text(tongtiendh);


    //console.log(tongtiendh);
    
}

// Tính tổng tiền ban đầu khi trang web được tải
$(document).ready(function() {
    tinhTongTienDH();
});

$(document).on('change','.soluong', function() {
    var myTr = $(this).closest('tr');
    //tinhTongTien(myTr);
    tinhTongTienDH();

})

$(document).on('click','.xoasp',function(e){
    e.preventDefault();
    var myTr = $(this).closest('tr');
    myTr.remove();

    // Sau khi xóa sản phẩm, cập nhật lại tổng tiền
    tinhTongTienDH();
})
