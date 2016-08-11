function equality(obj1,obj2){
  if(obj1===obj2){
    return true;
  }
  else{
    return false;
  }
}
var obj1 = {
  name : "raju",
  age : 23
  
}
var obj2 ={
  name : "pratik",
  age : "22"
}
var obj3 = obj1;
document.write(equality(obj1,obj2));
document.write("<br/>");
document.write(equality(obj1,obj3));
