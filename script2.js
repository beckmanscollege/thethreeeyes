const submit = document.getElementById('submit2');
let answer = document.getElementById('answer2');
let target = "home";
let target2 = "earth";




answer.addEventListener('input', function(event) {
  
 if(this.value == target || this.value == target2) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true; 
  }
});