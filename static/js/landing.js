const Carousel = {
  create: ($el) => {
    this.$el = $el;
  },
};

document.addEventListener('DOMContentLoaded', function(event) { 
  Carousel.create(document.querySelector('.carousel'));
});
