var current = new Date(); // get current datetime
document.writeln(`current datetime: ${current}<br>`); // Thu Oct 16 2025 12:28:24 GMT+0530 (India Standard Time)

var year = current.getFullYear(); // get current year
document.writeln(`current year: ${year}<br>`); //2025

var month = current.getMonth(); // get current month
document.writeln(`current month: ${month}<br>`); //9 
document.writeln(`current month: ${month + 1}<br>`); //10 (month is 0-indexed)

var months = ["january", "february", "march", "april", "may", "june", "july", "august", "septembder",
    "october", "november", "december"
];
document.writeln(`month name : ${months[month]}<br/>`); // october


var date = current.getDate(); // get current date
document.writeln(`curremt date : ${date}<br>`); //16


var day = current.getDay(); // get current day
document.writeln(`current day : ${day}<br>`); //4


var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
document.writeln(`day name : ${days[day]}<br/>`); //thu


if (date < 16) {
    date = "0" + date;
}

month++;

if (month < 10) {
    month = "0" + month;
}

var dateformat = date + "/" + month + "/" + year;
document.writeln(`date format : ${dateformat}<br/>`); // 16/10/2025


var dob = new Date('04/03/2002'); // parse string to date
document.writeln(`dob : ${dob}<br/>`); //Wed Apr 03 2002 00:00:00 GMT+0530 (India Standard Time)
document.writeln(`dob year : ${dob.getFullYear()}<br/>`); // 2002