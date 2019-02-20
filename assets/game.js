$(document).ready(function () {

    let venusaur = {
        name: "Venusaur",
        level: 50,
        hp: 80,
        attack: 82,
        defense: 83,
        speed: 80,
        type: "grass",
        conditionStatus: "Normal",
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
        attack: 83,
        defense: 100,
        speed: 78,
        type: "water",
        condition: "Normal",
        surf: {
            name: "Surf",
            pwr: 90,
            hitChance: 100,
            stab: true,
            effect: "none",
            delay: "none"
        },
        blizzard: {
            name: "Sleep Powder",
            pwr: 0,
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
        attack: 84,
        defense: 78,
        speed: 100,
        type: "fire",
        condition: "normal",
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
        attack: 105,
        defense: 105,
        speed: 105,
        type: "normal",
        condition: "normal",
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
            hitChance: 100,
            stab: false,
            effect: "none",
            delay: "none"
        },
        pokedex: "A rare and elusive Pokémon that is said to bring happiness to those who manage to get it."
    }

    let playSelectConfirm = false;

    
    //Picking pokemon
    $(".pokemonRoster").click(function (e) {
        //alert($(this).attr('id'));
        if (playSelectConfirm != true) {
            selectPlayerPokemon($(this).attr('id'));
        }
        else{
            selectEnemyPokemon($(this).attr('id'));
        }

    });

    //Displays fun facts
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

    //Attack buttons
    $("#btnsContainer button").click(function () {
        if (playSelectConfirm) {
            $("#battleText").html("Your pokemon attacked");
        }
        else {
            $("#battleText").html("Please select a pokemon to begin");
        }

    });

    //Confirms player is ready for battle
    $("#playerSelect").click(function () {
        if (confirm("Are you sure?")) {
            playSelectConfirm = true;
            $("#battleText").text(" ");
            $(this).hide();
        }
        else {
            playSelectConfirm = false;

        }
    });



    function startGame() {

    }

    function selectPlayerPokemon(pkm) {
        switch (pkm) {
            case venusaur.name.toLowerCase():
                $("#playerHP").html("HP:  " + venusaur.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Venusaur.png");
                $("#atkbtn1").html(venusaur.razorLeaf.name);
                $("#atkbtn2").html(venusaur.sleepPowder.name);
                $("#atkbtn3").html(venusaur.SwordsDance.name);
                $("#atkbtn4").html(venusaur.bodySlam.name);
                break;
            case blastoise.name.toLowerCase():
                $("#playerHP").html("HP:  " + blastoise.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Blastoise.png");
                $("#atkbtn1").html(blastoise.surf.name);
                $("#atkbtn2").html(blastoise.blizzard.name);
                $("#atkbtn3").html(blastoise.bodySlam.name);
                $("#atkbtn4").html(blastoise.hydroPump.name);
                break;
            case charizard.name.toLowerCase():
                $("#playerHP").html("HP:  " + charizard.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Charizard.png");
                $("#atkbtn1").html(charizard.fireBlast.name);
                $("#atkbtn2").html(charizard.earthQuake.name);
                $("#atkbtn3").html(charizard.SwordsDance.name);
                $("#atkbtn4").html(charizard.bodySlam.name);
                break;
            case chansey.name.toLowerCase():
                $("#playerHP").html("HP:  " + chansey.hp);
                $("#playerPic img").attr("src", "assets/images/pokemon/250x250/Chansey.png");
                $("#atkbtn1").html(chansey.iceBeam.name);
                $("#atkbtn2").html(chansey.softBoiled.name);
                $("#atkbtn3").html(chansey.thunderWave.name);
                $("#atkbtn4").html(chansey.thunderbolt.name);
                break;
        }
    }

    function selectEnemyPokemon(pkm) {
        if (playSelectConfirm) {
            switch (pkm) {
                case venusaur.name.toLowerCase():
                    $("#enemyHP").html("HP:  " + venusaur.hp);
                    $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Venusaur.png");
                    break;
                case blastoise.name.toLowerCase():
                    $("#enemyHP").html("HP:  " + blastoise.hp);
                    $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Blastoise.png");
                    break;
                case charizard.name.toLowerCase():
                    $("#enemyHP").html("HP:  " + charizard.hp);
                    $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Charizard.png");
                    break;
                case chansey.name.toLowerCase():
                    $("#enemyHP").html("HP:  " + chansey.hp);
                    $("#enemyPic img").attr("src", "assets/images/pokemon/250x250/Chansey.png");
                    break;
            }
        }
    }

    //tested functioning correctly.
    function damage(lvl, atk, def, pwr, stab, pkm1, pkm2) {
        // Need to code RandomSource, stab, tpye, and crit.
        let modifer = getCrit() * getRndmDmgMod() * getSTAB(stab) * type(pkm1, pkm2);
        return Math.round(((((((2 * lvl) / 5) + 2) * pwr * (atk / def)) / 50) + 2) * modifer)
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
    function getRndmDmgMod() {
        rndmDmgmod = Math.floor(Math.random() * (100 - 85 + 1) + 85);
        return rndmDmgmod / 100;
    }

    //tested functioning correctly.
    function getSTAB(stab) {
        switch (stab) {
            case true:
                return 1.5;
            default:
                return 1;
        }
    }

    //tested functioning correctly.
    function type(pkm1, pkm2) {
        if (pkm1 === "water") {
            if (pkm2 === "fire") {
                return 2;
            }
            else if (pkm2 === "grass") {
                return 0.5;
            }
            else {
                return 1;
            }//end nested if
        }//end if
        else if (pkm1 === "grass") {
            if (pkm2 === "water") {
                return 2;
            }
            else if (pkm2 === "fire") {
                return 0.5;
            }
            else {
                return 1;
            }//end nested if
        }//end  else if
        else if (pkm1 === "fire") {
            if (pkm2 === "grass") {
                return 2;
            }
            else if (pkm2 === "water") {
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

    //tested functioning correctly.
    function isHit(moveChance) {
        let chance = Math.floor(Math.random() * (99 + 1) + 1);
        if (moveChance >= chance) {
            return true;
        }
        else {
            return false;
        }
    }

});