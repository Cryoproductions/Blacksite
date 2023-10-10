function lookupPersonnel() {
    var firstName = document.getElementById("first-name-input").value;
    var lastName = document.getElementById("last-name-input").value;
    var rank = document.getElementById("rank-input").value;
    var output = document.getElementById("output");

    // Clear output field
    output.innerHTML = "";

    // Perform personnel lookup
    var personnel = performLookup(firstName, lastName, rank);

    // Display personnel information
    if (personnel.length > 0) {
        personnel.forEach(function (person) {
            output.innerHTML += "<div class='personnel-info'>Name: " + person.name + "<br/>Rank: " + person.rank + "<br/>Branch: " + person.branch + "<br/>Clearance: " + person.clearance + "<br/>GamerTag: " + person.gamerTag + "</div>";
        });
    } else {
        output.innerHTML = "No personnel found matching the search criteria.";
    }
}

function performLookup(firstName, lastName, rank) {
    // Add your custom personnel database and lookup logic here
    var personnel = [
        { name: "Arielle Ava", rank: "CINC", branch: "UNSC Navy", clearance: "TOP-SECRET", gamerTag: "Admiral Ava" },
        { name: "Cassius Cato", rank: "Admiral", branch: "UNSC Navy", clearance: "TOP-SECRET", gamerTag: "DownCesar" },
        { name: "Surge Rae", rank: "E4 Petty Officer Third Class", clearance: "Secret", gameTag: "Surge433"},
        { name: "Vivere Est", rank: " E-8 Senior Chief Petty Officer", clearance: "Secret", gameTag: "V2 Beamer"},
        { name: "Anubis Hagar", rank: "E-3 Crewman", clearance: "Secret", gameTag: "DeadArmy7803"}
                       
    ];

    // Filter personnel based on search criteria
    var filteredPersonnel = personnel.filter(function (person) {
        var match = true;

        if (firstName && person.name.toLowerCase().indexOf(firstName.toLowerCase()) === -1) {
            match = false;
        }

        if (lastName && person.name.toLowerCase().indexOf(lastName.toLowerCase()) === -1) {
            match = false;
        }

        if (rank && person.rank.toLowerCase().indexOf(rank.toLowerCase()) === -1) {
            match = false;
        }

        return match;
    });

    return filteredPersonnel;
}