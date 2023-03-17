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
        var values = item.values
        var filteredRes = values.filter(
            item => item.toLowerCase().includes(input.toLowerCase())
        );
        //console.log(filteredRes)
        if (filteredRes.length !== 0) {
            var topDiv = document.createElement('div');
            topDiv.className = "card";
            topDiv.style.textAlign = "center"
            var headerDiv = document.createElement('div');
            headerDiv.className = "card-header";
            headerDiv.textContent = item.type;
            headerDiv.style.fontSize = '18px';
            headerDiv.style.textAlign = "center";
            topDiv.appendChild(headerDiv);
            var badgeSpan = document.createElement('span');
            badgeSpan.className = "badge badge-pill badge-primary";
            badgeSpan.textContent = filteredRes.length.toString()
            badgeSpan.style.marginLeft = '8px';
            headerDiv.appendChild(badgeSpan)
            var placeList = filteredRes.sort().join(", ");
            var contentDiv = document.createElement("p");
            contentDiv.textContent = placeList
            contentDiv.className = "list-group-item lead"
            headerDiv.appendChild(contentDiv)
            fragList.appendChild(topDiv);
            searchList.appendChild(fragList)
        }

    });

}