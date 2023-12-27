
function showgiohang() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";

    for (let i = 0; i < giohang.length; i++) {
        thanhTien=(parseInt(giohang[i][2],10)*1);
        ttgh +=
            '<tr>' +
            '<td class="xoasp"><i class="far fa-times-circle"></i></td>'+
            '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td class="dongia">' + giohang[i][2] + '</td>' +
            '<td class="soluong"><input type="number" value="1" min="1"></td>' +
            '<td class="tongtien">'+thanhTien+'</td>' +
            '</tr>';
    }

    document.getElementById("mycart").innerHTML = ttgh;
}


function tinhTongTienDH(){
    var tongtiendh=0;

    $("#mycart tr").each(function(){
        var dongia = $(this).find('.dongia').text(); 
        var soluong = $(this).find('.soluong input').val();

        // Chuyển đổi giá trị sang số
        dongia = parseInt(dongia,10);
        soluong = parseInt(soluong);


        var thanhTien = (dongia * soluong);
        $(this).find('.tongtien').text(thanhTien);

        tongtiendh = tongtiendh + thanhTien;

    });
    $("#tong-tien-don-hang").text(tongtiendh);

    
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
