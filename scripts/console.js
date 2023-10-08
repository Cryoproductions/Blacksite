const validMIDs = {
    "0256-8964-AA": ["midassignment", "perscom - secret", "section 0 - topsecret", "blacklist - restricted"],
    "6896-4689-C357": ["midassignment", "perscom - secret", "section 0 - topsecret", "blacklist - restricted"],
    "0600-9935-KE": ["", "group4"], // Locked to group2 and group4
    "3071-8108-SR": ["midassignment", "perscom - secret", "blacklist - restricted"],
    "3251-9753-AH": ["perscom - secret", "blacklist - restricted"],
    "7964-6447-SS": ["", "blacklist - restricted"],
    "5896-4673-BB": ["midassignment", "perscom - secret", "blacklist - restricted"],
    "4790-4673-DR": ["", "blacklist - restricted"],
    "6888-4674-BG": ["", "blacklist - restricted"],
    "2586-4896-JS": ["", "blacklist - restricted"]
};

let userMID = "";
let userGroups = [];

// Hide the group selection initially
document.getElementById('group-select-container').style.display = 'none';

function checkMID() {
    const mid = document.getElementById('mid').value.trim();

    if (validMIDs[mid]) {
        userMID = mid;
        userGroups = validMIDs[mid];
        showGroupSelection();
    } else {
        document.getElementById('validation-message').textContent = 'Invalid MID. Please try again.';
    }
}

function showAccessGranted() {
    document.getElementById('access-message').style.display = 'block';
}

function hideAccessGranted() {
    document.getElementById('access-message').style.display = 'none';
}

function showGroupSelection() {
    document.getElementById('mid-input').style.display = 'none';
    const groupSelect = document.getElementById('group-select');
    groupSelect.innerHTML = ''; // Clear previous options

    userGroups.forEach(group => {
        const option = document.createElement('option');
        option.value = group;
        option.text = group;
        groupSelect.appendChild(option);
    });

    // Show the group selection
    document.getElementById('group-select-container').style.display = 'block';
}

function redirectBasedOnSelection() {
    const selectedGroup = document.getElementById('group-select').value;

    // Check if the user's MID is in the selected group
    if (userGroups.includes(selectedGroup)) {
        // Redirect based on the selected group
        switch (selectedGroup) {
            case 'midassignment':
                window.location.href = 'mid.html';
                break;
            case 'perscom - secret':
                window.location.href = 'pers1.html';
                break;
            case 'section 0 - topsecret':
                window.location.href = 'blackbox.html';
                break;
            case 'blacklist - restricted':
                window.location.href = 'blacklist1.html';
                break;
            default:
                break;
        }
    } else {
        document.getElementById('validation-message').textContent = 'Access denied. You are not authorized for this group.';
    }
}