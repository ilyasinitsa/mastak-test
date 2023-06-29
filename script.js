$(document).ready(function () {
    $('.prmix-ebook-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<img class="prev" src="img/prev.svg">',
        nextArrow: '<img class="next" src="img/next.svg">',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});