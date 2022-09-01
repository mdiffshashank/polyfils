//create polyfil for Array.every((v,i,a)=>{})

function myFilter(fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    const isTruthy = fn(this[i], i, this);
    if (isTruthy) {
      arr.push(this[i]);
    }
  }
  return arr;
}
//add it to prototype

Array.prototype.myFilter = myFilter;

//example

const arr = [23, 45, 6, 8, 12, 45, 56, 12];
const value = arr.myFilter((v, i, a) => v > 50);

console.log(value);
