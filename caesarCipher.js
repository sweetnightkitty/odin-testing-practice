export function casearCipher(word, shiftValue = 3) {
    if(!word) {
        throw new Error("Need to provide a message to code");
    }

    if(typeof word !== "string") {
        throw new Error("Must provide a string");
    }

    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

    //Convert the provided string "word" into an array
    const queue = Array.from(word);
    let code = [];


    //Convert the word queue to a code corresponding to normal alphabet
    for(const letter of queue) {
        for(let i = 0; i < alphabet.length; i++) {
            if(letter.toLowerCase() == alphabet[i])  {
                code.push(i)
            }
        }
    }

    //Shift the code by addition factor "shiftValue" to create new #code
    const newCode = code.map((value) => {
        if((value + shiftValue) > 24) {
            return value + shiftValue - 26;
        } else {
            return value + shiftValue;
        }
    });

    //Use the alphabet to convert the new code back into letters
    const newString = [];
    newCode.map((i)=> newString.push(alphabet[i]));

    //Checks for uppercase, spaces and punctuation and adds them back in
    for(let i = 0; i < queue.length; i++) {
        //If not a letter then it's a space or punctuation
        if(isALetter(queue[i]) == false) {
            newString.splice(i, 0, queue[i]);
        } else if(isUpperCase(queue[i]) == true) {
            newString[i] = newString[i].toUpperCase();
        }
    }

    //Converts final string to an array
    return newString.join("");
}

export function isUpperCase(letter) {
if(letter == letter.toUpperCase()) {
    return true;
} else {
    return false;
}
}

export function isALetter(letter) {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
    for(let i = 0; i < alphabet.length; i++) {
        if(alphabet[i] == letter.toLowerCase()) {
            return true;
        }
    }
    return false;
}


//Shift factor should be 3
// ORIGINAL: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// KEY:      D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


//dog -> grj
//cat -> fdw
//hello -> khoor