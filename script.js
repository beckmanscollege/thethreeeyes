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


    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    $(document).ready(function() {
      $('#button').hide().delay(3000).fadeIn(2200);
});

