//create polyfil for Array.every((v,i,a)=>{})

function myEvery(fn){
  for (let i = 0; i < this.length; i++) {
    const isTruthy = fn(this[i], i, this);
    if (!isTruthy) {
      return false;
    }
  }
  return true;
}
//add it to prototype

Array.prototype.myEvery = myEvery;

//example

const arr = [23, 45, 6, 8, 12, 45, 56, 12];
const value = arr.myEvery((v, i, a) => {
  return v > 2;
});

console.log(value);