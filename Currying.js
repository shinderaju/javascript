/*
* prg to show the function of currying method
*/

/*
* perform addition of number
* @ param{number} -a
* @ return {function}
*/
var add = function(a){
  return function(b){
    return a + b;
  }
}

/*
* perform substraction of number
* @ param{number} -a
* @ return {function}
*/
var sub = function(a){
  return function(b){
    return a - b;
  }
}

/*
* perform multiplication of number
* @ param{number} -a
* @ return {function}
*/
var mul = function(a){
  return function(b){
    return a * b;
  }
}

/*
* perform division of number
* @ param{number} -a
* @ return {function}
*/
var div = function(a){
  return function(b){
    return a / b;
  }
}
//calling to methods
var addNum = add(10);
document.write(addTo(20));
var subNum = sub(40);
document.write(substractTo(20)+"<br/>");
var mulNum = mul(5);
document.write(multipy(10)+"<br/>");
var divideNum = div(20);
document.write(divide(4)+"<br/>");
