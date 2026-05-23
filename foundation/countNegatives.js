function countNegatives(arr) {
  let result = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i]) || arr[i] === -Infinity || arr[i] === Infinity) {
        return false;
      }
      if (arr[i] < 0) {
        result++;
      }
    }
    return result;
  } else {
    return false;
  }

}

console.log(countNegatives([-1,35,6]));
