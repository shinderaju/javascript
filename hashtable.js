
/*
* Hash Table Implementation
* @ param {number} -key,value
*/
var HashEntry = function(key, value) {
this.key = key;
this.value = value;
this.nextEntry = undefined;
};
//add methods to Hashentry prototype
HashEntry.prototype = {
// return key
getKey : function() {
return this.key;
},
// return value
getValue : function() {
return this.value;
},
// set the value for next entry
setNext : function(entry) {
this.nextEntry = entry;
},
// return the value of nextEntry
getNext : function() {
return this.nextEntry;
}

};
/*
* creat hashtabel for HashEntry
*/
var HashTable = function(){
this.tableSize = 100;
this.table = []; //this will be holding HashEntry(s)
};

//add methods to hashtabel
HashTable.prototype = {
//return an hash
hashFunction: function(input) {
//return an hash
return input % this.tableSize;
},

/* add element to hashtabel
* @params {number} -key,value
*/
put : function(key, value) {
var hash = this.hashFunction(key);
var table = this.table;
if(table[hash] === undefined) {
 table[hash] = new HashEntry(key, value);
} else {
 var temp = table[hash];
 while(temp.getNext()!==undefined) {
   temp = temp.getNext();
 }
 temp.setNext(new HashEntry(key, value));
}
},
/*
* return value for key
* @params{number} -key
* @return{number} -value
*/
get : function(key) {
var hash = this.hashFunction(key);
var table = this.table;
var temp = table[hash];
if(temp === undefined) return null;
if(temp.getKey() === key) {
 return temp.getValue();
} else {
 while(temp.getNext()!==undefined) {
   temp = temp.getNext();
   if(temp.getKey() === key) {
     return temp.getValue();
   }
 }
}
}

//Hash Table Implementation
var HashEntry = function(key, value) {
    this.key = key;
    this.value = value;
    this.nextEntry = undefined;
};
HashEntry.prototype = {
  getKey : function() {
    return this.key;
  },
  getValue : function() {
    return this.value;
  },
  setNext : function(entry) {
    this.nextEntry = entry;
  },
  getNext : function() {
    return this.nextEntry;
  }

};

var HashTable = function(){
  this.tableSize = 100;
  this.table = []; //this will be holding HashEntry(s)
};

HashTable.prototype = {
  hashFunction: function(input) {
    //return an hash
    return input % this.tableSize;
  },
  put : function(key, value) {
    var hash = this.hashFunction(key);
    var table = this.table;
    if(table[hash] === undefined) {
       table[hash] = new HashEntry(key, value);
    } else {
       var curr = table[hash];
       while(curr.getNext()!==undefined) {
         curr = curr.getNext();
       }
       curr.setNext(new HashEntry(key, value));
    }
  },
  get : function(key) {
     var hash = this.hashFunction(key);
     var table = this.table;
     var currEntry = table[hash];
     if(currEntry === undefined) return null;
     if(currEntry.getKey() === key) {
       return currEntry.getValue();
     } else {
       while(currEntry.getNext()!==undefined) {
         currEntry = currEntry.getNext();
         if(currEntry.getKey() === key) {
           return currEntry.getValue();
         }
       }
     }
  }

};

var hashTable = new HashTable();
hashTable.put(123, "raju");
hashTable.put(12, "pratik");
hashTable.put(112,"sumit");


document.write(hashTable.get(12)+"<br/>");
document.write(hashTable.get(123)+"<br/>");
document.write(hashTable.get(112)+"<br/>");
document.write(hashTable.get(134)+"<br/>");

console.log(hashTable.get(12));
console.log(hashTable.get(123));
console.log(hashTable.get(112));//linked
console.log(hashTable.get(134));//not exist
