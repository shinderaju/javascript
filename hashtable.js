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

console.log(hashTable.get(12));
console.log(hashTable.get(123));
console.log(hashTable.get(112));//linked
console.log(hashTable.get(134));//not exist
