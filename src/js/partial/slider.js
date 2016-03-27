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

    // Controllers foк slider
    this.prevSlide = function() {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return;
        };

        currentSlideIndex--;
        console.log(currentSlideIndex);
    };

    this.nextSlide = function() {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        };

        currentSlideIndex++;
        console.log(currentSlideIndex);
    };

    prevSliderNode.onclick = function(e) {
        e.preventDefault();
        _self.prevSlide();
        // console.log('Prev');
        _self._render();
    };

    nextSliderNode.onclick = function(e) {
        e.preventDefault();
        _self.nextSlide();
        // console.log('Next');
        _self._render();
    };

    // Render method
    this._render = function() {
        var directionStyle = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';
        sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';
        // console.log('Render works!');
        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
         // Controllers visibility:
        // prevSliderNode.style.visibility = (currentSlideIndex === 0) ? 'hidden' : '';
        // nextSliderNode.style.visibility = (currentSlideIndex === imagesCount - 1) ? 'hidden' : ''
    };

    // Paginator handling
    paginationNode.onclick = function(e) {
        e.preventDefault();
        // Use event delegation
        var link = e.target;
        if (link.tagName != 'A') {
            return;
        };

        currentSlideIndex = +link.dataset['slider__item'];
        _self._render();
        // console.log(e.target);
    };

    // Options handling
    if (options.changeInterval) {
        setInterval(function() {
            _self.nextSlide();
            _self._render();
        }, options.changeInterval)
    };
    if (options.direction === 'vertical') {
        sliderImagesNode.style.whiteSpace = 'normal';
    };

    sliderImagesNode.style.transition = 'margin ease-out .5s';
};
