$(document).ready(function(){

let venusaur = {
    name: "Venusaur",
    level: 50,
    hp: 80,
    attack: 82,
    defense: 83,
    speed: 80,
    type: "grass",
    conditionStatus: "Normal",
    razorLeaf : {
        name: "Razor Leaf",
        pwr: 55,
        hitChance: 95,
        stab: true,
        effect: "none",
        delay: "none"
    },
    sleepPowder : {
        name: "Sleep Powder",
        pwr: 0,
        hitChance: 75,
        stab: true,
        effect: "sleep",
        delay: "none"
    },
    SwordsDance : {
        name: "Swords Dance",
        pwr: 0,
        hitChance: 100,
        stab: true,
        effect: "attackUp",
        delay: "none"
    },
    bodySlam : {
        name: "Body Slam",
        pwr: 85,
        hitChance: 100,
        stab: false,
        effect: "none",
        delay: "none"
    }
}

let blastoise = {
    name: "Blastoise",
    level: 50,
    hp: 79,
    attack: 83,
    defense: 100,
    speed: 78,
    type: "water",
    condition: "Normal",
    surf : {
        name: "Surf",
        pwr: 90,
        hitChance: 100,
        stab: true,
        effect: "none",
        delay: "none"
    },
    blizzard : {
        name: "Sleep Powder",
        pwr: 0,
        hitChance: 75,
        stab: true,
        effect: "sleep",
        delay: "none"
    },
    bodySlam : {
        name: "Body Slam",
        pwr: 85,
        hitChance: 100,
        stab: false,
        effect: "none",
        delay: "none"
    },
    hydroPump : {
        name: "Hydro Pump",
        pwr: 110,
        hitChance: 80,
        stab: true,
        effect: "none",
        delay: "none"
    }
}

let charizard = {
    name: "Charizard",
    level: 50,
    hp: 78,
    attack: 84,
    defense: 78,
    speed: 100,
    type: "fire",
    condition: "normal",
    fireBlast : {
        name: "Fire Blast",
        pwr: 110,
        hitChance: 85,
        stab: true,
        effect: "none",
        delay: "none"
    },
    earthQuake : {
        name: "Earth Quake",
        pwr: 100,
        hitChance: 100,
        stab: false,
        effect: "none",
        delay: "none"
    },
    SwordsDance : {
        name: "Swords Dance",
        pwr: 0,
        hitChance: 100,
        stab: true,
        effect: "attackUp",
        delay: "none"
    },
    bodySlam : {
        name: "Body Slam",
        pwr: 85,
        hitChance: 100,
        stab: false,
        effect: "none",
        delay: "none"
    }
}

let chansey = {
    name: "chansey",
    level: 50,
    hp: 250,
    attack: 105,
    defense: 105,
    speed: 105,
    type: "normal",
    condition: "normal",
    iceBeam : {
        name: "Ice Beam",
        pwr: 90,
        hitChance: 100,
        stab: false,
        effect: "freeze",
        delay: "none"
    },
    softBoiled : {
        name: "Soft Boiled",
        pwr: 0,
        hitChance: 100,
        stab: true,
        effect: "none",
        delay: "none"
    },
    thunderWave : {
        name: "Thunder Wave",
        pwr: 0,
        hitChance: 90,
        stab: false,
        effect: "paralyze",
        delay: "none"
    },
    thunderbolt : {
        name: "Thunderbolt",
        pwr: 90,
        hitChance: 100,
        stab: false,
        effect: "none",
        delay: "none"
    }
}

$(document).on("click","#enemyPic",function(){
    console.log("click!");
});


function startGame() {
    
}

function selectPokemon(){

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

//tested functioning correctly.
function isHit(moveChance){
    let chance = Math.floor(Math.random() * (99 + 1) + 1);
    if (moveChance >= chance){
        return true;
    }
    else{
        return false;
    }
}

});