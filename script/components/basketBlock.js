Vue.component('basket-item', {
    props: ['cat'],
    data: function () {
        return {
            cntVisibleProd: 0,
            catt: catalogList,
            honey: null,
            product: null
        }
    },
    template: `
        <div class="card d-flex flex-row justify-content-center align-items-center p-2 pl-3" style="width: 18rem; border-radius: 15px">
           <h6 class="card-title w-50">Мёд {{honey.name}} {{product.count}} л.</h6>
           <img src="resource/bochka.png" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
           <div class="card-body d-flex flex-row justify-content-between align-items-center w-50 p-0">
               <div class="d-flex flex-row ">
                   <input class="input" type="submit" value="-" @click="uppp(cat.honey, cat.prod, -1)">
                   <input v-bind:id="'honey' + cat.id" class="input" step="1"  min="1" max="20" type="number" v-model="product.quantity">
                   <input class="input" type="submit" value="+"  @click="uppp(cat.honey, cat.prod, 1)">
               </div>
               <p class="card-text m-0">{{(cat.sale? product.salePrice : product.price) * product.quantity}} руб.</p>
               <div @click="removeOrder(cat.honey, cat.prod)"> 
                   <svg style="margin-left: 20px" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                       <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                   </svg>
               </div>
           </div>
        </div>`,
    created: function () {
        this.honey = this.catt[this.cat.honey];
        this.product = this.honey.products[this.cat.prod];
    },

    methods: {
        uppp: function (id, idProd, count) {
            this.$emit('up-down', id, idProd, count)
        },
        removeOrder: function (id, idProd) {
            this.$emit('remove', id, idProd)
        },
    }
});
let basketCatalog = new Vue({
    el: "#basketForm",
    data: {
        styleObject: {
            top: header.clientHeight + 20 + 'px'
        },
        amount: navBar.amount,
        isActive: visibleMenu,
        basketCatalog: basketOrder,
        phone: ''
    },
    updated: function () {
        this.amount = navBar.amount;

    },
    methods: {
        openBasket() {
            navBar.openBasket()
        },
        upDownCount: function (id, idProd, c) {
            catalogBlock.upDownCount(id, idProd, c);
            this.amount = navBar.amount;
        },
        removeOrder: function (id, idProd) {
            console.log(id, catalogList[id].name, catalogList[id].products[idProd].count)
            let index = this.basketCatalog.find(item => item.honey == id && item.prod == idProd);
            catalogList[id].products[idProd].quantity = 0;
            this.basketCatalog.splice(index, 1);
            navBar.updateAmount();
        },
        changePhone: function () {
            this.phone = document.getElementById('phone').value;
            console.log(this.phone);
        },
        sendPhone() {
            let data = this.phone;
            let orderPost = [];
            this.basketCatalog.forEach(item => {
                let str = "Мёд " + catalogList[item.honey].name + catalogList[item.honey].products[item.prod].count + "л.";
                orderPost.push(str);
            });

            $.ajax({
                url: 'script/action.php',
                data: "data=" + data + "&honeyArr=" + this.basketCatalog,
                type: "POST",
                success: function (json) {
                    console.log('Success');
                    document.getElementById('phone').value = ''
                    //дописать информацию о том что заявка на заказ была отправлена
                }
            });
        }
    }
});
