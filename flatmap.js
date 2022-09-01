//flatmap is map followed by flat of depth 1

function myFlatMap(fn) {
  return this.map(fn).flat(1);
}

Array.prototype.myFlatMap = myFlatMap;

const arr = [[3,4],[5,14,13],44,[[18,23]]];
const result = arr.myFlatMap((v,i,a)=>v+1);
console.log(result);



