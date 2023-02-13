/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

const submit = document.getElementById('submit3');
let answer = document.getElementById('answer3');
const target = "continue";


answer.addEventListener('input', function(event) {
  
 if(this.value == target) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true; 
  }
});

submit.addEventListener('click', function(event) {
  
});

