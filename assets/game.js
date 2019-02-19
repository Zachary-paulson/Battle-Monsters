let venusaur = {
    name: "Venusaur",
    level: 50,
    hp: 80,
    attack: 82,
    defense: 83,
    speed: 80,
    type: "grass",
    conditionStatus: "Normal"
}

let blastoise = {
    name: "Blastoise",
    level: 50,
    hp: 79,
    attack: 83,
    defense: 100,
    speed: 78,
    type: "water",
    condition: "Normal"
}

let charizard = {
    name: "Charizard",
    level: 50,
    hp: 78,
    attack: 84,
    defense: 78,
    speed: 100,
    type: "fire",
    condition: "normal"
}

let chansey = {
    name: "chansey",
    level: 50,
    hp: 250,
    attack: 105,
    defense: 105,
    speed: 105,
    type: "normal",
    condition: "normal"
}

let condition = ["normal", "alseep", "paralyzed", "poisoned ", "burned", "freezed"]

//startGame();

//playerPick();

//gameTurn();

// damage(lvl, atk, def, modifer, pwr);

// getCrit();

// getRndmDmgMod();

// replayGame();

    //console.log(damage(50, 82, 100, 55, true, "water", "fire"));

function startGame() {
    // create 4 pokemon objects
}

//tested functioning correctly.
function damage(lvl, atk, def, pwr, stab, pkm1, pkm2) {
    // Need to code RandomSource, stab, tpye, and crit.
    let modifer = getCrit() * getRndmDmgMod() * getSTAB(stab) * type(pkm1, pkm2);
    return Math.round( ((((((2 * lvl) / 5) + 2) * pwr * (atk / def)) / 50) + 2) * modifer)
}

//tested functioning correctly.
function getCrit() {
    let rndmNum = Math.floor((Math.random() * 255) + 1);
    switch (rndmNum) {
        case 1:
            return 1.5;
        default:
            return 1;
    }
}

//tested functioning correctly.
function getRndmDmgMod(){
    rndmDmgmod = Math.floor(Math.random() * (100 - 85 + 1) + 85);
    return rndmDmgmod / 100;
}

//tested functioning correctly.
function getSTAB(stab){
    switch(stab){
        case true:
            return 1.5;
        default:
            return 1;
    }
}

//tested functioning correctly.
function type(pkm1, pkm2){
    if(pkm1 === "water"){
        if(pkm2 === "fire"){
            return 2;
        }
        else if(pkm2 === "grass"){
            return 0.5;
        }
        else{
            return 1;
        }//end nested if
    }//end if
    else if(pkm1 === "grass"){
        if(pkm2 === "water"){
            return 2;
        }
        else if(pkm2 === "fire"){
            return 0.5;
        }
        else{
            return 1;
        }//end nested if
    }//end  else if
    else if(pkm1 === "fire"){
        if(pkm2 === "grass"){
            return 2;
        }
        else if(pkm2 === "water"){
            return 0.5;
        }
        else{
            return 1;
        }//end nested if
    }//end  else if
    else{
        return 1;
    }//end entire if statment.
}