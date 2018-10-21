var responsiveNav = $('#responsive-nav'),
    catToggle = $('#responsive-nav .category-nav .category-header'),
    catList = $('#responsive-nav .category-nav .category-list'),
    menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

catToggle.on('click', function() {
    menuList.removeClass('open');
    catList.toggleClass('open');
});

menuToggle.on('click', function() {
    catList.removeClass('open');
    menuList.toggleClass('open');
});

$(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
        if (responsiveNav.hasClass('open')) {
            responsiveNav.removeClass('open');
            $('#navigation').removeClass('shadow');
        } else {
            if ($(event.target).closest('.nav-toggle > button').length) {
                if (!menuList.hasClass('open') && !catList.hasClass('open')) {
                    menuList.addClass('open');
                }
                $('#navigation').addClass('shadow');
                responsiveNav.addClass('open');
            }
        }
    }
});
var vue = new Vue ({
    el: '#app',
    name: 'App',
    data: {
        name: 'slava', age: '35', categories: [
            {name: 'ДВИГАТЕЛЬ',
                row: [
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes']},
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes']}
                ], picture :'../../static/img/banner05.jpg'},
            {name: 'ТРАНСМИССИЯ',
                row: [
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes']},
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes']},
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes']}
                ], picture:null},
            {name: 'ПОДВЕСКА И РУЛЕВОЕ УПРАВЛЕНИЕ', row:null, picture:null},
            {name: 'ТОРМОЗА', row:null, picture:null},
            {name: 'ТОПЛИВНАЯ СИСТЕМА', row:null, picture:null},
            {name: 'ЭЛЕКТРИКА И ЗАЖИГАНИЕ', row:null, picture:null},
            {name: 'СИСТЕМЫ ОТОПЛЕНИЯ И ОХЛАЖДЕНИЯ', row:null, picture:null},
            {name: 'ВЫХЛОПНАЯ СИСТЕМА', row:null, picture:null},
            {name: 'СИСТЕМА ОЧИСТКИ ОКОН', row:null, picture:null},
            {name: 'ФИЛЬТРЫ', row:null, picture:null},
            {name: 'КУЗОВНЫЕ ДЕТАЛИ И СОСТАВЛЯЮЩИЕ', row:null, picture:null},
            {name: 'ОПТИКА И СВЕТ', row:null, picture:null},
            {name: 'ШИНЫ', row:null, picture:null}
        ],
        services: [{name: 'АВТОСЕРВИС', row: [{cell:['Women’s Clothing',
                    'Men’s Clothing',
                    'Phones & Accessories',
                    'Jewelry & Watches',
                    'Bags & Shoes'], picture:null},
                {cell:['Women’s Clothing',
                        'Men’s Clothing',
                        'Phones & Accessories',
                        'Jewelry & Watches',
                        'Bags & Shoes'], picture:null},
                {cell:['Women’s Clothing',
                        'Men’s Clothing',
                        'Phones & Accessories',
                        'Jewelry & Watches',
                        'Bags & Shoes'], picture:null}]},
            {name: 'ШИНОМОНТАЖ&БАЛАНСИРОВКА', row: [{cell:['Women’s Clothing',
                        'Men’s Clothing',
                        'Phones & Accessories',
                        'Jewelry & Watches',
                        'Bags & Shoes'], picture:null},
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes'], picture:null},
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes'], picture:null}]},
            {name: 'КОРРЕКТИРОВКА СВЕТА ФАР', row: [{cell:['Women’s Clothing',
                        'Men’s Clothing',
                        'Phones & Accessories',
                        'Jewelry & Watches',
                        'Bags & Shoes'], picture:null},
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes'], picture:null},
                    {cell:['Women’s Clothing',
                            'Men’s Clothing',
                            'Phones & Accessories',
                            'Jewelry & Watches',
                            'Bags & Shoes'], picture:null}]},
            {name: 'CAFE STATION', row:null, picture:null}
        ]}
});