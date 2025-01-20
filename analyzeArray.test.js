import { analyzeArray } from "./analyzeArray"

describe("analyzeArray", ()=> {
    it("Returns the values", ()=> {
        expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
         });
        expect(analyzeArray([2, 4, 6, 8])).toStrictEqual({
            average: 5,
            min: 2,
            max: 8,
            length: 4
        })
    })

    it("Throws an error if not an array/object", ()=> {
        expect(()=> analyzeArray("tree")).toThrow();
        expect(()=> analyzeArray(50)).toThrow();
        expect(()=> analyzeArray([1, 2, 3])).toBeDefined();
        expect(()=> analyzeArray()).toThrow();
    })
})