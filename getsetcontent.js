function getcontent() {
    var val = document.getElementById("text1").value;
    console.log(`textbox value : ${val}`);

    val = document.getElementById("p1").innerText;
    console.log(`paragraph text : ${val}`);

    val = document.getElementById("div1").innerHTML
    console.log(`div content : ${val}`);
}

document.getElementById("btn2").onclick = setcotent;

function setcotent() {
    document.getElementById("text2").value = "pankaj more";
    document.getAnimations("p2").innerText = "second paragraph";
    document.getElementById("div2").innerHTML = `div content
      <br/>
    <span>span text</span>
    <br/>
    <lable>lable text</lable>`;
}

document.getElementById("btn3").onclick = getAttributeValue;

function getAttributeValue() {
    var href = document.getElementById("a1").getAttribute("href");
    console.log(`a1 : href value : ${href}`);
}

document.getElementById("btn4").onclick = setAttributeValue;

function setAttributeValue() {
    // set href

    document.getElementById("a2").setAttribute("href", "http://www.facebook.com");
}

document.getElementById("btn5").onclick = getStyles;

function getStyles() {
    var p3 = document.getElementById("para");

    var prop = p3.color;
    console.log(`color : ${p3.style.color}`);

    prop = p3.style.backgroundColor;
    console.log(`background color : ${p3.style.backgroundColor}`);

    prop = p3.style.border;
    console.log(`border : ${p3.style.border}`);
}


document.getElementById("btn6").onclick = setStyle;

function setStyle() {
    var p = document.getElementById("p5");
    p.style.color = "red";
    p.style.backgroundColor = "yellow";
    p.style.border = "1px dashed black";
}


//document.getElementById("btn7").onclick = showHidePassword;     //it show hide password
document.getElementById('btn7').addEventListener('click', showHidePassword);
document.getElementById('btn7').removeEventListener('click', showHidePassword);

function showHidePassword() {
    debugger;
    var pwd = document.getElementById("pwd");
    var btn = document.getElementById("btn7");

    if (btn.getAttribute("value") == "Show") {
        pwd.setAttribute("type", "text");
        btn.setAttribute("value", "Hide");
    } else {
        pwd.setAttribute("type", "password");
        btn.setAttribute("value", "Show");
    }
}