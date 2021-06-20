Vue.component('slider-item', {
    props: ['slide'],
    template: `
    <div class="carousel-item h-100" :class="{'active': !slide.id}">
       <img :src="this.$srcCarousel+slide.id+'.png'" class="d-block h-100" :alt="slide.title">
       <div class="carousel-caption d-flex flex-column align-items-center">
           <h5>{{slide.title}}</h5>
           <p>{{slide.description}}</p>
       </div>
    </div>`
});

let carousel = new Vue({
    el: "#carouselExampleCaptions",
    data: {
        isActive: true,
        title: 'sliderItems',
        sliderList: carouselList
    }
});