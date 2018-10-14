// Object Literal Syntax

const circle1 = {
    radius: 1,
    location: {
        x : 1,
        y : 1
    },

    draw : function(){
        console.log(`draw`);
    }


};

circle1.draw();

// Factory Function

function createCircle2(radius){
    return {
        radius,
        draw:function ( ){
            console.log(`draw`);
        }
    };
}

const circle = createCircle2(1);
circle.draw();



// Constructor Function

function Circle3(radius){
    console.log(`this` , this )
    this.radius = radius;
    this.draw = function(){
        console.log(`draw`);
    };
}

const another = new Cirlce3(1);

//Object

let x = {};
let x1 = new Object();

//String

let name1 = ``;
let name2 = "";
let name3 = '';
let name4 = new String();


//Boolean

let ok1 = true;
let ok2 = false;
let ok3 = new Boolean();


//Number

let total1 = 1;
let total2 = 2;
let total3 = 3;
let total4 = 4;
let total5 = new Number();



//Function

let name = 'Susi';
console.log('name = ',name,name.constructor);

let ok = true;
console.log('ok = ',ok,ok.constructor);

let total = 100;
console.log('total = ',total,total.constructor);