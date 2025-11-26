document.writeln(`javascript file code  <br/>`);

document.getElementById("heading").style.color = "red";

var a = 10; //number
document.writeln(`a : ${a} <br/>`);

a = "pankaj"; //string
document.writeln(`a : ${a} <br/>`);

a = true; //boolean
document.writeln(`a : ${a} <br/>`);

//we always receive string value from browser page

//string to number

var b = "101";
var c = "10.51";

// var x = Number(b); //string to number
// var y = Number(c); //string to number
// var d = x + y;
// document.writeln(`d : ${d} <br/>`)


// var x = +b; // string to number // unary operator
// var y = +c; // string to number // unary operator

var x = parseFloat(b); // string to number float
var y = parseFloat(c); // string to number float
var d = x + y;
document.writeln(`d : ${d} <br/>`)


var s1 = "true";
var s2 = Boolean(s1); //string to boolean
document.writeln(`s2 : ${s2} <br/>`); //true

var s3 = "false";
var s4 = s3 === "true";
document.writeln(`s4: ${s4} <br/>`); //false

var i1 = 10;
var i2 = "10";

var b1 = i1 === i2;
document.writeln(`b1 : (i1 === i2) = ${b1} <br/> `); //b1 : (i1 === i2) = false

var v1 = 10;
var v2 = 20;
var v3 = 30;

var b2 = v1 == v2 && v1 < v2;
document.writeln(`v1 ==v2 && v1 < v2 : ${b2} <br/>`); //false

b2 = v1 == v2 && v1 < v3;
document.writeln(`v1 == v2 && v1 < v3 : ${b2} <br/>`); //false


b2 = v1 == v2 || v1 < v2;
document.writeln(`v1 == v2 || v1 < v2 : ${b2}<br/>`); //true


var input = prompt(`please enter a number`);
document.writeln(`you entered : ${input} <br/>`);

switch (input) {
    case "10":
        document.writeln(`${input} : TEN <br/>`);
        break;
    case "20":
        document.writeln(`${input} : TWENTY <br/>`);
        break;
    case "30":
        document.writeln(`${input} : THIRTY <br/>`);
        break;
    default:
        document.writeln(`${input} : NOT 10 20 OR 30 <br/>`);
        break;

}
document.writeln('Javascript Code Completed');