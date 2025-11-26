document.writeln(`javascript file loaded started..<br/>`);

// try {
//     callAfunction();
// } catch (e) {
//     console.log(e.message);
// }

window.onerror = function(message, url, linenumber) {
    console.log(`message : ${message}`);
    console.log(`url : ${url}`);
    console.log(`line number : ${linenumber}`);

    // redirect to another page
    // window.location.href = "event.html";
};
callAfunction(); // function call // runtime error
document.writeln(`javascript file loaded ended..<br/>`);






// follwing is the result of code this result find in inspect -> console 

// message : Uncaught ReferenceError: callAfunction is not defined
//  url : http://127.0.0.1:5500/errorhandling1.js
//  line number : 17