export function analyzeArray(array) {

    return {
        average: findAverage(array),
        min: findMinMax(array, "min"),
        max: findMinMax(array, "max"),
        length: array.length
    }
}

const object = analyzeArray([1,8,3,4,2,6]);

function findAverage(array) {
    return array.reduce((a, b) => a + b) / array.length;
};

function findMinMax(array, option) {
const sorted = array.sort((a, b) => a - b);
if(option == "min") return sorted[0];
if(option == "max") return sorted[sorted.length - 1];
}