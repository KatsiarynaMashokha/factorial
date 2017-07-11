$(document).ready(function() {
  $("#factorial").submit(function(event) {
    var userInput = parseInt($("#number").val());

//     var factorial = 1;
//     if (isNaN(userInput) || userInput < 0) {
//       alert("Please enter a valid number");
//     }
//     else {
//     for (var i = 2; i <= userInput; i++) {
//       factorial *= i;
//     }
//   alert("The factorial is " + factorial);
// }

// factorial using recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
}

alert(factorial(userInput));

  });
});
