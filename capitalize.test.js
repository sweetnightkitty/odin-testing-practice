import { capitalize } from "./capitalize";

describe ("Capitalize function", () => {
    it("capitalize the first letter", () => {
        expect(capitalize("word")).toBe("Word");
        expect(capitalize("sara")).toBe("Sara");
        expect(capitalize("something")).toBe("Something");
    })

    it("Capitalize first letter in a sentence", () => {
        expect(capitalize("this is a sentence.")).toBe("This is a sentence.");
        expect(capitalize("another sentence?")).toBe("Another sentence?");
    })

    it("Capitalize an empty string returns an empty string", () => {
        expect(capitalize("")).toBe("");
    })

    it("Capitalize does not effect already capitalized words/sentence", ()=> {
        expect(capitalize("This is done.")).toBe("This is done.");
        expect(capitalize("My name is Sara.")).toBe("My name is Sara.");
    })

})
