/*
* object to perform addition using method chaining
*/
var calculation = {
   num1 : 0,
   num2 : 0,
   /*
   * save the users first input in variable
   * @ param{number} - num
   * @ return{number} -num
   */
   first :function (num){
    this.num1 = num;
    return this;
  },
  /*
  * save the users second input in variable
  * @ param{number} - num
  * @ return{number} -num
  */
  second : function (num){
    this.num2 = num;
    return this;
  },
  /*perform operations on user input
  * print the result
  */
  sum : function(){
    var add = this.num1 + this.num2;
    document.write("sum is "+add+"<br/>");
    return add;
  }
};
//calling chaining method
calculation.first(1).second(2).sum();
