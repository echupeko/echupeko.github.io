Vue.component('catalogdown', {
    props: ['cat'],
    data: function () {
        return {
            visibleDescription: false,
        }
    },
    // language=HTML
    template: `
        <div class="card d-flex flex-column justify-content-center align-items-center" style="width: 18rem;">
            <h4 class="card-title">Мёд {{cat.title}}</h4>
            <div class="card-head d-flex flex-column justify-content-center align-items-center w-100 pb-0">
                <img :src="this.$srcHoney + cat.title + '.jpg'" class="card-img-top" :alt="'Мёд' + cat.title">
                <div :class="{'info-icon-start': !visibleDescription, 'info-icon-close': visibleDescription}"
                     class="info-icon" @click="openDescription(cat.id)"></div>
                <p class="info-text" v-if="visibleDescription">{{cat.description}}</p>
            </div>
        </div>`,
    methods: {
        openDescription: function (id) {
            this.visibleDescription = !this.visibleDescription;
        }
    }
});

let catalogBlockDown = new Vue({
    el: "#catalogBlockDown",
    data: {
        newHoneyVueList: newHoneyList,
        title: 'catalogItem',
    },
});

