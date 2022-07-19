const nextBtn = document.querySelector('.NextBtn');
const prevBtn = document.querySelector('.PrevBtn');
const container = document.querySelector('.images');

var counter = 0;

nextBtn.addEventListener('click',nextImg);
prevBtn.addEventListener('click',prevImg);

function nextImg() {
  container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});

  if (counter === 3) {
    counter=-1;
  }
  counter++;
  console.log(counter);
  container.style.backgroundImage = `url(img/csgo-${counter}.png)`
}

function prevImg() {
  container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
  if (counter === 0) {
    counter=4;
  }
  counter--;
  container.style.backgroundImage = `url(img/csgo-${counter}.png)`
}