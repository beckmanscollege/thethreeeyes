const submit = document.getElementById('submit');
let answer = document.getElementById('answer');
const target = "cooper cooper cooper";


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

 

 

