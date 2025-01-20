
import { casearCipher, isUpperCase } from "./caesarCipher";

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
        expect(casearCipher("xyz")).toBe("abc");
        expect(casearCipher("Stay", 5)).toBe("Xyfd");
    })

    it("Code contains a space", ()=> {
        expect(casearCipher("do g")).toBe("gr j");
        expect(casearCipher("ca t")).toBe("fd w");
        expect(casearCipher("do g", 5)).toBe("it l");
    })

    it("Preserves cases", ()=> {
        expect(casearCipher("Dog")).toBe("Grj");
        expect(casearCipher("CaT")).toBe("FdW");
    })

    it("Preserves cases & maintains spaces", ()=> {
        expect(casearCipher("do G")).toBe("gr J");
        expect(casearCipher("C A T")).toBe("F D W");
    })

})

describe("isUppercase", ()=> {
    it("checks if value of one letter is uppercase", ()=> {
        expect(isUpperCase("a")).toBe(false);
        expect(isUpperCase("B")).toBe(true);
    })
})