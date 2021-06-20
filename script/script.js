const btnToUp = document.getElementById('btn-to-up');
const hotItem = document.getElementById('hotItem');
const basketForm = document.getElementById('basketForm');
const header = document.querySelector('header');
const saleHoney= [2,1];
//Vue.prototype.$saleHoney = [2,1];  // id мёда, id фасовки
Vue.prototype.$srcCertificate = 'resource/certificates/';
Vue.prototype.$srcHoney = 'resource/honey-types/';
Vue.prototype.$srcCarousel = 'resource/carousel/';
Vue.prototype.$srcWorkMoments = 'resource/working-moments/';

let visibleMenu = 1;
let quantityGlobal = 0;
let amountGlobal = 0;
let clientHeight = window.innerHeight;
let basketOrder = [];

$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#phone").mask("+7(999) 999-9999");
});

window.onload = function () {

    // let url = "D:/Phone.xlsx";
    // console.log(url);
    //
    // var req = new XMLHttpRequest();
    // req.open("GET", url, true);
    // req.responseType = "arraybuffer";
    //
    // req.onload = function(e) {
    //     var data = new Uint8Array(req.response);
    //     var workbook = XLSX.read(data, {type:"array"});
    //     /* DO SOMETHING WITH workbook HERE */
    // }
    //
    // req.send();

    // let hotHoney = catalogList[saleHoney[0]].products[saleHoney[1]];
    //         hotBlock.title = catalogList[saleHoney[0]].name;
    //         hotBlock.oldPrice = hotHoney.price;
    //         hotBlock.sale = hotHoney.salePrice;
    //         hotBlock.count = hotHoney.count;
    //         hotBlock.honey = item.id;

    document.getElementById('carouselExampleCaptions').style.marginTop = header.clientHeight + 'px';
    basketForm.style.top = header.clientHeight + 'px';
}

window.onresize = function () {
    document.getElementById('carouselExampleCaptions').style.marginTop = header.clientHeight + 'px';
    basketForm.style.top = header.clientHeight + 'px';
}

window.onscroll = function () {
    if (pageYOffset > 400) {
        btnToUp.style.opacity = '1';
        btnToUp.style.cursor = 'pointer';
    } else {
        btnToUp.style.opacity = '0';
        btnToUp.style.cursor = 'auto';
    }
}

let menuBar = () => {
    const menu = document.getElementById('menu');
    if (window.matchMedia('(max-width: 1010px)').matches) {
        if (visibleMenu) {
            menu.classList.add('active');
            visibleMenu--;
        } else {
            menu.classList.toggle('active');
            visibleMenu++;
        }
    }
}

let addedOrder = (id) => {
    orderItem.id = basketOrder.length;
    orderItem.honey = id;
    orderItem.count = document.getElementById('honey' + id).value;
    orderItem.inBasket = !orderItem.inBasket;
    basketOrder.push(orderItem);
}

let updateTopHeader = () => {
    basketForm.style.top = header.clientHeight + 'px';
}

function initMap() {
    var coordinates = {lat: 51.692655, lng: 83.358092},
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 10,
            disableDefaultUI: true,
            scrollwheel: true
        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });
}