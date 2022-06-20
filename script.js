let you;
let yourscore = 0;
let opp;
let oppscore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for(let i=0; i<3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choice").append(choice);
    }
}
function selectChoice() {
    you = this.id;
    document.getElementById("yoc").src = you + ".png";

    opp = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opc").src = opp + ".png";

    if (you == "rock"){
        if(opp == "scissors") {
            yourscore ++;
        }
        else if(opp == "paper"){
            oppscore ++;
        }
    }
    else if (you == "scissors"){
        if(opp == "paper") {
            yourscore ++;
        }
        else if(opp == "rock"){
            oppscore ++;
        }
    }
    else if (you == "paper"){
        if(opp == "rock") {
            yourscore ++;
        }
        else if(opp == "scissors"){
            oppscore ++;
        }
    }
    document.getElementById("yos").innerText = yourscore;
    document.getElementById("ops").innerText = oppscore;
}
