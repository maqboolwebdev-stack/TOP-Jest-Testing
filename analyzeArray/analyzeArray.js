export function analyzeArray(array) {

  let length = array.length;

  let min = Math.min(...array);

  let max = Math.max(...array);

  let average = array.reduce((sum, val) => sum + val, 0) / array.length;

  return {
    average: Number(average.toFixed(2)),
    min: min,
    max: max,
    length: length,
  };
}

const object = analyzeArray([1,1,1,2,3,3]);

console.log(object);
