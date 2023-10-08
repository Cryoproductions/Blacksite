const validMIDs = {
    "0256-8964-AA": ["group1", "group2", "group3", "group4"],
    "6896-4689-C357": ["group1", "group2", "group3", "group4"],
    "0600-9935-KE": ["group2", "group4"], // Locked to group2 and group4
    "3071-8108-SR": ["group1", "group2", "group4"],
    "3251-9753-AH": ["group2", "group4"],
    "7964-6447-SS": ["group2", "group4"],
    "5896-4673-BB": ["group1", "group2", "group4"],
    "4790-4673-DR": ["group2", "group4"],
    "6888-4674-BG": ["group2", "group4"],
    "2586-4896-JS": ["group2", "group4"]
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
            case 'group1':
                window.location.href = 'mid.html';
                break;
            case 'group2':
                window.location.href = 'pers1.html';
                break;
            case 'group3':
                window.location.href = 'blackbox.html';
                break;
            case 'group4':
                window.location.href = 'blacklist1.html';
                break;
            default:
                break;
        }
    } else {
        document.getElementById('validation-message').textContent = 'Access denied. You are not authorized for this group.';
    }
}