const submit = document.getElementById('submit');
let answer = document.getElementById('answer');
let target = "cooper/cooper/cooper";
let target2 = "Cooper/Cooper/Cooper";
let target3 = "cooper cooper cooper"




answer.addEventListener('input', function(event) {
  
 if(this.value == target || this.value == target2 || this.value == target3) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true; 
  }
});



submit.addEventListener('click', function(event) {
  
});


 

