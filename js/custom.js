const maincontent = new Swiper(".content-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",

    },
});


const mainproduct = new Swiper(".product-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
    },
});