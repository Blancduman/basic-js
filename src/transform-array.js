module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (typeof arr[i + 1] !== "undefined") i++;
        break;
      case "--discard-prev":
        if (typeof arr[i - 1] !== "undefined") result.pop();
        break;
      case "--double-next":
        if (typeof arr[i + 1] !== "undefined") result.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (typeof arr[i - 1] !== "undefined") result.push(arr[i - 1]);
        break;

      default:
        result.push(arr[i]);
        break;
    }
  }

  return result;
};
