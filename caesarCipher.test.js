import { callExpression } from "@babel/types";
import { casearCipher } from "./caesarCipher";

describe("Caesar Cipher", ()=>{
    it("Throws error if no parameter entered", ()=> {
        expect(()=> casearCipher()).toThrow();
    })

    it("Returns a shifted word by default shiftValue 3", ()=> {
        expect(casearCipher("dog")).toBe("grj");
        expect(casearCipher("cat")).toBe("fdw");
        expect(casearCipher("hello")).toBe("khoor");
    })

    it("Throws error if parameter provided is not a string", ()=> {
        expect(()=> casearCipher(3)).toThrow();
    })

    it("Creates a new code of words shifted by any value", ()=> {
        expect(casearCipher("dog", 3)).toBe("grj");
        expect(casearCipher("dog", 5)).toBe("itl");
    })

})