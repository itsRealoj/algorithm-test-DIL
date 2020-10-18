// Function to flatten an array.

const flattenArray = (arr) => {

    while (arr.find(x => Array.isArray(x)))
    arr = arr.reduce((x, y) => x.concat(y), []);

    return arr;

}
// console.log(`Flattened Array is: ${flattenArray([1, 2, 3, [4, 5] ])}`);
