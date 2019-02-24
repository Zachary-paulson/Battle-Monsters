$(document).ready(function () {

    //pokemon with all stats
    let venusaur = {
        name: "Venusaur",
        level: 50,
        hp: 80,
        maxHP: 80,
        attack: 82,
        defense: 83,
        type: "grass",
        conditionStatus: "Normal",
        conditionLength: 0,
        atkStage: 1,
        razorLeaf: {
            name: "Razor Leaf",
            pwr: 55,
            hitChance: 95,
            stab: true,
            effect: "none",
            delay: "none"
        },
        sleepPowder: {
            name: "Sleep Powder",
            pwr: 0,
            hitChance: 75,
            stab: true,
            effect: "sleep",
            delay: "none"
        },
        SwordsDance: {
            name: "Swords Dance",
            pwr: 0,
            hitChance: 100,
            stab: true,
            effect: "attackUp",
            delay: "none"
        },
        bodySlam: {
            name: "Body Slam",
            pwr: 85,
            hitChance: 100,
            stab: false,
            effect: "none",
            delay: "none"
        },
        pokedex: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
    }

    let blastoise = {
        name: "Blastoise",
        level: 50,
        hp: 79,
        maxHP: 79,
        attack: 83,
        defense: 100,
        type: "water",
        condition: "normal",
        conditionLength: 0,
        atkStage: 1,
        surf: {
            name: "Surf",
            pwr: 90,
            hitChance: 100,
            stab: true,
            effect: "none",
            delay: "none"
        },
        blizzard: {
            name: "blizzard",
            pwr: 110,
            hitChance: 75,
            stab: true,
            effect: "sleep",
            delay: "none"
        },
        bodySlam: {
            name: "Body Slam",
            pwr: 85,
            hitChance: 100,
            stab: false,
            effect: "none",
            delay: "none"
        },
        hydroPump: {
            name: "Hydro Pump",
            pwr: 110,
            hitChance: 80,
            stab: true,
            effect: "none",
            delay: "none"
        },
        pokedex: "A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles."
    }

    let charizard = {
        name: "Charizard",
        level: 50,
        hp: 78,
        maxHP: 78,
        attack: 84,
        defense: 78,
        type: "fire",
        condition: "normal",
        conditionLength: 0,
        atkStage: 1,
        fireBlast: {
            name: "Fire Blast",
            pwr: 110,
            hitChance: 85,
            stab: true,
            effect: "none",
            delay: "none"
        },
        earthQuake: {
            name: "Earth Quake",
            pwr: 100,
            hitChance: 100,
            stab: false,
            effect: "none",
            delay: "none"
        },
        SwordsDance: {
            name: "Swords Dance",
            pwr: 0,
            hitChance: 100,
            stab: true,
            effect: "attackUp",
            delay: "none"
        },
        bodySlam: {
            name: "Body Slam",
            pwr: 85,
            hitChance: 100,
            stab: false,
            effect: "none",
            delay: "none"
        },
        pokedex: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
    }

    let chansey = {
        name: "Chansey",
        level: 50,
        hp: 250,
        maxHP: 250,
        attack: 105,
        defense: 105,
        type: "normal",
        conditionLength: 0,
        condition: "normal",
        atkStage: 1,
        iceBeam: {
            name: "Ice Beam",
            pwr: 90,
            hitChance: 100,
            stab: false,
            effect: "freeze",
            delay: "none"
        },
        softBoiled: {
            name: "Soft Boiled",
            pwr: 0,
            hitChance: 100,
            stab: true,
            effect: "none",
            delay: "none"
        },
        thunderWave: {
            name: "Thunder Wave",
            pwr: 0,
            hitChance: 90,
            stab: false,
            effect: "paralyze",
            delay: "none"
        },
        thunderbolt: {
            name: "Thunderbolt",
            pwr: 90,
            hitChance: 70,
            stab: false,
            effect: "none",
            delay: "none"
        },
        pokedex: "A rare and elusive Pokémon that is said to bring happiness to those who manage to get it."
    }

    //used through the code.
    let playSelectConfirm = false;
    let playerActivePokemon = null;
    let enemyActivePokemon;
    let battleStarted = false;



    //Displays fun facts when you hover over pokemon.
    $(".pokemonRoster").hover(function () {

        switch ($(this).attr('id')) {
            case venusaur.name.toLowerCase():
                $("#tooltipPic img").attr("src", "assets/images/pokemon/200x200/Venusaur.png");
                $("#tooltipPokedex").html("<strong> Venasaur #003 </strong> <br /><br />" + venusaur.pokedex);
                break;
            case blastoise.name.toLowerCase():
                $("#tooltipPic img").attr("src", "assets/images/pokemon/200x200/Blastoise.png");
                $("#tooltipPokedex").html("<strong> Blastoise #006 </strong> <br /><br />" + blastoise.pokedex);
                break;
            case charizard.name.toLowerCase():
                $("#tooltipPic img").attr("src", "assets/images/pokemon/200x200/Charizard.png");
                $("#tooltipPokedex").html("<strong> Charizard #009 </strong> <br /><br />" + charizard.pokedex);
                break;
            case chansey.name.toLowerCase():
                $("#tooltipPic img").attr("src", "assets/images/pokemon/200x200/Chansey.png");
                $("#tooltipPokedex").html("<strong> chansey #113 </strong> <br /><br />" + chansey.pokedex);
                break;
        }
    });

    //Confirms player is ready for battle
    $("#playerSelect").click(function () {
        if (playerActivePokemon === null) {
            $("#combatTxt").append("<br />You must choose a pokemon!");
        }
        else if (confirm("Are you sure?")) {
            playSelectConfirm = true;
            $("#combatTxt").html("<br />Please select an enemy to battle");
            changeDefeatedPokemonImg(playerActivePokemon);
            playerActivePokemon.condition = "dead";
            $(this).hide();
        }
        else {
            playSelectConfirm = false;

        }
    });

    //attack buttons
    $("#btnsContainer button").click(function () {
        if (battleStarted) {
            $("#combatTxt").append("<br />" + playerActivePokemon.name + " attacked.");
            switch (playerActivePokemon.name) {
                case venusaur.name:
                    venusaurAttack($(this));
                    break;
                case blastoise.name:
                    blastoiseAttack($(this));
                    break;
                case charizard.name:
                    charizardAttack($(this));
                    break;
                case chansey.name:
                    chanseyAttack($(this));
                    break;
            }
        }
        enemeyAttack(enemyActivePokemon);
        isMatchOver();
        gameOver();
    });

    //select player and enemy pokemons.
    $(".pokemonRoster").click(function (e) {
        if (playSelectConfirm != true) {
            selectPlayerPokemon($(this).attr('id'));
        }
        else {
            if (battleStarted != true) {
                selectEnemyPokemon($(this).attr('id'));
            }

        }

    });

    /******ALL Functions used for the game*******/

    //player selection
    function selectPlayerPokemon(pkm) {
        switch (pkm) {
            case venusaur.name.toLowerCase():
                $("#playerHP").html("HP:  " + venusaur.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Venusaur.png");
                $("#atkbtn1").html(venusaur.razorLeaf.name);
                $("#atkbtn2").html(venusaur.sleepPowder.name);
                $("#atkbtn3").html(venusaur.SwordsDance.name);
                $("#atkbtn4").html(venusaur.bodySlam.name);
                playerActivePokemon = venusaur;
                break;
            case blastoise.name.toLowerCase():
                $("#playerHP").html("HP:  " + blastoise.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Blastoise.png");
                $("#atkbtn1").html(blastoise.surf.name);
                $("#atkbtn2").html(blastoise.blizzard.name);
                $("#atkbtn3").html(blastoise.bodySlam.name);
                $("#atkbtn4").html(blastoise.hydroPump.name);
                playerActivePokemon = blastoise;
                break;
            case charizard.name.toLowerCase():
                $("#playerHP").html("HP:  " + charizard.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Charizard.png");
                $("#atkbtn1").html(charizard.fireBlast.name);
                $("#atkbtn2").html(charizard.earthQuake.name);
                $("#atkbtn3").html(charizard.SwordsDance.name);
                $("#atkbtn4").html(charizard.bodySlam.name);
                playerActivePokemon = charizard;
                break;
            case chansey.name.toLowerCase():
                $("#playerHP").html("HP:  " + chansey.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Chansey.png");
                $("#atkbtn1").html(chansey.iceBeam.name);
                $("#atkbtn2").html(chansey.softBoiled.name);
                $("#atkbtn3").html(chansey.thunderWave.name);
                $("#atkbtn4").html(chansey.thunderbolt.name);
                playerActivePokemon = chansey;
                break;
        }
    }

    //Enemy selection
    function selectEnemyPokemon(pkm) {
        if (playSelectConfirm) {
            if (pkm === venusaur.name.toLowerCase() && venusaur.condition != "dead") {
                $("#enemyHP").html("HP:  " + venusaur.hp);
                $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Venusaur.png");
                enemyActivePokemon = venusaur;
                $("#combatTxt").html("<br />Let the battle begin! <br /> A wild " + enemyActivePokemon.name + " appeared!");
                battleStarted = true;
            }
            else if (pkm === blastoise.name.toLowerCase() && blastoise.condition != "dead") {
                $("#enemyHP").html("HP:  " + blastoise.hp);
                $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Blastoise.png");
                enemyActivePokemon = blastoise;
                $("#combatTxt").html("<br />Let the battle begin! <br /> A wild " + enemyActivePokemon.name + " appeared!");
                battleStarted = true;
            }
            else if (pkm === charizard.name.toLowerCase() && charizard.condition != "dead") {
                $("#enemyHP").html("HP:  " + charizard.hp);
                $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Charizard.png");
                enemyActivePokemon = charizard;
                $("#combatTxt").html("<br />Let the battle begin! <br /> A wild " + enemyActivePokemon.name + " appeared!");
                battleStarted = true;
            }
            else if (pkm === chansey.name.toLowerCase() && chansey.condition != "dead") {
                $("#enemyHP").html("HP:  " + chansey.hp);
                $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Chansey.png");
                enemyActivePokemon = chansey;
                $("#combatTxt").html("<br />Let the battle begin! <br /> A wild " + enemyActivePokemon.name + " appeared!");
                battleStarted = true;
            }

        }

    }

    /******battle Phase functions*******/
    //enemy AI attack
    function enemeyAttack(enemy) {

        if (enemy.maxHP > 0 && checkCondition()) {
            $("#combatTxt").append("<br />" + enemy.name + " attacked.");
            switch (enemy.name) {
                case venusaur.name:
                    battlePhase(venusaur, playerActivePokemon, enemy.razorLeaf);
                    setPlayerHealth(playerActivePokemon);
                    break;
                case blastoise.name:
                    battlePhase(blastoise, playerActivePokemon, enemy.surf);
                    setPlayerHealth(playerActivePokemon);
                    break;
                case charizard.name:
                    battlePhase(charizard, playerActivePokemon, enemy.fireBlast);
                    setPlayerHealth(playerActivePokemon);
                    break;
                case chansey.name:
                    battlePhase(chansey, playerActivePokemon, enemy.iceBeam);
                    setPlayerHealth(playerActivePokemon);
                    break;
            }
        }
        else if (enemy.maxHP === 0) {
            $("#combatTxt").append("<br />" + enemy.name + " blacked out.");
            $("#enemyPic img").attr("src", "assets/images/placeholder/pokeball250.png");
            enemy.condition = "dead";
            changeDefeatedPokemonImg(enemy);
        }

    }

    //Battle phase runs damage functions for both emenies and players.
    function battlePhase(pk1, pk2, atk) {
        let dmg = getDmg(pk1, pk2, atk);
        $("#combatTxt").append("<br />" + atk.name + " did " + dmg + " damage.");
        pk2.maxHP -= dmg;
        if (pk2.maxHP < 0) {
            pk2.maxHP = 0;
        }
    }

    //Calculate damage dealt.
    function getDmg(pk1, pk2, atk) {
        let dmg;
        let hit = isHit(atk.hitChance);

        if (hit) {
            dmg = damage(pk1.level, pk1.attack, pk2.defense, atk.pwr, atk.stab, pk1, pk2);
        }
        else {
            $("#combatTxt").append("<br />" + pk1.name + " Attack missed!");
            dmg = 0;
        }
        return dmg;
    }

    //set players health field
    function setPlayerHealth(pk) {
        $("#playerHP").html("HP:  " + pk.maxHP);
    }

    //set enemy health field    
    function setEnemyHealth(pk) {
        $("#enemyHP").html("HP:  " + pk.maxHP);
    }

    function changeDefeatedPokemonImg(pkm) {
        switch (pkm.name.toLowerCase()) {
            case "venusaur":
                $("#venusaur img").attr("src", "assets/images/defeatedPokemon/venusaur.png");
                break;
            case "blastoise":
                $("#blastoise img").attr("src", "assets/images/defeatedPokemon/blastoise.png");
                break;
            case "charizard":
                $("#charizard img").attr("src", "assets/images/defeatedPokemon/Charizard.png");
                break;
            case "chansey":
                $("#chansey img").attr("src", "assets/images/defeatedPokemon/Chansey.png");
                break;
            default:
                break;
        }
    }

    /******Testing win conditions*******/
    //test to see if the match is over.
    function isMatchOver() {
        if (enemyActivePokemon.maxHP === 0) {
            $("#combatTxt").append("<br />" + playerActivePokemon.name + " wins");
            battleStarted = false;
            resetActivePokemon();
            setPlayerHealth(playerActivePokemon);
        }
        else if (playerActivePokemon.maxHP === 0) {
            $("#combatTxt").append("<br />" + playerActivePokemon.name + " loses");
            battleStarted = false;
        }
    }

    //test to see if the game is over.
    function gameOver() {
        if (venusaur.condition === "dead" && blastoise.condition === "dead" && charizard.condition === "dead" && chansey.condition === "dead") {
            $("#combatTxt").html("<br />" + "winner! You're the pokemon master!");
        }
        else if (playerActivePokemon.maxHP === 0) {
            $("#combatTxt").append("<br />" + "Game over");
        }
    }

    function resetActivePokemon() {
        playerActivePokemon.maxHP = playerActivePokemon.hp;
        playerActivePokemon.atkStage = 1;
    }


    //Will see if the pokemon can attack.
    function checkCondition() {
        let coniditon;
        switch (enemyActivePokemon.condition) {
            case "asleep":
                coniditon = checkSleeping();
                break;
            case "paralyzed":
                coniditon = fullyParalyzed();
                break;
            default:
                coniditon = true;
                break;
        }
        return coniditon
    }

    //Check the sleeping condition
    function checkSleeping() {
        if (enemyActivePokemon.conditionLength > 0) {
            enemyActivePokemon.conditionLength--;
            $("#combatTxt").append("<br />" + enemyActivePokemon.name + " is asleep.");
            return false;
        }
        else if (enemyActivePokemon.conditionLength === 0) {
            enemyActivePokemon.condition = "normal";
            $("#combatTxt").append("<br />" + enemyActivePokemon.name + " Woke up.");
            return true;
        }
    }

    //Check if pokemon is paralyzed.
    function fullyParalyzed() {
        if (Math.floor(Math.random() * (99 + 1) + 1) < 25) {
            $("#combatTxt").append("<br />" + enemyActivePokemon.name + " is fully Paralyzed!");
            return false;
        }
        else {
            return true;
        }
    }

    /******Formulas for calculating attack damage*******/
    //Checks if there was a hit..
    function isHit(moveChance) {
        let chance = Math.floor(Math.random() * (99 + 1) + 1);
        if (moveChance >= chance) {
            return true;
        }
        else {
            return false;
        }
    }
    //Will check in there was a crit.
    function getCrit() {
        let rndmNum = Math.floor((Math.random() * 255) + 1);
        switch (rndmNum) {
            case 1:
                $("#combatTxt").append("<br />It was a Crit!");
                return 1.5;
            default:
                return 1;
        }
    }

    //Random damage modifier for the damager forumla.
    function getRndmDmgMod() {
        rndmDmgmod = Math.floor(Math.random() * (100 - 85 + 1) + 85);
        return rndmDmgmod / 100;
    }

    //checks for Stab.
    function getSTAB(stab) {
        switch (stab) {
            case true:
                return 1.5;
            default:
                return 1;
        }
    }

    //Checks for type advantage.
    function type(pkm1, pkm2) {
        if (pkm1 === "water") {
            if (pkm2 === "fire") {
                $("#combatTxt").append("<br />It was super Effective.");
                return 2;
            }
            else if (pkm2 === "grass") {
                $("#combatTxt").append("<br />It was not very Effective.");
                return 0.5;
            }
            else {
                return 1;
            }//end nested if
        }//end if
        else if (pkm1 === "grass") {
            if (pkm2 === "water") {
                $("#combatTxt").append("<br />It was super Effective.");
                return 2;
            }
            else if (pkm2 === "fire") {
                $("#combatTxt").append("<br />It was not very Effective.");
                return 0.5;
            }
            else {
                return 1;
            }//end nested if
        }//end  else if
        else if (pkm1 === "fire") {
            if (pkm2 === "grass") {
                $("#combatTxt").append("<br />It was super Effective.");
                return 2;
            }
            else if (pkm2 === "water") {
                $("#combatTxt").append("<br />It was not very Effective.");
                return 0.5;
            }
            else {
                return 1;
            }//end nested if
        }//end  else if
        else {
            return 1;
        }//end entire if statment.
    }

    //damage formula.
    function damage(lvl, atk, def, pwr, stab, pkm1, pkm2) {
        // Need to code RandomSource, stab, tpye, and crit.
        let modifer = getCrit() * getRndmDmgMod() * getSTAB(stab) * type(pkm1.type, pkm2.type) * pkm1.atkStage;
        return Math.round(((((((2 * lvl) / 5) + 2) * pwr * (atk / def)) / 50) + 2) * modifer)
    }

    /******Player attack functions.*******/
    //venusaur attack function.
    function venusaurAttack(e) {

        switch (parseInt(e.val())) {
            case 1:
                battlePhase(venusaur, enemyActivePokemon, venusaur.razorLeaf);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 2:
                sleepPowderAttack(venusaur, enemyActivePokemon);
                //setEnemyHealth(enemyActivePokemon);
                break;
            case 3:
                swordsDanceAttack(venusaur);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 4:
                battlePhase(venusaur, enemyActivePokemon, venusaur.bodySlam);
                setEnemyHealth(enemyActivePokemon);
                break;
        }
    }

    //blastoise attack function. 
    function blastoiseAttack(e) {
        switch (parseInt(e.val())) {
            case 1:
                battlePhase(blastoise, enemyActivePokemon, blastoise.surf);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 2:
                battlePhase(blastoise, enemyActivePokemon, blastoise.blizzard);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 3:
                battlePhase(blastoise, enemyActivePokemon, blastoise.bodySlam);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 4:
                battlePhase(blastoise, enemyActivePokemon, blastoise.hydroPump);
                setEnemyHealth(enemyActivePokemon);
                break;
        }
    }

    //charizard attack function. 
    function charizardAttack(e) {
        switch (parseInt(e.val())) {
            case 1:
                battlePhase(charizard, enemyActivePokemon, charizard.fireBlast);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 2:
                swordsDanceAttack(enemyActivePokemon);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 3:
                battlePhase(charizard, enemyActivePokemon, charizard.SwordsDance);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 4:
                battlePhase(charizard, enemyActivePokemon, charizard.bodySlam);
                setEnemyHealth(enemyActivePokemon);
                break;
        }
    }

    //chansey attack function. 
    function chanseyAttack(e) {
        switch (parseInt(e.val())) {
            case 1:
                battlePhase(chansey, enemyActivePokemon, chansey.iceBeam);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 2:
                softBoiledAttack(chansey);
                setPlayerHealth(enemyActivePokemon);
                break;
            case 3:
                thunderWaveAttack(chansey);
                setEnemyHealth(enemyActivePokemon);
                break;
            case 4:
                battlePhase(chansey, enemyActivePokemon, chansey.thunderbolt);
                setEnemyHealth(enemyActivePokemon);
                break;
        }
    }

    /*************Special attack functions*******************/

    function sleepPowderAttack(pkm, enemyPK) {

        if (isHit(pkm.sleepPowder.hitChance)) {
            if (enemyPK.condition != "asleep") {
                enemyPK.condition = "asleep";
                enemyPK.conditionLength = Math.floor(Math.random() * (7) + 1);
                $("#combatTxt").append("<br />" + enemyPK.name + " is now asleep");
            }
            else {
                $("#combatTxt").append("<br />" + pkm.name + " failed to sleep the other pokemon.");
            }
        }
        else {
            $("#combatTxt").append("<br />Sleep Powder failed missed");
        }

    }

    function swordsDanceAttack(pkm) {
        if (pkm.atkStage != 3) {
            pkm.atkStage += 0.5;
            $("#combatTxt").append("<br />" + pkm.name + "used Swords Dance.  Attack raise 1 stage.");
        }
        else {
            $("#combatTxt").append("<br /> Swords Dance failed!");
        }
    }

    function softBoiledAttack(pkm) {
        if (pkm.maxHP < (pkm.hp / 2)) {
            pkm.maxHP += (pkm.hp / 2);
            $("#combatTxt").append("<br />" + pkm.name + " gained " + (pkm.hp / 2) + " health!");
        }
        else {
            $("#combatTxt").append("<br />Soft Boiled failed!");
        }
    }

    function thunderWaveAttack(pkm) {
        if (isHit(pkm.thunderWave.hitChance)) {
            if (enemyActivePokemon.condition != "paralyzed") {
                enemyActivePokemon.condition = "paralyzed";
                $("#combatTxt").append("<br />" + enemyActivePokemon.name + " is paralyzed!");
            }
            else {
                $("#combatTxt").append("<br /> Thunder Wave failed failed!");
            }
        }
    }

});