
//import json from '../collection.json' assert {type: 'json'};

var json = [
    {
        "type": "FOTW",
        "values": ["Japan", "Slovenia", "Sweden", "Czech Republic ", "Switzerland ", "Netherlands", "United Kingdom", "Hungary", "United Arab Emirates", "Austria", "Taiwan", "Romania", "Spain", "Andorra", "Gibraltar", "Sri Lanka", "India", "Liechtenstein", "Northern Ireland", "Estonia", "Finland", "Australia", "European Union", "Indonesia", "Croatia", "Germany", "Hong Kong", "England", "China", "Canada", "Bulgaria", "Cambodia", "Malaysia", "Kosovo", "Albania", "Montenegro", "Italy", "Poland", "Ukraine", "Laos", "Azores", "Norway", "Bosnia", "Chile", "Cyprus", "Greece", "Netherlands", "Philippines", "Argentina", "South Korea", "French Guyana", "Aland Island", "ASEAN", "Turkey (Arranged)", "Cocos Island", "Thailand (Arranged)", "Costa Rica", "Ireland", "Dominican Republic (Arranged)", "Palau", "Portugal", "Azerbaijan", "USA", "Macau (Arranged)", "Iceland", "Belgium", "Latvia", "Kazakhstan", "Israel", "Benin", "Iran (Arranged)", "Ascension Island (Arranged)", "Falkland Island (Arranged)", "Nepal (Arranged)", "Serbia (Arranged)", "Slovakia (Arranged)", "Vietnam (Arranged)", "Uruguay (Arranged)", "Cuba", "Brazil (Arranged)", "Brunei", "Ivory Coast (Arranged)"]
    },
    {
        "type": "MOTW",
        "values": ["Austria", "Costa Rica", "Canada", "UK", "Hong Kong", "Italy", "Finland", "Norway", "Spain", "Malaysia", "Japan", "Germany", "Czech Republic", "Taiwan", "IN PROG - China", "England", "Croatia", "Thailand", "UAE", "Sovereign Military Order Of Malta", "Poland", "Ukraine", "Armenia (Arranged)", "Portgual (Arranged)", "Latvia (Arranged)", "Turkey (Arranged)", "St Pierre and Miquelon"]

    },
    {
        "type": "Loupaper",
        "values": ["California", "Colorado", "Florida", "Georgia", "Kentucky", "Louisiana", "Maine", "Michigan", "Minnesota", "New Jersey", "New Mexico", "New York", "Ohio", "Pennsylvania", "South Carolina", "Tennessee", "Texas", ]
    }
]

console.log(json)

document.getElementById("searchInput").onkeyup = function () { search() }
search()
function search() {
    var input;
    var filter;
    input = document.getElementById("searchInput").value;
    var searchList = document.getElementById("searchResult");
    searchList.innerHTML = "";
    var fragList = document.createDocumentFragment();
  
    json.forEach(function (item) {
      var values = item.values;
      var unarrangedRes = [];
      var arrangedRes = [];
  
      values.forEach(function (value) {
          if (value.includes("Arranged")) {
              arrangedRes.push(value.replace(" (Arranged)", ""));
          } else {
              unarrangedRes.push(value);
          }
      });
  
      if (unarrangedRes.length !== 0 || arrangedRes.length !== 0) {
          var topDiv = document.createElement('div');
          topDiv.className = "card";
          topDiv.style.textAlign = "center";
          var headerDiv = document.createElement('div');
          headerDiv.className = "card-header";
          headerDiv.textContent = item.type;
          headerDiv.style.fontSize = '18px';
          headerDiv.style.textAlign = "center";
          topDiv.appendChild(headerDiv);
  
          var badgeDiv = document.createElement('div');
          badgeDiv.style.display = 'flex';
          badgeDiv.style.alignItems = 'center';
          badgeDiv.style.marginTop = '10px';
          var badgeSpan = document.createElement('span');
          badgeSpan.className = "badge badge-pill badge-primary";
          badgeSpan.textContent = unarrangedRes.length.toString()
          badgeSpan.style.marginRight = '8px';
          badgeDiv.appendChild(badgeSpan);
          headerDiv.appendChild(badgeDiv);
  
          if (unarrangedRes.length !== 0) {
              var unarrangedContentDiv = document.createElement("p");
              unarrangedContentDiv.textContent = unarrangedRes.sort().join(", ");
              unarrangedContentDiv.className = "list-group-item lead";
              badgeDiv.appendChild(unarrangedContentDiv);
          }
  
          if (arrangedRes.length !== 0) {
              var arrangedContentDiv = document.createElement("p");
              arrangedContentDiv.textContent = "<b>Arranged</b>: " + arrangedRes.sort().join(", ");
              arrangedContentDiv.className = "list-group-item lead";
              badgeDiv.appendChild(arrangedContentDiv);
          }
  
          var searchList = document.getElementById("searchResult");
          var fragList = document.createDocumentFragment();
          fragList.appendChild(topDiv);
          searchList.appendChild(fragList);
      }
  });
  
}

