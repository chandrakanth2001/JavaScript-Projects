// slider variables
const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

// span variables
const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("color-box"); //colorboxdiv

const copyButton = document.getElementById("copyButton"); //copy button

const inputTypeRGBValue = document.getElementById("inputType"); //rgb value input

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

copyButton.addEventListener("click", copyRGBValue);

//functions

function updateColor() {

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    // console.log(redValue, greenValue, blueValue);

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
    // console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;
    
    inputTypeRGBValue.textContent = rgbColor
}

updateColor();
//copy function

function copyRGBValue(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
        .then(()=>{
            alert("RGB Color Values copied to Clipboard: " + rgbColor)
        })
        .catch((error)=>{
            console.error("Failed to Copy RGB Values",error);
        })
}
