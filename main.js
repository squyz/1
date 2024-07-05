$('.slider').slick({
    prevArrow: '<img class="slider-btn btn-prev" src="/img/prev.svg" alt="">',
    nextArrow: '<img class="slider-btn btn-next" src="/img/next.svg" alt="">',
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
})