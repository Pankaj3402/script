function printA() {
    document.writeln(`function printA() called <br/>`);
}
printA();

//function expression

var printB = function() {
    document.writeln(`printB anonymous function called. <br/>`);
}
printB();


function printC(val) {
    document.writeln(`inside printC() function <br/>`);
    val(); //executing function within another function
}
printC(printB); //passing a function as parameter


var printD = function factorial(num) {
    document.writeln(`factorial function called <br/>`);

    var fact = 1;
    for (var i = num; i >= 1; i--) {
        fact *= i;
    }
    document.writeln(`factorial ${num} is ${fact} <br/>`);
};
//factorial();  error

printD(5); //120
printD(3); //6
printD(4); //24


//recurssive function

var printE = function factorial(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
};
var fact = printE(5);
document.writeln(`printE() : factorial of 5 is ${fact} <br/>`);


// IIFE

var printF = (function factorial(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
})(5);
fact = printF;
document.writeln(`printF : factorial (5) is ${fact} <br/>`);


//arrow functions
var printG = () => document.writeln(`printG() function called <br/> `);
printG();


var printH = (a, b) =>
    document.writeln(`printH() : ${a} + ${b} = ${a + b} <br/>`);
printH(10, 20); // printH() : 10 + 20 = 30
printH(); //printH() : undefined + undefined = NaN


var printI = (a, b) => a + b;
var r1 = printI(10, 20);
document.writeln(`printi() : output ${r1} <br/>`);


var printJ = (a, b) => {
    var c = a + b;
    return c;
}
r1 = printJ(10, 200);
document.writeln(`printJ() : output ${r1} <br/>`);


//closure function

function outer() {
    function inner() {
        document.writeln(`outer() : inner() function called <br/>`);
    }
    return inner(); //outer() : inner() function called
}
r1 = outer();
document.writeln(`${r1} <br/>`); //undefined


function addition(a) {
    var result = "addition is : ";

    function add(b) {
        return result + (a + b);
    }
    return add;
}
r1 = addition(10)(20); // addition(10) (20) : addition is : 30
document.writeln(`addition(10) (20) : ${r1} <br/>`);



function multiply(a, b, c) {
    return a * b * c;

}
r1 = multiply(2, 3, 4); //multiply(2*3*4) : 24
document.writeln(`multiply(2*3*4) : ${r1} <br/>`);



function multiplyb(a) {
    function multiplyc(b) {
        function multiplyd(c) {
            return a * b * c;
        }
        return multiplyd
    }
    return multiplyc
}

r1 = multiplyb(2)(3)(4);
document.writeln(`multiplyb(2)(3)(4) : ${r1} <br/>`); //multiplyb(2)(3)(4) : 24