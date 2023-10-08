const oniWords = [
    "Spartan", "Cortana", "Halsey", "UNSC", "Mjolnir", "Infinity",
    "Reach", "Halo", "ODST", "AI", "Sangheili", "Flood", "Forerunner",
    "Prophet", "Arbiter", "Covenant", "Infinity", "Noble", "Reclaimer",
    "Slipspace", "High Charity", "Pillar of Autumn", "343 Guilty Spark"
];

const oniClerances = [
    "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf",
    "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November",
    "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform",
    "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"
];

function generateONIAuthCode() {
    const randomONIWord = oniWords[Math.floor(Math.random() * oniWords.length)];
    const randomONIClerance = oniClerances[Math.floor(Math.random() * oniClerances.length)];

    const authCodeDisplay = document.getElementById('auth-code-display');
    authCodeDisplay.textContent = `${randomONIWord}-${randomONIClerance}`;
}