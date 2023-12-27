

$(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3, 
        },
        1000: {
            items: 6,
        }
    }
});

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);  
}


dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

console.log("Chiều rộng viewport: " + window.innerWidth);
console.log("Chiều cao viewport: " + window.innerHeight);

//khi ấn vào nút giỏ hàng thì tăng thêm đơn vị
var giohang = new Array();

        function themvaogiohang(x) {
            var pro = x.parentElement.children;
            var hinh = pro[0].src;
            var tensp = pro[1].children[1].innerText;
            var gia = x.parentElement.querySelector('h4 span').innerText; //lấy ra chuỗi 250.000
            var giasp = gia.replace(/[^\d]/g, ''); // lấy ra số 250000
           // var soluong = 1;
            var sp = new Array(hinh, tensp, giasp); //soluong);

            //ktra trong giỏ hàng
        var kt=0;
        for (let i=0;i<giohang.length;i++){
        if(giohang[i][1]==tensp){
        kt=1;
        break;
        }
        }
        if(kt==0){
            //thêm mới
            giohang.push(sp);
        }


            console.log(giohang);
            showcountsp();

            //lưu giỏ hàng lên sesionStorage 

            sessionStorage.setItem("giohang",JSON.stringify(giohang));
        }

        function showcountsp() {
            document.getElementById("countsp").innerHTML = giohang.length;
        }


