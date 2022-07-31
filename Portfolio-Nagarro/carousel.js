const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gi');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gi1');
      el.classList.remove('gi2');
      el.classList.remove('gi3');
      el.classList.remove('gi4');
      el.classList.remove('gi5');
      el.classList.remove('gi6');
      el.classList.remove('gallery-item-7');
      el.classList.remove('gallery-item-8');
      el.classList.remove('gallery-item-9');
      el.classList.remove('gallery-item-10');
      el.classList.remove('gallery-item-11');
      el.classList.remove('gallery-item-12');
      el.classList.remove('gallery-item-13');
      el.classList.remove('gallery-item-15');
      el.classList.remove('gallery-item-16');
      el.classList.remove('gallery-item-17');
      el.classList.remove('gallery-item-18');
      el.classList.remove('gallery-item-19');
      el.classList.remove('gallery-item-20');
      el.classList.remove('gallery-item-21');
      el.classList.remove('gallery-item-22');
      el.classList.remove('gallery-item-23');
      el.classList.remove('gallery-item-24');
    });

    this.carouselArray.slice(0, 24).forEach((el, i) => {
      el.classList.add(`gi${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {

    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    
    this.updateGallery();
  }

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
// exampleCarousel.setNav();
exampleCarousel.useControls();
