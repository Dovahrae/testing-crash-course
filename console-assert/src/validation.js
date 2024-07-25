export const validatePassword = (password) => {
    if (password.length < 8) {
        return false;
    }

    const common = ["12345678", "password", "admin123", "abc12345", "secretsz"];

    for (let item of common) {
        if (password === item) {
            return false;
        }
    }

    const specialCharacters = ["!", "@", "#"];
    for (let specialCharacter of specialCharacters) {
        const index = password.indexOf(specialCharacter);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

console.assert(
    validatePassword("a1b2c3d4e5!") === true,
    "this is a valid password"
);
console.assert(validatePassword("a") === false, "this is too short");
console.assert(
    validatePassword("anything") === false,
    "there is no special character"
);
console.assert(validatePassword("12345678") === false, "too common");

// What the code should do
// 1. check that the password is >7 characters in length
// 2. not be a "commonly used" password
// 3. make sure it has at least one special character
