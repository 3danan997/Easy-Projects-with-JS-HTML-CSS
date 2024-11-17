
function rollDice(){
    const diceBox = document.getElementById("diceBox").value;
    const result = document.getElementById("result");
    const diceImages= document.getElementById("diceImages");
    let dices=[];
    let images=[];
    if(diceBox>0){
        result.textContent="dice: "
        for (let i = 0; i < diceBox; i++){
            dices[i]=(Math.floor((Math.random()*6)+1));
            images[i]=`<img src="dice_images/Dice-${dices[i]}.png" alt="Dice-${dices[i]}.png">`
        }
        result.textContent=`dice: ${dices.join(', ')}`;
        diceImages.innerHTML= images.join('');
    }
    else{
        result.textContent="Please give a number that is bigger than 0"
    }
}
