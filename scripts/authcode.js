function generateAuthCode(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let authCode = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        authCode += charset.charAt(randomIndex);
    }

    return authCode;
}

function generateAndDisplayAuthCode() {
    const authCodeLength = 6; // You can change the length as needed
    const authCode = generateAuthCode(authCodeLength);
    document.getElementById('auth-code-display').textContent = authCode;
}