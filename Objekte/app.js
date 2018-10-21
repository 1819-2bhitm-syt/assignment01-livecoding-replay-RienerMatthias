
//Pass by Value
let hallo = function(str){
    str = "Hallo + " +  str;

};

let welt = "Welt";
hallo(welt);
console.log(welt);

//Pass by Reference

let halloObject = function (obj){
    //obj.name = "Hallo " + obj.name;
    obj = null;
};
let o = {
   name: "Welt"
};

halloObject(o);
console.log(o);


//Value Type

let x = 10;
let y = x;
x = 20;

console.log("x: " + x);
console.log("y: " + y);


//Reference Type

let x2 = { value: 10};
let y2 = x2;
x2.value = 20;

console.log("x: ", x2);
console.log("y: ", y2);