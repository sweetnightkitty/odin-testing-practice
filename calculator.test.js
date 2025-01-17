import { calculator } from "./calculator";

describe ("Calculator", ()=> {
    it("Calculator exists", ()=> {
        expect(calculator()).toBeDefined();
    })

    it("Adds two numbers", ()=> {
        expect(calculator().add(3, 5)).toBe(8);
        expect(calculator().add(8, 2)).toBe(10);
        expect(calculator().add(-3, 10)).toBe(7);
    })

    it("Subtracts two numbers", ()=> {
        expect(calculator().subtract(5, 3)).toBe(2);
        expect(calculator().subtract(8, 2)).toBe(6);
        expect(calculator().subtract(-3, 10)).toBe(-13);
    })

    it("Multiplies two numbers", ()=> {
        expect(calculator().multiply(5, 3)).toBe(15);
        expect(calculator().multiply(8, 2)).toBe(16);
        expect(calculator().multiply(-3, 10)).toBe(-30);
    })

    it("Divides two numbers", ()=> {
        expect(calculator().divide(8, 2)).toBe(4);
    })

    it("Divides two numbers that resut in a decimal", ()=> {
        expect(calculator().divide(5, 3)).toBeCloseTo(1.666);
        expect(calculator().divide(30, 100)).toBe(0.30);
        expect(calculator().divide(1, 3)).toBeCloseTo(0.3333);
    })

    it("Throws an error when dividing by zero", ()=> {
        expect(()=> (calculator().divide(5, 0))).toThrow();
    })
})