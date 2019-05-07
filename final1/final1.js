const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
let w = window.innerWidth;

let position1 = 0;
let position2 = w;
let animation = setInterval(slide, 10);
function slide() {
  if (position1 < w) { 
    position1 += 1; 
    img1.style.right = position1 + 'px'; 
    img1.style.left = position1 + 'px'; 
  } else {
    position1 = 0;
  }
}


const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');

let width;
let height;


function setup() {
  width = canvas.width;
  height = canvas.height;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
        
  let scale = window.devicePixelRatio;
  canvas.width = width * scale;
  canvas.height = height * scale;

  context.scale(scale, scale);
}


function draw() {
  context.font = '44px Helvetica';
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.strokeStyle = 'black';
  context.strokeText('new york city.', width/2, height/2);

};

setup();
draw();

