AOS.init();


let video = document.querySelector('video');
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');

button1.addEventListener('click', function() {
  document.getElementById('vid1').src = 'video/nyvid2.mp4';
});

button2.addEventListener('click', function() {
  document.getElementById('vid1').src = 'video/nyvid1.mp4';
});

const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');
      
let width;
let height;

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  var scale = window.devicePixelRatio;
  canvas.width = width * scale;
  canvas.height = height * scale;

  context.scale(scale, scale);
}

let color = 0;

function draw() {
  context.clearRect(0, 0, width, height);

  let path = new Path2D("M25.09,24.19c0.42-5.66-3.53-12.32-8.77-14.46c-4.72-1.93-10.23,0.71-9.41,6.06C7.84,21.85,13,27.54,17,31.85c3.84,4.14,8.77,9.19,14.33,10.9c0.2,0.06,0.47-0.04,0.56-0.23c2.31-4.54,4.23-9.3,5.9-14.1c1.83-5.26,4.06-11.71,2.8-17.35c-1.05-4.74-6.79-5.27-10.13-2.42c-4.44,3.79-5.69,10.47-6.38,15.97c-0.08,0.64,0.92,0.63,1,0c0.5-3.96,1.36-7.96,3.18-11.53c1.67-3.28,6.5-7.44,10.12-4.15c2.44,2.21,1.52,7.09,1.02,9.86c-0.76,4.19-2.14,8.27-3.63,12.25c-1.24,3.3-2.62,6.56-4.14,9.74c-0.27,0.56-0.55,0.83-0.31,0.91c-0.68-0.21-1.33-0.54-1.96-0.87c-1.72-0.9-3.3-2.08-4.82-3.29c-6.42-5.1-13.2-12.13-16.11-19.94c-0.59-1.59-1.03-3.51-0.28-5.12c1.17-2.51,5.18-2.58,7.42-1.96c5.15,1.42,8.89,8.57,8.51,13.66C24.04,24.83,25.04,24.83,25.09,24.19L25.09,24.19z");
  context.fillStyle = 'hsla(' + color + ', 100%, 50%, 0.6)'

  context.save();

  context.scale(1.5, 1.5);
  context.translate(250, 200);

  context.fill(path); 

  context.restore(); 
   

  context.font = '80px Helvetica';
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.strokeStyle = 'white';
  context.strokeText('eileen lee.', width/2, height/2);



  if (color >= 360) {
    color = 0;
  }

  // color incrementation
  color += 0.5;


  requestAnimationFrame(draw);     

}

   
setup();
draw();











    
