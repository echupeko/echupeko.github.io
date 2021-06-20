Vue.component('item', {
    props: ['cat', 'products'],
    data: function () {
        return {
            idSale: saleHoney,
            visibleDescription: false,
            cntVisibleProd: 0,
            product: null,
            sale: false
        }
    },
    // language=HTML
    template: `
        <div class="card d-flex flex-column justify-content-center align-items-center" style="width: 18rem;">
            <h4 class="card-title">Мёд {{cat.name}}</h4>
            <div class="card-head d-flex flex-column justify-content-center align-items-center w-100 pb-0">
                <img :src="this.$srcHoney + cat.name + '.jpg'" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
                <div :class="{'info-icon-start': !visibleDescription, 'info-icon-close': visibleDescription}"
                     class="info-icon" @click="openDescription(cat.id)"></div>
                <p class="info-text" v-if="visibleDescription">{{cat.description}}</p>
            </div>
            <div class="card-body d-flex flex-column justify-content-center align-items-center pb-0">
                <div class="slide-bar w-100 d-flex flex-row justify-content-sm-between align-items-center">
                    <div class="slide-point"></div>
                    <div v-for="prod in products" v-if="prod.visible" class="slide-item"
                         @click="sliders(cat.id, prod.id)">
                        {{prod.count}} л.
                    </div>
                </div>
                <div class="w-100 p-3 d-flex flex-row justify-content-around">
                    <h5 class="card-text">{{updatePrice(cat,product)}} Р.</h5>
                    <a class="btn btn-warning" @click="$emit('click', cat.id, product.id, 1, sale)">В корзину</a>
                </div>
            </div>
        </div>`,
    created: function () {
        this.products.forEach(item => {
            if (item.visible) {
                if (this.cntVisibleProd < 1) this.product = this.products[item.id];
                this.cntVisibleProd++;
            }
        })
    },
    mounted: function () {
        var slideBar = document.getElementsByClassName('slide-bar')[this.cat.id];
        slideBar.getElementsByClassName('slide-point')[0].style.width = 100 / this.cntVisibleProd + "%";
        let itemList = slideBar.getElementsByClassName('slide-item');
        for (let i = 0; i < itemList.length; i++) {
            itemList[i].style.width = 100 / this.cntVisibleProd + "%";
        }
    },
    methods: {
        updatePrice: function (honey, product) {
            let price = 0;
            if(this.idSale[0] === honey.id && this.idSale[1] === product.id) {
                price = product.salePrice;
                this.sale = true;
            }
            else {
                this.sale = false;
                price = product.price;
            }
            return price;
        },
        sliders: function (id, count) {
            this.$emit('slide-to', id, count)
        },
        openDescription: function (id) {
            this.visibleDescription = !this.visibleDescription;
        }
    }
});

let catalogBlock = new Vue({
    el: "#catalogBlock",
    data: {
        idSale: saleHoney,
        title: 'catalogItem',
        honeyVueList: catalogList,
        basketCat: basketOrder
    },
    methods: {
        orderAdd: function (id, idProd, c, sale) {
            let producte = this.honeyVueList[id].products[idProd];
            price = (sale ? producte.salePrice : producte.price);
            for (let i = 0; i < this.basketCat.length; i++) {
                if (this.basketCat[i].honey !== this.idSale[0] && this.basketCat[i].prod !== this.idSale[1] || sale !== this.basketCat[i].sale) {
                    if (this.basketCat[i].honey === id && this.basketCat[i].prod === idProd && this.basketCat[i].sale === sale) {
                        producte.quantity += c;
                        navBar.addedAmount(price * c);
                        return;
                    }
                }
                else {
                    $('#element').toast({autohide: false});
                    $('#element').toast('show');
                    $('#element').removeClass('d-none');
                    // alert("Данная акция относится на одну единицу товара");
                    return;
                }
            }
            producte.quantity += c;
            navBar.addedAmount(price * c);
            orderItem = {
                id: quantityGlobal - 1,
                honey: id,
                prod: idProd,
                sale: sale
            }
            this.basketCat.push(orderItem);
        },
        upDownCount: function (id, idProd, c) {
            let producte = this.honeyVueList[id].products[idProd];
            producte.quantity += c;
            navBar.addedAmount((sale ? producte.salePrice : producte.price) * c);
        },
        slideTo: function (id, count) {
            let cntVisibleProd = 0;
            this.$children[id].products.forEach(item => {
                if (item.visible && item.id <= count) cntVisibleProd++;
            })
            document.getElementsByClassName('slide-point')[id].style.transform = "translatex(" + (100 * (cntVisibleProd - 1)) + "%)";
            this.$children[id].product = this.$children[id].products[count];
        }
    }
});
