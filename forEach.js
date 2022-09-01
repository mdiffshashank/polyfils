
function myForEach(fn){
    for(let i =0;i<this.length;i++){
      fn(this[i],i,this);
    }
    return ; //undefined 
}

Array.prototype.myForEach = myForEach;

const arr = [2,5,7,9,4]
arr.myForEach(v=>console.log(v));




