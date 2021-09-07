
// //local variables
function showMessage() {
    var message = 'Hello all Im A Local Variable';
    alert(message);
  }
  showMessage();
  
  
  // //global variables
  var text = 'Naveen';
  function showMessage() {
    var msg = "Hello " + text;
    // alert(msg);
  }
  alert(text);
  showMessage();
  