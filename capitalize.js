export function capitalize(word) {
    const firstLetter = String(word).charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);
    return firstLetter + remainingLetters;
};