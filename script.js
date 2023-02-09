/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


const submit = document.getElementById('submit');
let answer = document.getElementById('answer');
const target = "cooper cooper cooper";

function log(value, mode) {
  console.clear();
  
  if(mode)
    console.log(`Information: ${value}`);
  else
    console.log(`Input: ${value}`);
}

answer.addEventListener('input', function(event) {
  log(this.value, true);
  
  if(this.value == target) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true; 
  }
});

submit.addEventListener('click', function(event) {
  log("Button fired.", false);
});

var video = document.createElement('video');
video.src = 'https://cdn.glitch.global/9fa95d86-963a-4adb-84c6-b6c0f5735809/video.mp4?v=1675933649025';
video.autoplay = true;
video.loop = true;
video.controls = true;
document.body.appendChild(video);