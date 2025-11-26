document.getElementById('btn').addEventListener('mouseup', identifyButton);

function identifyButton(event) {
    console.log(`event type : ${event.type}`);
    console.log(`${event.which} : ${getButtonName(event.which)} button clicked`);
}

function getButtonName(num) {
    switch (num) {
        case 1:
            return 'left';
        case 2:
            return 'middle';
        case 3:
            return "right";
        default:
            return "Invalid";
    }
}

document.getElementById('div1').onclick = div1Click;
document.getElementById('span1').onclick = span1Click;
document.getElementById('btn1').onclick = btn1Click;

function div1Click(event) {
    event.stopPropagation();
    console.log('div 1 clicked');
}

function span1Click(event) {
    event.stopPropagation();
    console.log('span 1 clicked');
}

function btn1Click(event) {
    event.stopPropagation();
    console.log('button 1 clicked');
}

document.getElementById('div2').addEventListener('click', div2Click, true);
document.getElementById('span2').addEventListener('click', span2Click, true);
document.getElementById('btn2').addEventListener('click', btn2Click, true);

function div2Click(event) {
    event.stopPropagation();
    console.log('div 2 clicked');
}

function span2Click(event) {
    event.stopPropagation();
    console.log('span 2 clicked');
}

function btn2Click(event) {
    event.stopPropagation();
    console.log('button 2 clicked');
}