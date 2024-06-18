//oggetto eroe
let player = {
    level: 1,
    max_health: 150,
    health: 150,
    defense:0,
    attack: 10,
    xp: 0,
    max_xp:50,
    money: 300,
    attack_potions: 3,
    health_potions: 3,
    max_potions:5,
    weapon_durability:0,
    extra_attack: 0,
    shield_durability:0
}

//armi che possono essere comperate nel negozio
let weapons = [
    { name: "Spada di legno", attack: 2, price: 8, durability: 10 },
    { name: "Spada di ferro", attack: 4, price: 12, durability: 14 },
    { name: "Spada di legno rinforzata", attack: 2, price: 14, durability: 18 },
    { name: "Spada di diamante", attack: 15, price: 70, durability: 25 },
    { name: "Lancia a corto raggio", attack: 6, price: 10, durability: 16 },
    { name: "Lancia a lungo raggio", attack: 8, price: 14, durability: 16 },
    { name: "Alabarda", attack: 16, price: 20, durability: 14 },
    { name: "Pistola aliena", attack: 60, price: 100, durability: 1 },
    { name: "Pugnale divino", attack: 25, price: 130, durability: 35 },
    { name: "Guanto del Pugno Fortissimo", attack: 8, price: 25, durability: 30 },
    { name: "Ascia del Terrore", attack: 18, price: 35, durability: 20 },
    { name: "Mazza Chiodata", attack: 12, price: 18, durability: 25 },
    { name: "Spada del Drago", attack: 22, price: 80, durability: 30 },
    { name: "Scettro Magico", attack: 30, price: 90, durability: 15 },
    { name: "Frusta Fiammeggiante", attack: 10, price: 22, durability: 20 },
    { name: "Bastone della Saggezza", attack: 6, price: 12, durability: 50 },
    { name: "Martello del Destino", attack: 20, price: 40, durability: 22 },
    { name: "Arco Incantato", attack: 15, price: 28, durability: 18 },
    { name: "Cucchiaio da Minestrone", attack: 3, price: 5, durability: 40 },
    { name: "Fionda dell'Infanzia", attack: 4, price: 3, durability: 50 }
];
//scudi del negozio
let shields = [
    { name: "Scudo dell'autodifesa", protection: 5, durability: 10, price: 10 },
    { name: "Scudo alieno", protection: 100, durability: 3, price: 100 },
    { name: "Scudo non newtoniano", protection: 2, durability: 50, price: 28 },
    { name: "Scudo di ferro", protection: 10, durability: 15, price: 15 },
    { name: "Scudo massiccio", protection: 12, durability: 17, price: 20 },
    { name: "Scudo di Cristallo", protection: 15, durability: 20, price: 30 },
    { name: "Scudo Magico", protection: 20, durability: 10, price: 50 },
    { name: "Scudo del Vento", protection: 8, durability: 25, price: 22 },
    { name: "Scudo del Tempo", protection: 18, durability: 12, price: 40 },
    { name: "Scudo di Cartone", protection: 1, durability: 5, price: 2 },
    { name: "Scudo della Nonna", protection: 4, durability: 30, price: 10 },
    { name: "Scudo del Cavaliere", protection: 14, durability: 18, price: 25 },
    { name: "Scudo della Giustizia", protection: 20, durability: 20, price: 35 },
    { name: "Scudo dell'Orso", protection: 16, durability: 22, price: 32 },
    { name: "Scudo di Pietra", protection: 12, durability: 28, price: 15 }
];




//oggetto mostro: nome e titolo in una lista, livello, attacco e salute vengono estrapolati dal livello dell'eroe per un'esperienza bilanciata
let enemy = {
    name: ["Gordar ", "Condor ", "Gorgoroth ", "Holtah ", "Giovanni ", "Nascar ", "Marrakith ", "Mariolino ", "Orazio ", "Pluto ",
        "Drakthar ", "Zoran ", "Brakkus ", "Velgor ", "Ignar ", "Thalor ", "Xerxes ", "Ulthor ", "Vorgath ", "Krynn ",
        "Arthas ", "Borath ", "Lazaro ", "Morkai ", "Silas ", "Bubbolo ", "Zucchina ", "Tartaruga ", "Ugo ", "Marshmallow "],
    title: ["il terribile", "la furia", "l'aneurisma cerebrale", "l'iroso", "il rancoroso", "il re dei re", "figlio di Mouskrat", "il sorcio", "figlio di Gigi", "il panettiere",
        "il devastatore", "l'oscuro", "il sanguinario", "il distruttore", "il vendicatore", "il crudele", "l'impavido", "il conquistatore", "il flagello", "il colossale",
        "il torturatore", "l'invincibile", "il feroce", "il distruttore di mondi", "l'immortale", "il pasticcere", "l'incompreso", "il cartolaio", "il lavapiatti", "il guastafeste"]
}

