var name ;
var rollNO ;
var age;
/*
* set data to html elements
*/
function setData(){
	 name = document.getElementById("name").value;
	 rollNO = document.getElementById("rollNo").value;
	 age = document.getElementById("age").value;

}
/*
* get data from html elements
*/
function getData(){
	document.getElementById('getName').innerHTML = name;
	document.getElementById('getRollNo').innerHTML = rollNo;
	document.getElementById('getAge').innerHTML = age;

}
