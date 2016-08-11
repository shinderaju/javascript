

function displayTime() {
  
        var currentTime = new Date();
       // var date = currentTime.getDate();
        var day = currentTime.getDate();
        var month = currentTime.getMonth();
        var year = currentTime.getFullYear();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        
        //document.write(year);
        // Let's set the AM and PM meridiem and 
        // 12-hour format
        var meridiem = "AM";  // Default is AM
        
        // If hours is greater than 12
        if (hours > 12) {
            hours = hours - 12; // Convert to 12-hour format
            meridiem = "PM"; // Keep track of the meridiem
          
        }
        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 12;    
        }


        // If the hours digit is less than 10
        if(hours < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            hours = "0" + hours;
        }
        // Format minutes and seconds the same way
        if(minutes < 10) {
            minutes = "0" + minutes;
        }        
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
   
        // This gets a "handle" to the clock div in our HTML
        var clock = document.getElementById('clock');
        
        // Then we set the text inside the clock div 
        // to the hours, minutes, and seconds of the current time
        clock.innerHTML = day+ ":"+(month+1)+ ":"+year + "<br/>" + hours + ":" + minutes + ":" + seconds + " " + meridiem + "<br/>";
         
    }
    
    // This runs the displayTime function the first time
    displayTime();
    
    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

function readJson(){
  var article = [
    {
      "author" : "ravi",
      "date": "08-08-2016",
      "publication" : "TOI",
      "news" : "India wins highes gold medals in rio Olampyc"
    },
    {
      "author" : "raj",
      "date": "08-08-2016",
      "publication" : "The Hindu",
      "news" : "Indians  create victory in rio Olampyc"
    },
    {
      "author" : "sharma",
      "date": "09-08-2016",
      "publication" : "Navbharat",
      "news" : "India domianate everyone in rio Olampyc"
    },
    {
      "author" : "nikhil",
      "date": "10-08-2016",
      "publication" : "Bhaskar",
      "news" : "Indians  are on fire in rio Olampyc"
    },
    
  ];
  function display(i){
    var news = document.getElementById('news');
	  news.innerHTML =article[i].author+" "+article[i].date+" "+article[i].publication+"<br/> "+article[i].news+"<br/>";
  /*  document.write(article[i].author+" ");
    document.write(article[i].date+" ");
    document.write(article[i].publication+"<br/> ");
    document.write(article[i].news+"<br/>");
    document.write("=========================<br/>");*/
    if(++i<article.length) 
    setTimeout(display,3000,i);
  }
  
  setTimeout(display,3000,0);
  
}
readJson();