function startGame() {
    document.getElementById("name").value == null || document.getElementById("name").value == "" ? player.name = "Cavaliere senza nome" : player.name = document.getElementById("name").value;
    startPlayer();
    startEnemy();
    document.getElementById("introduction").classList.add("hide");
    document.getElementById("introduction").classList.remove("show");
    document.getElementById("game-screen").classList.add("show");
    document.getElementById("game-screen").classList.remove("hide_screen");


}


//cuore del gioco
function startPlayer() {
    //assegnazione dei valori all'eroe
    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-level").textContent = player.level;
    document.getElementById("player-health").textContent = player.health + "/" + player.max_health;
    document.getElementById("player-attack").textContent = player.attack + player.extra_attack;
    document.getElementById("player-xp").textContent = player.xp + "/" + player.max_xp;
    document.getElementById("player-money").textContent = player.money;
    document.getElementById("player-attack-potion").textContent = player.attack_potions + "/" + player.max_potions;
    document.getElementById("player-health-potion").textContent = player.health_potions + "/" + player.max_potions;
    if (player.shield_durability != 0) {//Per mettere su schermo la resistenza di arma e scudo solo se sono disponibili
        document.getElementById("shield-durability").textContent = "Resistenza scudo: " + player.shield_durability;
    } else {
        document.getElementById("shield-durability").textContent = "";
    }
    if (player.weapon_durability != 0) {
        document.getElementById("weapon-durability").textContent = "Resistenza arma: " + player.weapon_durability;
    } else {
        document.getElementById("weapon-durability").textContent = "";
    }
    if (player.health < (player.max_health / 3)) {
        document.getElementById("player-health").style.color = "red";
        document.getElementById("player").style.backgroundColor = "rgba(138,3,3,0.7)";
    } else {
        document.getElementById("player-health").style.color = "black";
        document.getElementById("player").style.backgroundColor = "rgba(138,3,3,0)";
    }

}



function startEnemy() { 
    //assegnazione dei valori al nemico
    document.getElementById("enemy-name").textContent = enemy.name[Math.floor(Math.random() * enemy.name.length)] + enemy.title[Math.floor(Math.random() * enemy.title.length)];
    document.getElementById("enemy-level").textContent = Math.floor(Math.random() * parseInt(player.level) + player.level/3+1)
    document.getElementById("enemy-health").textContent = Math.floor(Math.random() * parseInt(document.getElementById("enemy-level").textContent * 20) + (player.level * 5));
    document.getElementById("enemy-attack").textContent = Math.floor(Math.random() * parseInt(document.getElementById("enemy-level").textContent * 5) + (player.level * 5));
    document.getElementById("hit-message").textContent = "";
    document.getElementById("miss-message").textContent = "";
    document.getElementById("loot-message").textContent = "";
    document.getElementById("level-up-message").textContent = "";
    document.getElementById("broken-weapon-message").textContent = "";
    
};


function attack() {
    if (parseInt(document.getElementById("enemy-health").textContent) <= 0) {
        document.getElementById("hit-message").textContent = "Non infierire sul cadavere!"
    } else {
        if (Math.floor(Math.random() * 10) < 9) {//una possibilità su dieci di mancare il bersaglio
            //ad ogni attacco il valore della salute viene estrapolato dalla scheda per non intaccare quello nell'array
            document.getElementById("hit-message").textContent = "";
            document.getElementById("miss-message").textContent = "";
            document.getElementById("loot-message").textContent = "";
            document.getElementById("broken-weapon-message").textContent = "";
            let enemy_health = parseInt(document.getElementById("enemy-health").textContent);
            enemy_health -= player.attack + player.extra_attack;
            if (player.weapon_durability > 0) {
                player.weapon_durability--;
                if (player.weapon_durability == 0) {
                    document.getElementById("broken-weapon-message").textContent = "La tua arma si è rotta!"
                    player.extra_attack = 0;
                }
            }
            document.getElementById("enemy-health").textContent = enemy_health;
            enemy_health > 0 ? enemyAttack() : enemyDeath();
        } else {
            enemyAttack()
            document.getElementById("miss-message").textContent = "Bersaglio mancato!"

        }
    }
    //a ogni attacco si aggiornano i valori
    startPlayer();
};

