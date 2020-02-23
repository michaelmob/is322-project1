function Carousel($el) {
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
  };

  self.next = () => self.relativeChange(1);
  self.start = (ms) => interval = setInterval(self.next, ms);

  return self;
}

document.addEventListener('DOMContentLoaded', function(event) { 
  const carousel = new Carousel(document.querySelector('.carousel'));
  carousel.start(10000);
});
