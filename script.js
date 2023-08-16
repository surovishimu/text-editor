document.getElementById('bold-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    if (textArea.style.fontWeight == 'bold') {
        textArea.style.fontWeight = 'normal';

    }
    else {
        textArea.style.fontWeight = 'bold';

    }
})
document.getElementById('italic-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    if (textArea.style.fontStyle == 'italic') {
        textArea.style.fontStyle = 'normal';
    }
    else {
        textArea.style.fontStyle = 'italic';
    }
})
document.getElementById('underline-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textDecoration == 'underline') {
        textArea.style.textDecoration = 'normal';
    }
    else {
        textArea.style.textDecoration = 'underline';
    }
})



document.getElementById('left-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'left';
})
document.getElementById('right-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'right';
})
document.getElementById('center-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'center';
})
document.getElementById('justify-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    textArea.style.textAlign = 'justify';
})


const fontSizeInput = document.getElementById("number-input");
const textArea = document.getElementById('text-area');


fontSizeInput.addEventListener("click", function () {
    const fontsizeValue = fontSizeInput.value;
    textArea.style.fontSize = fontsizeValue + "px";
})

document.getElementById('font-case').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');

    if (textArea.style.textTransform == "uppercase") {
        textArea.style.textTransform = "none";
    }
    else {
        textArea.style.textTransform = "uppercase";
    }
})

const colourInput = document.getElementById("color-btn");
const textArea2 = document.getElementById('text-area');


colourInput.addEventListener("click", function () {
    const colourValue = colourInput.value;
   
    textArea2.style.color = colourValue;
})