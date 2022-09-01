//create polyfil for Array.every((v,i,a)=>{})

function mySome(fn){
    for (let i = 0; i < this.length; i++) {
      const isTruthy = fn(this[i], i, this);
      if (isTruthy) {
        return true;
      }
    }
    return false;
  }
  //add it to prototype
  
  Array.prototype.mySome = mySome;
  
  //example
  
  const arr = [23, 45, 6, 8, 12, 45, 56, 12];
  const value = arr.mySome((v, i, a) => {
    return v === 100;
  });
  
  console.log(value);