function enemyAttack() {//una possibilità su dieci di mancare il bersaglio
    if (Math.floor(Math.random() * 10) < 9) {
        document.getElementById("hit-message").textContent = "";
        document.getElementById("miss-message").textContent = "";
        document.getElementById("loot-message").textContent = "";
        document.getElementById("broken-weapon-message").textContent = "";
        let enemy_attack = parseInt(document.getElementById("enemy-attack").textContent);
        player.defense != 0 ? player.health -= Math.floor(enemy_attack - (enemy_attack * player.defense / 100)) : player.health -= enemy_attack;
        player.health > 0 ? document.getElementById("hit-message").textContent = "Sei stato colpito! " : playerDeath();
        if (player.shield_durability > 0) {
            player.shield_durability--;
            if (player.shield_durability == 0) {
                document.getElementById("hit-message").textContent = "Il tuo scudo si è rotto!"
                player.defense = 0;
            }
        }
        startPlayer();
    } else {
        document.getElementById("miss-message").textContent += "Sei stato mancato!"
    }

};

function enemyDeath() {
    document.getElementById("enemy-health").textContent = 0;
    document.getElementById("miss-message").textContent = "Hai sconfitto il tuo avversario. Sei pronto per una nuova sfida?";
    let loot = getLoot();
    let xp = getXp();
    document.getElementById("loot-message").textContent = loot + xp;
    setTimeout(startEnemy, 3000);
};

function playerDeath() {
    document.getElementById("player-health").textContent = 0;
    document.getElementById("player").setAttribute("hidden", "");

};

function getLoot() {
//una possibilità su tre di ottenere soldi, una su tre di ottenere pozioni di attacco e una su tre di ottenere pozioni di salute
    let random = Math.floor(Math.random() * 4);
    let potions = Math.floor(Math.random() * (4 * player.level) + 1);
    let money = Math.floor(Math.random() * (10 * (player.level * 2)) + 1);
    if (potions > (player.level + 7)) {//Per evitare che, andando avanti nel gioco, si ottengano troppe pozioni
        potions = (player.level + 7);
    }
    switch (random) {
        case 0:
            loot = "Hai ottenuto " + money + " monete e ";
            player.money += money;
            break;
        case 1:
            loot = "Hai ottenuto " + money + " monete e ";
            player.money += money;
            break;
        case 2:
            
            if ((player.attack_potions+potions) > player.max_potions) {
                loot="La tua sacca delle pozioni d'attacco è piena! Hai ottenuto "
                player.attack_potions = player.max_potions;
            } else {
                player.attack_potions += potions;
                loot = "Hai ottenuto " + potions + " pozioni d'attacco e ";
                
            }
            break;
        default:
            
            if ((player.health_potions+potions) > player.max_potions) {
                loot = "La tua sacca delle pozioni di salute è piena! Hai ottenuto "
                player.health_potions = player.max_potions;
            } else {
                player.health_potions += potions;
                loot = "Hai ottenuto " + potions + " pozioni di salute e ";
                
            }
            
    }
    return loot;
    
};
function getXp() {
    let points = parseInt(document.getElementById("enemy-attack").textContent);
    xp = points + " punti esperienza."
    player.xp += points;
    if (player.xp >= player.max_xp) {
        levelUp();
    }
    return xp;
}

function attackUp() {
    //attacco pari al triplo dell'attacco base
    let temp = player.attack;
    player.attack *= 3;
    attack();
    player.attack = temp;
    player.attack_potions--;
    startPlayer();

    
    
}

function healthUp() {
    //Viene restituito il 15% della salute massima
    if (player.health === player.max_health) {
        document.getElementById("hit-message").innerText = "Non puoi curarti più del massimo!"
    } else {
        player.health += Math.floor(player.max_health * 0.15);
        player.health_potions--;
        if (player.health > player.max_health) {
            player.health = player.max_health;
        }
    }
        startPlayer();

}

