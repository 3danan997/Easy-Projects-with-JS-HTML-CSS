const textInput = document.getElementById("textInput");
const celToFah = document.getElementById("celToFah");
const fahToCel = document.getElementById("fahToCel");
const result = document.getElementById("result");
let temp;

function convert(){
    if(celToFah.checked){
        temp = Number(textInput.value) * (9/5) + 32;
        result.textContent=Math.round(temp*100)/100;
    }
    else if(fahToCel.checked){
        temp = (Number(textInput.value)-32) * (5/9);
        result.textContent=Math.round(temp *100)/100;
    }
    else{
        result.textContent="Select a unit first"
    }
}

document.getElementById("submitBtn").onclick=convert;