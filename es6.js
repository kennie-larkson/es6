
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

let arr = [1,2,3,4,5]
for(let s in arr){
    console.log(s);
}



// break(exit iteration completely) and continue(skip an iteration level)

let ar = [1,2,3,4,5]

//loop is stopped (exit) when the condittion x==4 is reached
for (let x of ar){
    if(x == 4){
        break;
    }
    console.log(x)
}

//loop is skipped at the condittion x==4 to the next iteration
for (let x of ar){
    if(x == 4){
        continue;
    }
    console.log(x)
}

//finding object key by it's value 
const myObject = {
    lname : 'Lawal',
    fname : 'kennie',
    job : 'developer'
}

const findKeyByValue = (object,value) =>{
    for(prop in object){
        if(Object.hasOwnProperty(prop)){
            if(object[prop] === value)
               return prop;
            
        }
    }
}

let ans = findKeyByValue(myObject,'developer');
console.log(ans);

