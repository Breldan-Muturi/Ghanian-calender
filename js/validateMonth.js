function validateMonth();
var valid = document.getElementById("month");
 if (valid <= 0 || > 12) {
     var valid= false;
     alert("You entered an Invalid month so you will see a skewed result!");
 } else{
     alert("Good work entering the right month!")
 }
