/*
* add word "bridgeLabz" before every statement
* @ param {String} -args
*/
 function prefixWord(...args){
  document.write(this+" "+[args]);
}
var args = prompt("enter any argument");
prefixWord.apply("bridgeLabz",[args]);
