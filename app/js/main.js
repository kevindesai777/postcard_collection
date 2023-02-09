
//import json from '../collection.json' assert {type: 'json'};

var json = [
   {
       "type": "FOTW",
       "values": ["Japan", "Slovenia", "Sweden", "Czech Republic ", "Switzerland ", "Netherlands ", "United Kingdom ", "Hungary", "United Arab Emirates", "Austria", "Taiwan", "Romania", "Spain", "Andorra", "IN PROG - Moldova", "Gibraltar", "Sri Lanka", "India", "Liechtenstein", "Northern Ireland", "Estonia", "Finland", "Australia", "European Union", "Indonesia ", "Croatia ", "Germany ", "Hong Kong", "England", "China", "Canada", "Bulgaria", "Cambodia", "Malaysia", "Kosovo", "Albania", "Montenegro", "Italy", "Poland", "Ukraine", "Laos", "Vatican City (Arranged)", "Azores", "Norway", "Bosnia", "Chile", "Cyprus", "Greece", "Netherlands", "Philippines", "Argentina", "South Korea", "French Guyana (Arranged)", "Aland Island", "ASEAN", "Turkey (Arranged)", "Cocos Island", "Thailand (Arranged)", "Costa Rica", "Ireland", "Dominican Republic (Arranged)", "Palau", "Portugal", "Azerbaijan", "USA", "Macau (Arranged)", "Iceland", "Belgium", "Latvia", "Kazakhstan (Arranged)", "Israel (Arranged)", "Benin"]
   },
   {
       "type": "MOTW",
       "values": ["Austria", "Costa Rica", "Canada", "UK", "Hong Kong", "Italy", "Finland", "Norway", "Spain", "Malaysia", "Japan", "Germany", "Czech Republic", "Taiwan", "IN PROG - China", "England", "Croatia", "Thailand", "UAE", "Sovereign Military Order Of Malta", "Poland"]

   },
   {
       "type": "Loupaper",
       "values": ["Georgia", "Alabama"]
   }
]

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
      //console.log(filteredRes)
      if (filteredRes.length !== 0) {
         var li = document.createElement('li');
         li.className = "list-group-item";
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