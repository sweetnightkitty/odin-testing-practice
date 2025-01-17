import { reverseString } from "./reverseString"


describe ("Reverse String", () => {

    it("Returns reverse of string", () => {
        expect(reverseString("string")).toBe("gnirts");
        expect(reverseString("dog")).toBe("god");
        expect(reverseString("Hannah")).toBe("hannaH");
    })

    it("Should return an empty string if empty string provided", ()=> {
        expect(reverseString("")).toBe("");
    })

    it("Should throw an error if typeOf is not a string", ()=> {
        expect(()=> reverseString(3)).toThrow(Error);
        expect(()=> reverseString([3, 5])).toThrow(Error);
    })
}

)