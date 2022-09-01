function myMap(fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this));
  }
  return arr;
}

Array.prototype.myMap = myMap;

arr = [1, 2, 3, 4, 5, 6];
const result = arr.myMap((v) => v * 2);
console.log(result);
