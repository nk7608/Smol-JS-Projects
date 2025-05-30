function generate() {
    const passwordLength = Number(document.getElementById("passwordLength").value);
    const includeUppercase = document.getElementById("includeUpperCase").value.toLowerCase() === "true";
    const includeLowerCase = document.getElementById("includeLowerCase").value.toLowerCase() === "true";
    const includeNumbers = document.getElementById("includeNumbers").value.toLowerCase() === "true";
    const includeSpecialchars = document.getElementById("includeSpecialChars").value.toLowerCase() === "true";
    const result = document.getElementById("generatedPassword");

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    if (includeUppercase) allowedChars += upperCase;
    if (includeLowerCase) allowedChars += lowerCase;
    if (includeNumbers) allowedChars += numbers;
    if (includeSpecialchars) allowedChars += specialChars;

    if (passwordLength < 4) {
        result.textContent = "Password length must be at least 4";
        return;
    }

    if (allowedChars.length === 0) {
        result.textContent = "At least one character type must be selected";
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.textContent = `Generated Password: ${password}`;
}
