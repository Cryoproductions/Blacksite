function lookupTarget() {
    var targetName = document.getElementById("target-name-input").value;
    var affiliation = document.getElementById("affiliation-input").value;
    var status = document.getElementById("status-input").value;
    var output = document.getElementById("output");

    // Clear output field
    output.innerHTML = "";

    // Perform target lookup
    var targets = performLookup(targetName, affiliation, status);

    // Display target information
    if (targets.length > 0) {
        targets.forEach(function (target) {
            output.innerHTML += "<div class='target-info'>Name: " + target.name + "<br/>Affiliation: " + target.affiliation + "<br/>Status: " + target.status + "<br/>Clan: " + target.clan + "<br/>GamerTag: " + target.gamerTag + "<br/>Reason: " + target.reason + "</div>";
        });
    } else {
        output.innerHTML = "No targets found matching the search criteria.";
    }
}

function performLookup(targetName, affiliation, status) {
    // Add your custom target database and lookup logic here
    var targets = [
        { name: "Cabinet Boy", affiliation: "UNSC", status: "Insurgent", clan: "UNSC Diamond Fleet", gamerTag: "LyingDoc", reason: "Killing UNSC, and Running Illegal Program" },
        {name: "Irish Charlo", affiliation: "Insurectionist", status: "Insurgent", clan: "Unknown", gamerTag: "IrishCharlo", reason: "Killing unsc, and affliation with Shakey Divine, Exodus, and many insurgents."},
        
        
    ];

    // Filter targets based on search criteria
    var filteredTargets = targets.filter(function (target) {
        var match = true;

        if (targetName && target.name.toLowerCase().indexOf(targetName.toLowerCase()) === -1) {
            match = false;
        }

        if (affiliation && target.affiliation.toLowerCase().indexOf(affiliation.toLowerCase()) === -1) {
            match = false;
        }

        if (status && target.status.toLowerCase().indexOf(status.toLowerCase()) === -1) {
            match = false;
        }

        return match;
    });

    return filteredTargets;
}