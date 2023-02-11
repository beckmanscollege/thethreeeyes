const submit = document.getElementById('submit');
let answer = document.getElementById('answer');
const target = "cooper/cooper/cooper";


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

const submit2 = document.getElementById('submit2');
let answer2 = document.getElementById('answer2');
const target2 = "home";


answer2.addEventListener('input', function(event) {
  
 if(this.value == target2) {
    submit2.disabled = false;
  }
  else {
    submit2.disabled = true; 
  }
});

submit2.addEventListener('click', function(event) {
  
});

 

