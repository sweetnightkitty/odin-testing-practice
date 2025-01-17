export function reverseString(string) {
    if(typeof string !== "string") {
        throw new Error("Must input a string");
    }
    return string.split("").reverse().join("");
}