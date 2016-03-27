function Slider(selector, options) {

    var _self = this;
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
        // console.log(currentSlideIndex);
    };

    this.nextSlide = function() {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        };
        currentSlideIndex++;
        // console.log(currentSlideIndex);
    };

    prevSliderNode.onclick = function(e) {
        e.preventDefault();
        _self.prevSlide();
        // console.log('Prev');
        _self._render();
    };

    nextSliderNode.onclick = function(e) {
        e.preventDefault();
        _self.prevSlide();
        // console.log('Next');
        _self._render();
    };

    // Render method
    this._render = function() {
        var directionStyle = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';
        sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';
        console.log('Render works!');
    }
};
