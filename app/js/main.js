var json = [
    {
        "type": "FOTW",
        "values": ["Japan", "Slovenia", "Sweden", "Czech Republic ", "Switzerland ", "Netherlands", "United Kingdom", "Hungary", "United Arab Emirates", "Austria", "Taiwan", "Romania", "Spain", "Andorra", "Gibraltar", "Sri Lanka", "India", "Liechtenstein", "Northern Ireland", "Estonia", "Finland", "Australia", "European Union", "Indonesia", "Croatia", "Germany", "Hong Kong", "England", "China", "Canada", "Bulgaria", "Cambodia", "Malaysia", "Kosovo", "Albania", "Montenegro", "Italy", "Poland", "Ukraine", "Laos", "Azores", "Norway", "Bosnia", "Chile", "Cyprus", "Greece", "Netherlands", "Philippines", "Argentina", "South Korea", "French Guyana", "Aland Island", "ASEAN", "Turkey (Arranged)", "Cocos Island", "Thailand (Arranged)", "Costa Rica", "Ireland", "Dominican Republic (Arranged)", "Palau", "Portugal", "Azerbaijan", "USA", "Macau (Arranged)", "Iceland", "Belgium", "Latvia", "Kazakhstan", "Israel", "Benin", "Iran (Arranged)", "Ascension Island (Arranged)", "Falkland Island (Arranged)", "Nepal (Arranged)", "Serbia (Arranged)", "Slovakia", "Vietnam (Arranged)", "Uruguay", "Cuba", "Brazil", "Brunei", "Ivory Coast (Arranged)", "Rwanda", "Singapore", "France", "Luxembourg"]
    },
    {
        "type": "MOTW",
        "values": ["Austria", "Costa Rica", "Canada", "UK", "Hong Kong", "Italy", "Finland", "Norway", "Spain", "Malaysia", "Japan", "Germany", "Czech Republic", "Taiwan", "IN PROG - China", "England", "Croatia", "Thailand", "UAE", "Sovereign Military Order Of Malta", "Poland", "Ukraine", "Armenia", "Portgual (Arranged)", "Latvia", "Turkey (Arranged)", "St Pierre and Miquelon", "Singapore", "Malta"]

    },
    {
        "type": "Loupaper",
        "values": ["Alaska", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Kentucky", "Louisiana", "Maine", "Michigan", "Minnesota", "New Jersey", "New Mexico", "New York", "Ohio", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Washington"]
    }
]


document.getElementById("searchInput").onkeyup = function () { search() }
search()

function search() {
    var input;
    input = document.getElementById("searchInput").value;
    var searchList = document.getElementById("searchResult");
    searchList.innerHTML = "";
    var fragList = document.createDocumentFragment();

    json.forEach(function (item) {
        var values = item.values
        var filteredRes = values.filter(
            item => item.toLowerCase().includes(input.toLowerCase())
        );
        var arrangedPlaces = filteredRes.filter(
            place => place.toLowerCase().includes("Arranged".toLowerCase())
        );
        var obtainedPlaces = filteredRes.filter(filteredPlaces => !arrangedPlaces.includes(filteredPlaces));
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
            badgeSpan.textContent = obtainedPlaces.length.toString()
            badgeSpan.style.marginLeft = '8px';
            badgeSpan.style.marginBottom = '8px';
            headerDiv.appendChild(badgeSpan)
            var obtainedPlaceList = obtainedPlaces.sort().join(", ");
            var arrangedPlaceList = arrangedPlaces.sort().join(", ");
            var obtainedDiv = document.createElement("p");
            var arrangedDiv = document.createElement("p");
            obtainedDiv.textContent = obtainedPlaceList;
            obtainedDiv.className = "list-group-item lead";
            arrangedDiv.textContent = arrangedPlaceList;
            arrangedDiv.className = "list-group-item lead";
            headerDiv.appendChild(obtainedDiv);
            if (arrangedPlaceList.length != 0) {
                headerDiv.appendChild(arrangedDiv);
            }
            fragList.appendChild(topDiv);
            searchList.appendChild(fragList);
        }
    });
}