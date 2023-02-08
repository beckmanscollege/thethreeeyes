/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


const submit = document.getElementById('submit');
let answer = document.getElementById('answer');
const target = hello;

function log(value, mode) {
  console.clear();
  
  if(mode)
    console.log(`Information: ${value}`);
  else
    console.log(`Input: ${value}`);
}

answer.addEventListener('input', function(event) {
  log(this.value, true);
  
  if(parseInt(this.value) == target) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true; 
  }
});

submit.addEventListener('click', function(event) {
  log("Button fired.", false);
});