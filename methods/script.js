console.log("hello");

// add the index each number

// let nums = [10,20,30,40]
// let t1 = nums.map((val, i )=>{
// return val+i;
// })

// console.log(t1)


// Task 2 — Convert each number to: number % 10
// let nums = [21,45,63,84]

// let t2 = nums.map((val)=>{
//     return val%10
// })

// console.log(t2)

// Task 3 — Halve all even numbers, double all odd numbers
// let nums = [4,9,12,7]

// let t3 = nums.map((val)=>{
//     if(val%2==0)return val/2;
//     else return val*2;
// })
// console.log(t3)

// Task 4 
// Keep only numbers > 25
// let nums = [10,30,22,40,5]
// let t4 =  nums.filter((val)=>val>25)
// console.log(t4)

// Task 5 
// Task 5 — Keep only numbers that are multiples of 3

// let nums = [9,10,12,20,21]

// let t5 = nums.filter((val)=> val%3==0)

// console.log(t5)

// task 6
// Task 6 — Remove all even numbers (keep only odd numbers)
// let nums = [11,22,33,44,55]
// let t6 = nums.filter((val)=>val%2!=0)
// console.log(t6)


// Task 7 — Find sum of all numbers
// let  nums = [5,10,15]
// let t7 = nums.reduce((sum,val)=>{
//     return  sum+val
// },0)

// console.log(t7)

// task 8 - Task 8 — Find the biggest number

// let  nums = [5,10,15]
// let t8 = nums.reduce((max,val)=>{
//     return  max<val ? val:max
// },0)

// console.log(t8)

// task 9 - 
// let nums = [2,3,5];
// let t9 = nums.reduce((prod,val)=>{
//     return prod*val;
// },1);

// console.log(t9)



// console.log(a);

// const p = true;
// let x = 34;
// let q = undefined;
// let r = null;

// console.log(p,x,typeof(q),typeof(r));

// let o = {
//     name:"Yash",
//     "job role ":"sde"
// }

// console.log(o["job role "])

// function user(name,user){
// }

// let a = ()=>{
// console.log("hell")
// }

// function demo() {
    
// }

// (()=>{
//     console.log("hellao")
// })()


// let b = "yash";

// console.log(b.slice(1,2))
// console.log(b.replace("y","k"))
 

// console.log(b[0])
// console.log(b.length)
 

// console.log(`his name is ${b}` )

let arr = [1,2,3,4]
// console.log(arr.length)
// console.log(typeof(arr))
// console.log(arr.toString())
// console.log(arr.join("and "))

//  arr.pop()
//  console.log(arr)

// console.log()
// map filter reduce

let newArr = arr.map((e)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
}

console.log(newArr.filter(greaterThanSeven));


let arr3 = [1,2,3,4,5,6];
const red = (a,b)=>{
    return a*b;
}

console.log(arr3.reduce(red))
 
let arr4 = [1,2,3,4]
// let arr5 = arr4.map((a)=>{
//     return a+2
// })

// console.log(arr5 + " printng somethin")

// console.log(arr4.reduce((a)=>{return a*b}))
console.log(arr4.forEach((x)=>{
    console
}))