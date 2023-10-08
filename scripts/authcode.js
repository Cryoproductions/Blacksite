const oniWords = [
    "Spartan", "Cortana", "Halsey", "UNSC", "Mjolnir", "Infinity",
    "Reach", "Halo", "ODST", "AI", "Sangheili", "Flood", "Forerunner",
    "Prophet", "Arbiter", "Covenant", "Infinity", "Noble", "Reclaimer",
    "Slipspace", "High Charity", "Pillar of Autumn", "343 Guilty Spark"
];

function generateONIAuthCode() {
    const authCodeLength = 4; // You can change the length as needed
    let authCode = "";

    for (let i = 0; i < authCodeLength; i++) {
        const randomIndex = Math.floor(Math.random() * oniWords.length);
        authCode += oniWords[randomIndex];
    }

    document.getElementById('auth-code-display').textContent = authCode;
}