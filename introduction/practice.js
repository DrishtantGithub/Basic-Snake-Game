let a=10;
console.log(a);

let b=[1,2,3,4,5]
console.log(b)
console.log("Hello World");

c=20;//Global Variable
var d=30;//Function Variable
let e=50;//Block Scope

function fun(){
    let a=5;
    if(a==5){
        let f=10;
        console.log("Inside",f);
    }
    console.log("Outside,f");
}
square_root(10);

function square_root(n){
    console.log("In First sqrt Fn");
    
    // return Math.sqrt(n);
}
// Function Hoisting

var sqrt_n=function(){
    console.log("In Second Sqrt Fn");
}
sqrt_n(10)

let arr=["Apple","Mango","Guava"];
console.log(arr)

for(let i=0;i<4;i++){
    console.log(arr[i]);
}

arr.push("Banana")//Push Element in the End
arr.pop()//Remove Element from the End and return it
arr.shift()//Remove element from the print
arr.unshift("Kiwi")//Add element in the print
print(arr)
arr.indexOf("Kiwi")//Return Index of The element here It Is Kiwi

if(arr[0]=="Apple"){
    console.log("It's an Apple");
}else{
    console.log("No It is a",arr[0])
}

//Object oriented Programming in JavaScript
