export function calculator(a, b) {

    return {
        add: (a, b) => {return a + b},
        subtract: (a, b) => {return a - b},
        multiply: (a, b) => { return a * b},
        divide: (a, b) => {
            if(b == 0) {
                throw new Error("Cannot divide by zero");
            } else {
                return a / b;
            }
        }
        }
    };