/*perform mathematical operations
*/
//global variable
var num3;

/*
* function to perform addition
* save output in global variable
*/
function add(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) + parseInt(num2);

}
/*
* function to perform substraction
* save output in global variable
*/
function sub(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) - parseInt(num2);

}

/*
* function to perform multiplication
* save output in global variable
*/
function mul(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) * parseInt(num2);

}

/*
* function to perform division
* save output in global variable
*/
function div(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) / parseInt(num2);

}
/*print the result of operations
*/
function calculate(){
  document.getElementById("res").value=num3;
}
