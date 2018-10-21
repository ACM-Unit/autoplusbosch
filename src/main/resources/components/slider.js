var vueSlider = new Vue({
    el: '#app',
    data: {name: "Slava",
        age: 35,
        banners: [
            {image: "../../static/img/slide01.jpg", textH: "Car service", text: "Up to 50% Discount", button: "Shop Now" },
            {image: "../../static/img/banner02.jpg", textH: "HOT DEAL", text: "Up to 50% OFF", button: "Shop Now" },
            {image: "../../static/img/banner03.jpg", textH: "New Product", text: "Collection", button: "Shop Now" }
        ]}
});