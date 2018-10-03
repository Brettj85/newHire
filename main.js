var toolTrackerInterval = 1;
var currentIteration;

function usernamePassword() {
  var userPID = prompt("Please enter your PID:", "PID");
  var userEID = prompt("Please enter your EID:", "EID");
  var userPassword = prompt("Please enter your Password:", "Password");
  currentIteration = setInterval(checkTools, 500)
}

function checkTools() {
  var storage = (".box" + toolTrackerInterval);
  var currentElement = document.querySelector(storage);
  var random = Math.floor((Math.random() * 3) + 1);
  if (toolTrackerInterval === 31) {
    clearInterval(currentIteration)
    alert("Tool check completed. This information has been sent to management and the support team")
  }
  else{
  if (random === 1 || random === 2) {
    currentElement.style.backgroundColor = "green";
  } else {
    currentElement.style.backgroundColor = "red";
  }
  toolTrackerInterval++
}
}