function levelUp() {
    player.level++;
    player.max_potions++;
    player.xp = 0;
    player.max_xp = Math.floor(player.max_xp * 1.6);
    player.max_health = Math.floor(player.max_health * 1.2);
    player.health = player.max_health;
    player.attack = Math.floor(player.attack * 1.3);
    document.getElementById("level-up-message").textContent = "Sei salito al livello " + player.level+"!"
    startPlayer();

}

function shop() {
    //Lo schermo di gioco si sposta a destra e quello del negozio entra dall'alto
    document.getElementById("game-screen").classList.add("hide_screen");
    document.getElementById("game-screen").classList.remove("show");
    document.getElementById("container_shop").classList.add("show");
    document.getElementById("container_shop").classList.remove("hide");

    //Generazione di armi e scudi andando a pescare casualmnete dalle relative liste
    let weapon1 = weapons[Math.floor(Math.random() * weapons.length)];
    let weapon2 = weapons[Math.floor(Math.random() * weapons.length)];
    let shield = shields[Math.floor(Math.random() * shields.length)];
    document.getElementById("w1_name").textContent = weapon1.name;
    document.getElementById("w1_attack").textContent = weapon1.attack;
    document.getElementById("w1_durability").textContent = weapon1.durability;
    document.getElementById("w1_price").textContent = weapon1.price;

    document.getElementById("w2_name").textContent = weapon2.name;
    document.getElementById("w2_attack").textContent = weapon2.attack;
    document.getElementById("w2_durability").textContent = weapon2.durability;
    document.getElementById("w2_price").textContent = weapon2.price;

    document.getElementById("shield_name").textContent = shield.name;
    document.getElementById("shield_protection").textContent = shield.protection;
    document.getElementById("shield_durability").textContent = shield.durability;
    document.getElementById("shield_price").textContent = shield.price;

    document.getElementById("money_shop").textContent = player.money;
}

function closeShop() {
    document.getElementById("game-screen").classList.add("show");
    document.getElementById("game-screen").classList.remove("hide_screen");
    document.getElementById("container_shop").classList.add("hide");
    document.getElementById("container_shop").classList.remove("show");
    document.getElementById("shop_message").textContent = "";
    document.getElementById("weapon1").classList.remove("bought");
    document.getElementById("weapon2").classList.remove("bought");
    document.getElementById("shield").classList.remove("bought");
}

function buyWeapon1() {
    if (player.money >= parseInt(document.getElementById("w1_price").textContent)) {
        document.getElementById("shop_message").textContent = "";
        player.extra_attack = parseInt(document.getElementById("w1_attack").textContent);
        player.weapon_durability = parseInt(document.getElementById("w1_durability").textContent);
        player.money -= parseInt(document.getElementById("w1_price").textContent);
        document.getElementById("money_shop").textContent = player.money;
        document.getElementById("weapon1").classList.add("bought");
        document.getElementById("weapon2").classList.remove("bought");
        startPlayer();
    } else {
        document.getElementById("shop_message").textContent = "Non hai abbastanza soldi!";
        
    }
    
}

function buyWeapon2() {
    if (player.money >= parseInt(document.getElementById("w2_price").textContent)) {
        document.getElementById("shop_message").textContent = "";
        player.extra_attack = parseInt(document.getElementById("w2_attack").textContent);
        player.weapon_durability = parseInt(document.getElementById("w2_durability").textContent);
        player.money -= parseInt(document.getElementById("w2_price").textContent);
        document.getElementById("money_shop").textContent = player.money;
        document.getElementById("weapon2").classList.add("bought");
        document.getElementById("weapon1").classList.remove("bought");
        startPlayer();
    } else {
        document.getElementById("shop_message").textContent = "Non hai abbastanza soldi!";

    }
}

function buyShield() {
    if (player.money >= parseInt(document.getElementById("shield_price").textContent)) {
        document.getElementById("shop_message").textContent = "";
        player.defense = parseInt(document.getElementById("shield_protection").textContent);
        player.shield_durability = parseInt(document.getElementById("shield_durability").textContent);
        player.money -= parseInt(document.getElementById("shield_price").textContent);
        document.getElementById("money_shop").textContent = player.money;
        document.getElementById("shield").classList.add("bought");
        startPlayer();
    } else {
        document.getElementById("shop_message").textContent = "Non hai abbastanza soldi!";

    }
}







