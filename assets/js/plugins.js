$(document).ready(function () {
    //featured items slider
    $(".carousel").owlCarousel({
        items: 3,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 2,
                margin: 30
            },
            800: {
                items: 1,
                nav: false
            },
            1025: {
                items: 4,
                nav: false,
                center: true,
            }
        }
    });

    // single item image slider
    $(".imgSlider").owlCarousel({
        items: 1,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        loop: true,
        center: true
    });
});






slider
var slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [5, 150],
    animate: true,
    tooltips: [true, true],
    step: 1,
    format: wNumb({
        decimals: 3,
        thousand: '.',
        prefix: '₦ '
    }),
    range: {
        min: 0,
        max: 200
    }
});

slider.noUiSlider.on("end", function (values, handle) {
    console.log(values[handle] + " " + handle);
});