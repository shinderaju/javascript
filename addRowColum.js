/**
* function to add rows to table
* @ param {} null
* @ return{} null
*/
function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);//insert new row
    var columnCount =  table.rows[0].cells.length;
    var cell1 = row.insertCell(0);    //insert cell to new row
    var element1 = document.createElement("input");
    element1.type = "text";
    element1.setAttribute('id', 'newInput'); //set the id attribute
    cell1.appendChild(element1);


    var cell2 = row.insertCell(1);     //insert cell to new row
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.setAttribute('id', 'newInput'); //set the id attribute
    cell2.appendChild(element2);

//if columns more than 3
 if(columnCount>=3){
  for(var i=3; i<=columnCount;i++){

     var cell = row.insertCell(i-1);  //insert cell to new row
     var element = document.createElement("input");
     element.type = "text";
     element.setAttribute('id', 'newInput');
     cell.appendChild(element);

  }
 }


}//end of addRow()

/**
* function to add columns to table
* @ param {} null
* @ return{} null
*/

function addColumn() {
 var tblHeadObj = document.getElementById('myTable').tHead;
 for (var h=0; h< tblHeadObj.rows.length; h++) {
  var newTH = document.createElement('th');
  tblHeadObj.rows[h].appendChild(newTH);
  newTH.innerHTML = 'Column '+ (tblHeadObj.rows[h].cells.length);
 }

 var tblBodyObj = document.getElementById('myTable').tBodies[0];
 for (var i=0; i< tblBodyObj.rows.length; i++) {
  var newCell = tblBodyObj.rows[i].insertCell(-1);
  var element = document.createElement("input");
  element.type = "text";
  element.setAttribute('id','newInput');
  newCell.appendChild(element);
 }
}//end of addColumn
