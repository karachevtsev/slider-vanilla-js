function Slider(selector, options) {

    // DOM Nodes
    var sliderNode       = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'),
        prevSliderNode   = sliderNode.querySelector('.slider__pager_previous'),
        nextSliderNode   = sliderNode.querySelector('.slider__pager_next'),
        paginationNode   = sliderNode.querySelector('.slider__pagination');

    // Local variables
    var currentSlideIndex = options.currentSlide || 0,
        imagesCount       = sliderImagesNode.children.length,
        slideSize         = sliderImagesNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'];

    // Controllers
    this.prevSlide = function() {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return;
        };
        currentSlideIndex--;
    };

    this.nextSlide = function() {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        };
        currentSlideIndex++;
    };

};
