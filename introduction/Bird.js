//JSON Object


// var bird={
//     x:100,
//     y:20,
//     color:"blue",
//     eggs:[1,2,3,4,5],
//     fly:function(){
//         console.log("Bird is Flying",this.x,this.y);
//     }


// };
// for(let i=0;i<bird.eggs.length;i++){
//     console.log(bird.eggs[i]);
// }

// //For Each Loop
// bird.eggs.forEach(function(val,idx){
//     console.log(idx,val);
// })

function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}

let mango=new Fruit("Sweet","yellow")
let orange=new Fruit("sour","orange")
//Key-Value Pair Object
var apple={
    taste:"sweet",
    color:"red",
}

//Class Keyword (ECMAScript 2015)
//Class Declaration
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
let kiwi=new FruitClass("sour","green")

// CLASS Expression
let FruitExpression =class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};

let Pineapple=new FruitExpression("sour","yellow");
// Class Declaration is not hoisted
//You have to define a class then only you can use it
//unlike functions where JavaScript Takes the Function Definiton on top