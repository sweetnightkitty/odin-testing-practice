export function casearCipher(word) {
    if(!word) {
        throw new Error("Need to provide a message to code");
    }

    if(typeof word !== "string") {
        throw new Error("Must provide a string");
    }
    //Stores reference to normal alphabet array
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

    //Convert the provided string "word" into an array
    const queue = Array.from(word);
    let code = [];

    //Convert the word queue to a code corresponding to normal alphabet
    for(const letter of queue) {
        for(let i = 0; i < alphabet.length; i++) {
            if(letter == alphabet[i])  {
                code.push(i)
            }
        }
    }

    //Shift the code by adding 3 to create new code
    const newCode = code.map((value) => value + 3);

    //Use the alphabet to convert the new code back into letters
    const newString = [];
    newCode.map((i)=> newString.push(alphabet[i]));

    // return newString.join("");
    return newString.join("");
}



//Shift factor should be 3
// ORIGINAL: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// KEY:      D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


//dog -> grj
//cat -> fdw
//hello -> khoor