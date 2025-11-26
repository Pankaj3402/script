// function declaration

function printA() {
    document.writeln("printA function called. <br/>")
}

printA(); //function call

var result = printA();
document.writeln(`printA returned : ${result} <br/>`);

function printB(a) {
    document.writeln(`printB() function called a : ${a} <br/>`);
    document.writeln(`number of argument passed : ${arguments.length} <br/>`);

    for (var arg of arguments) {
        document.writeln(`${arg},`);
    }
    document.writeln("<br/>");
}

printB(45, 3, 5);
printB('pankaj');
printB();

function printC(name = 'v# ') {
    document.writeln(`printC function called, name : ${name} <br/>`);

}

printC('pankaj'); //pankaj
printC(); //printC function called, name : v#


function printD(...arr) {
    document.writeln(`printD() function called.  arr : ${arr} <br/> `)
}

printD(45); //45
printD(10, 20, 30, 40); // 10,20,30,40


printE(); //function call    //undefined
//function declaration
function printE() {
    document.writeln(`printE function called : ${empname}<br/>`);
}
var empname = "pankaj"; //global



function printF() {
    var empname = "pankaj"; //local
    document.writeln(`printF function called : ${empname} <br/>`);
}
printF(); //pankaj


function printH() {
    var i = "local variable inside printH()";
    document.writeln(`printH() function called : ${i}<br/>`);
}
printH(); //local variable inside printH()



function printI() {
    var local = "I variable";
    document.writeln(`printI() function called: local : ${local} <br/>`);

    if (true) {
        // var v1 = 'variable declared inside if block';
        //let v1 = 'variable declared inside if block';
        const v1 = 'variable declared inside if block';

        document.writeln(`if block variable inside if block  : ${v1}<br/>`);
    }
    //const v1 = 'variable declared inside if block'; //if block variable in funciton : variable declared inside if block
    //document.writeln(`if block variable in funciton  : ${v1}<br/>`);
}
printI(); //if block variable inside if block : variable declared inside if block


printJ(); //undefined

// variable hoisting
function printJ() {
    var i;
    document.writeln(`printJ() function called i : ${i}<br/>`);
    // var i = 10;
    i = 10;
}