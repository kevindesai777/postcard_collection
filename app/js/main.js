// your js code goes here...
import json from '../collection.json' assert {type: 'json'};

console.log(json)

// let list = document.getElementById("list");
//       var fragList = document.createDocumentFragment();
//       json.forEach(function (item) {
//          var li = document.createElement('li');
//          li.textContent = item.type;
//          var placeList = item.values.toString()
//          var ul = document.createElement("ul")
//          ul.textContent = placeList
//          li.appendChild(ul)
//          fragList.appendChild(li);
//       });
//       list.appendChild(fragList);

document.getElementById("searchInput").onkeyup = function() {search()}
search()

function search() {
   var input;
   var filter;
   input = document.getElementById("searchInput").value;
   var searchList = document.getElementById("searchResult");
   searchList.innerHTML = "";
   var fragList = document.createDocumentFragment();

   json.forEach(function (item) {
      var values = item.values
      var filteredRes = values.filter(
          item => item.toLowerCase().includes(input.toLowerCase())
      );
      console.log(filteredRes)
      if (filteredRes.length !== 0) {
         var li = document.createElement('li');
         li.textContent = item.type;
         var placeList = filteredRes.join(", ")
         var ul = document.createElement("ul")
         ul.textContent = placeList
         li.appendChild(ul)
         fragList.appendChild(li);
         searchList.appendChild(fragList)
      }

   });
   //list.appendChild(fragList);

}