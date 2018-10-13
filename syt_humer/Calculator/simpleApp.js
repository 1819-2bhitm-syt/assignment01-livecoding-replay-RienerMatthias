

function printCalculation(operator, calculate){
    console.log("20 " + operator + " 3 = " + calculate (20,3))
}



function sum(num1, num2){
    return num1 + num2;
}

function difference(num1, num2){
    return num1 - num2;
}


function mult(num1, num2){
    return num1 * num2;
}


function div(num1, num2){
    return num1  / num2;
}




printCalculation("+",sum);
printCalculation("-",difference);

printCalculation(" * ",mult);
printCalculation(" / ",div);