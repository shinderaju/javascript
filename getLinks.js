/*
* print number of links in document 
*/
function getLinks() {
  document.write("number of links in doc are : "+document.links.length+"<br/>");
    for(var i = 0;i<document.links.length;i++){
      document.write(document.links[i].href+"<br/>")
    }

}
getLinks();
