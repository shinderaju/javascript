var num3;
function add(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) + parseInt(num2);
  
}
function sub(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) - parseInt(num2);
  
}
function mul(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) * parseInt(num2);
  
}
function div(){
  num1 = document.getElementById("fno").value;
  num2 = document.getElementById("sno").value;
  num3 = parseInt(num1) / parseInt(num2);
 
}
function calculate(){
  document.getElementById("res").value=num3;
}
