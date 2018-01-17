// Put all the inputs into an array until equal button
// is pressed

// When a button is pressed, it will be displayed onto the
// screen and stored inside an array
function add(n1, n2){
  return n1+ n2;
}

function subtract(n1, n2){
  return n1 - n2;
}

function times(n1, n2){
  return n1 * n2;
}

function divide(n1, n2){
  return n1 / n2;
}

function clearScreen(){
  var display = document.getElementsByClassName("display")[0].
                getElementsByTagName("SPAN")[0];
  $(display)[0].innerHTML ="";
}

// Display the pressed key onto the screen by appending to the
// previous displayed string
function display(enteredKey) {
  var display = document.getElementsByClassName("display")[0].
                getElementsByTagName("SPAN")[0];
  $(display)[0].innerHTML += enteredKey;
}

function getDisplay() {
  var display = document.getElementsByClassName("display")[0].
                getElementsByTagName("SPAN")[0];
  return $(display)[0].innerHTML;
}

// The function will parse the string and return the result
// expected string format = "a operand b"
function calculate(string){
  // console.log(string);
  var regex = RegExp(/\s/);
  var list = string.split(regex);
  n1 = Number(list[0]);
  n2 = Number(list[2]);
  operand = list[1];
  var result = 0;
  if(operand == "+"){
    result = add(n1, n2);
  }
  else if(operand == "-"){
    result = subtract(n1, n2);
  }
  else if(operand == "x"){
    result = times(n1, n2);
  }
  else {
    result = divide(n1, n2);
  }
  return result;
}

function checkInputs(input){
  var inputRE = RegExp(/^\d+\s[+-x/]\s\d+$/);
  if(inputRE.test(input)){
    console.log("Match!");
  }
  else{
    // clearScreen();
    display("Invalid Operation!");
  }
}

// Display the pressed key onto screen
var keys = document.getElementsByClassName("calc")[0].getElementsByTagName("li");

for (var i=0; i< keys.length; i++){
  keys[i].onclick = function(e){
    if (this.innerHTML === " =") {
      var string = getDisplay();
      checkInputs(string);
      var finalResult = calculate(string);
      clearScreen();
      display(finalResult);
    }
    else{
      display(this.innerHTML);
    }
   }
}
