//First the variables our app is going to use need to be declared

//References to DOM elements
let $window = $(window);
let $document = $(document);

let $slidesContainer = $(".slides-container");
let $slides = $(".slide");
let $currentSlide = $slides.first();
let $lastSlide;

//Animating flag - is our app animating
let isAnimating = false;

//The height of the window

let pageHeight = $window.innerHeight();
let pageWidth = $window.innerWidth();

//Going to the first slide

TweenLite.set($currentSlide, { x: -pageWidth });

/* * Adding event listeners * */

$window.on("resize", onResize).resize();
$window.on("mousewheel DOMMouseScroll", onMouseWheel);

/* * When user scrolls with the mouse, we have to change slides * */

function onMouseWheel(event) {
  //Normalize event wheel delta

  let delta =
    event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

  //If the user scrolled up, it goes to previous slide, otherwise - to next slide

  if (delta < -0.5) {
    goToNextSlide();
  } else if (delta > 0.5) {
    goToPrevSlide();
  }
  //event.preventDefault();
}

/* * If there's a previous slide, slide to it * */

goToPrevSlide = () => {
  if ($currentSlide.prev().length) {
    goToSlide($currentSlide.prev());
  }
};

/* * If there's a next slide, slide to it * */

goToNextSlide = () => {
  if ($currentSlide.next().length) {
    goToSlide($currentSlide.next());
  }
};

/* * Actual transition between slides * */

goToSlide = $slide => {
  // If the slides are not changing and there's such a slide
  if (!isAnimating && $slide.length) {
    //setting animating flag to true
    isAnimating = true;

    $lastSlide = $currentSlide;
    $currentSlide = $slide;

    //Sliding to current slide
    //Animating last back

    let action = new TimelineMax({
      onComplete: onSlideChangeEnd,
      onCompleteScope: this
    })
      .to($currentSlide, 1, { x: -pageWidth, ease: Power2.easeIn })
      .to($lastSlide, 0.8, { x: +pageWidth });
  }
};

/*
 *   Once the sliding is finished, we need to restore "isAnimating" flag.
 *   You can also do other things in this function, such as changing page title * */
function onSlideChangeEnd() {
  isAnimating = false;
}

/* * When user resize it's browser we need to know the new height, so we can properly align the current slide * */

function onResize(event) {
  //This will give us the new height of the window
  var newPageHeight = $window.innerHeight();
  var newPageWidth = $window.innerWidth();

  /* * If the new height is different from the old height ( the browser is resized vertically ), the slides are resized * */

  if (pageHeight !== newPageHeight || pageWidth !== newPageWidth) {
    pageHeight = newPageHeight;
    pageWidth = newPageWidth;

    //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
    TweenLite.set([$slidesContainer, $slides], {
      height: pageHeight + "px",
      width: pageWidth + "px"
    });
    TweenLite.to($currentSlide, 0, { x: -pageWidth });
  }
}
