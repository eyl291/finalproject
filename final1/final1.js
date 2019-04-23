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

let pos = 0;


function draw() {
  context.font = '44px Helvetica';
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.strokeStyle = 'black';
  context.strokeText('new york city.', width/2, height/2);

};

setup();
draw();

