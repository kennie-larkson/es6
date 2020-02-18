
//es6 function
let a = 35, b = 17;

const computeDigits = (x=30)=>{

    x += 50;
    return x *= 3;

}

let answer = computeDigits(a);
console.log(answer);

//for...of and for...in. for...of is preffered to for...in as it does
//not work well with arrays where

let obj = { a:1, b:2}

for(let k in obj){
    
    console.log(k);
}



// break(exit iteration completely) and continue(skip an iteration level)

let arr = [1,2,3,4,5]
for(let s in arr){
    console.log(s);
}

for (let x of arr){
    if(x == 4){
        break;
    }
    console.log(x)
}