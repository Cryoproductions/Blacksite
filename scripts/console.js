const validMIDs = {
    "02565-89647-AA": {
        groups: ["midassignment", "perscom - secret", "section 0 - topsecret", "blacklist - restricted", "auth-code"],
        authCode: "Cortana" // Assign an authorization code to the MID
    },
    
    "6896-4689-C357": {
        groups: ["midassignment", "perscom - secret", "section 0 - topsecret", "blacklist - restricted"],
        authCode: "Infinity" // Assign an authorization code to the MID
    },
    "0600-9935-KE": {
        groups: ["", "group4"], // Locked to group2 and group4
        authCode: "Noble" // Assign an authorization code to the MID
    },

    "3071-8108-SR": {
        groups: ["midassignment", "perscom - secret", "blacklist - restricted", "section 0 - topsecret", "Target - Restricted"],
        authCode: "Mjolnir"
    },

    "9771-1754-FM": {
        groups:["blacklist - restricted"],
        authCode: "Silver"
    },

    "00834-19223-HS": {
        groups:["midassignment", "perscom - secret", "blacklist - restricted", "auth-code"],
        authCode: "LimaActual"
    },

    "1774-2047-GO": {
        groups: ["blacklist - restricted"],
        authCode: "Guilty"
    },

    "2236-1575-TH": {
        groups: ["midassignment", "perscom - secret", "blacklist - restricted"],
        authCode: "Spark"
    }
    // Add more MIDs and their associated data here
};

let userMID = "";
let userGroups = [];
let userAuthCode = "";
let midVerified = false;
let authCodeRequired = false;
let authorized = false;

document.getElementById('group-select-container').style.display = 'none';
document.getElementById('auth-code-input').style.display = 'none';

function checkMID() {
    const mid = document.getElementById('mid').value.trim();

    if (validMIDs[mid]) {
        userMID = mid;
        userGroups = validMIDs[mid].groups; // Retrieve groups from data
        userAuthCode = validMIDs[mid].authCode; // Retrieve authCode from data
        midVerified = true;
        authCodeRequired = !!userAuthCode; // Check if an authCode is required

        if (authCodeRequired) {
            showAuthCodeInput();
        } else {
            authorized = true;
            showGroupSelection();
        }
    } else {
        document.getElementById('validation-message').textContent = 'Invalid MID. Please try again.';
    }
}

function showAuthCodeInput() {
    document.getElementById('mid-input').style.display = 'none';
    document.getElementById('auth-code-input').style.display = 'block';
}

function checkAuthCode() {
    const authCode = document.getElementById('auth-code').value;

    if (authCodeRequired && authCode === userAuthCode) {
        authorized = true;
        showGroupSelection();
    } else {
        document.getElementById('validation-message').textContent = 'Invalid Authorization Code. Please try again.';
    }
}

function showGroupSelection() {
    if (authorized && midVerified) {
        const groupSelect = document.getElementById('group-select');
        groupSelect.innerHTML = '';

        userGroups.forEach(group => {
            const option = document.createElement('option');
            option.value = group;
            option.text = group;
            groupSelect.appendChild(option);
        });

        document.getElementById('group-select-container').style.display = 'block';
    } else {
        document.getElementById('validation-message').textContent = 'Access granted. You are not authorized.';
    }
}

function redirectBasedOnSelection() {
    if (authorized) {
        const selectedGroup = document.getElementById('group-select').value;

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
            case 'perscom - restricted':
                window.location.href = 'PERS.html';
                break;
            case 'auth-code':
                window.location.href = 'auth.html'
                break;
            case 'blacklist - Secret':
                window.location.href = 'blacklist2.html'
                break;
            case 'Target - Restricted':
                window.location.href = 'TargetTerminal.html'
                break;
            default:
        }
    } else {
        document.getElementById('validation-message').textContent = 'Access denied. You are not authorized for this group.';
    }
}