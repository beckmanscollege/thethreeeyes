const submit = document.getElementById('submit2');
let answer = document.getElementById('answer2');
const target = "home";


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