var number1 = [1, 2, 3, 4, 5, 6];

document.writeln(`number of items : ${number1.length}<br/>`);
document.writeln(`items in array : ${number1}<br/>`)

//reverse() ->reverses sequence of items in array

var num2 = number1.reverse();
document.writeln(`number1.reverse() : ${num2}<br/>`)


//push() -> use to add items to end of the array

number1.push(7);
document.writeln(`number1.push(7) : ${number1}<br/>`)


//pop() -> removes and returns items from end in the array

var item = number1.pop();
document.writeln(`number1.pop() : ${item}<br/>`)
document.writeln(`items after pop() : ${number1}<br/>`)



//unshift() -> add item to start in the array

number1.unshift(8);
document.writeln(`number1.unshift(8) : ${number1}<br/>`)


//shift() -> retrives and removes start items in the array

// item = number1.shift();
// document.writeln(`number1.shift() : ${item}<br/>`)
// document.writeln(`items after shift() : ${number1}<br/>`)


//splice()
//1. to insert item at any position 
//2. to add multiple items
//3. to delete any item 
//4. to delete multiple items 
//5. replacing current items with new items

number1.splice(2, 0, 10); // 6,5,10,4,3,2,1
document.writeln(`number1.splice(2,0,10) : ${number1}<br/>`)

number1.splice(2, 1, 15); // 6,5,15,4,3,2,1
document.writeln(`number1.splice(2,1,15) : ${number1}<br/>`)

number1.splice(0, 2, 20, 21); // 20,21,15,4,3,2,1
document.writeln(`number1.splice(0,2,20,21) : ${number1}<br/>`)

//find() -> returns the first item that matches the condition

item = number1.find(function(val, ind, arr) {
    return val % 2 == 0;
});
document.writeln(`number1.find() : ${item}<br/>`) //20
document.writeln(`items after find() : ${number1}<br/>`) // 20,21,15,5,4,3,2,1


var index = number1.findIndex(function(val, ind, arr) {
    return val == 5;
});
document.writeln(`number1.findindex() : ${index}<br/>`) //3


//sort() -> sorts the items in array in ascending order


document.writeln(`array items : ${number1}<br/>`);
num2 = number1.sort();
document.writeln(`numbers1.sort() : ${number1}<br/>`); //1,15,2,20,21,3,4,5
document.writeln(`numbers1.sort() : ${num2}<br/>`); //1,15,2,20,21,3,4,5


var alphabets = ['d', 'a', 'c', 'b', 'e'];
alphabets.sort();
document.writeln(`alphabets.sort() : ${alphabets}<br/>`) //a,b,c,d,e


//filter() -> returns all the items that matches the condition

num2 = number1.filter(function(val, ind, arr) {
    return val % 2 == 0;
});
document.writeln(`number1.filter() : ${num2}<br/>`) //2,4,20


//sort() -> sorts the items in array in ascending order

var num3 = [1, 5, 10, 15, 20, 25, 30];
document.writeln(`num3 items : ${num3}<br/>`);
num3.sort();
document.writeln(`num3.sort() : ${num3}<br/>`); //1,10,15,20,25,30,5


//reduce() -> represent array items to a single value

var total = number1.reduce(function(a, b) {
    return a + b;
});
document.writeln(`number1.reduce() : ${total}<br/>`) //71


total = number1.reduce(function(a, b) {
    return a * b;
});
document.writeln(`number1.reduce() : ${total}<br/>`) //756000



number1.forEach(function(val) {
    document.writeln(`${val},`);
}); //1, 15, 2, 20, 21, 3, 4, 5,


//some() -> returns true if any one item matches the condition

var b1 = number1.some(function(val, ind, arr) {
    return val > 15;
});
document.writeln(`number1.some() : ${b1}<br/>`) //true


b1 = number1.every(function(val, ind, arr) {
    return val > 0;
});
document.writeln(`number1.every() : ${b1}<br/>`) //true

b1 = number1.includes(15);
document.writeln(`number1.includes(15) : ${b1}<br/>`) //true

b1 = number1.includes(100);
document.writeln(`number1.includes(100) : ${b1}<br/>`) //false

var result = number1.join('-');
document.writeln(`join('-') : ${result}<br/>`) //1-15-2-20-21-3-4-5