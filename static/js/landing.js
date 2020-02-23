function Carousel($el, cb=undefined) {
  const self = this;
  let interval = undefined;

  self.relativeChange = (value) => {
    const $images = Array.from($el.querySelectorAll('img'));
    const activeIndex = $images.findIndex(($el) => $el.classList.contains('active'));
    let nextIndex = activeIndex + value;

    // if higher than amount of images reset to zero
    if (nextIndex >= $images.length)
      nextIndex = 0;

    // if negative set to last image
    else if (nextIndex < 0)
      nextIndex = $images.length - 1;
    
    $images[activeIndex].classList.remove('active');
    $images[nextIndex].classList.add('active');

    if (typeof cb == 'function')
      cb();
  };

  self.next = () => self.relativeChange(1);
  self.start = (ms) => interval = setInterval(self.next, ms);

  if (typeof cb == 'function')
    cb();

  return self;
};


document.addEventListener('DOMContentLoaded', function(event) { 
  const $alt = document.querySelector("#altText");
  const carousel = new Carousel(document.querySelector('.carousel'), () => {
    $alt.textContent = document.querySelector('.carousel .active').alt;
  });
  carousel.start(5000);
});
