//find return's  first value that satisfy the condition 
// whereas filter return the array with all the truthy values 

function myFind(fn){
    for(let i =0;i<this.length;i++){
        const isTruthy = fn(this[i],i,this)
        if(isTruthy){
            return this[i];
        }
    }
    return ; //undefined 
}

Array.prototype.myFind = myFind;

const arr = [2,5,7,9,4]
// const result = arr.myFind(v=>v>3 && v%2===0);
const result = arr.myFind(v=>v>10 && v%2===0);
console.log(result);
