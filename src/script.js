//oggetto eroe
var player = {
    level: 1,
    max_health: 150,
    health: 150,
    defense:0,
    attack: 10,
    xp: 0,
    max_xp:50,
    money: 0,
    attack_potions: 3,
    health_potions: 3,
    max_potions:5,
    weapon_durability:0,
    extra_attack: 0,
    shield_durability:0
}

//armi che possono essere comperate nel negozio
var weapons = [
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
    { name: "Fionda di legno", attack: 4, price: 3, durability: 50 },
    { name: "Spada del Dominatore", "attack": 75, "price": 1000, "durability": 166 },
    { name: "Ascia del Tiranno", "attack": 80, "price": 1050, "durability": 160 },
    { name: "Lancia del Sovrano", "attack": 70, "price": 975, "durability": 173 },
    { name: "Martello del Re", "attack": 85, "price": 1100, "durability": 153 },
    { name: "Pugnale del Signore", "attack": 65, "price": 950, "durability": 180 },
    { name: "Arco del Condottiero", "attack": 73, "price": 1000, "durability": 170 },
    { name: "Bastone dell'Imperatore", "attack": 78, "price": 1025, "durability": 165 },
    { name: "Falcione dell'Assalitore", "attack": 83, "price": 1075, "durability": 156 },
    { name: "Mazza del Conquistatore", "attack": 88, "price": 1125, "durability": 150 },
    { name: "Frusta del Dominio", "attack": 68, "price": 975, "durability": 176 },
    { name: "Spada della Marmotta", "attack": 75, "price": 1000, "durability": 166 },
    { name: "Ascia del Bucaniere", "attack": 80, "price": 1050, "durability": 160 }
];
//scudi del negozio
var shields = [
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
    { name: "Scudo di Pietra", protection: 12, durability: 28, price: 15 },
    { name: "Scudo della Fortezza", "protection": 60, "durability": 135, "price": 950 },
    { name: "Scudo del Guerriero", "protection": 63, "durability": 140, "price": 975 },
    { name: "Scudo del Paladino", "protection": 65, "durability": 145, "price": 1000 },
    { name: "Scudo del Difensore", "protection": 68, "durability": 150, "price": 1025 },
    { name: "Scudo del Protettore", "protection": 70, "durability": 155, "price": 1050 },
    { name: "Scudo dell'Imperatore", "protection": 73, "durability": 160, "price": 1075 },
    { name: "Scudo del Guardiano", "protection": 75, "durability": 165, "price": 1100 },
    { name: "Scudo dell'Eroe", "protection": 78, "durability": 170, "price": 1125 },
    { name: "Scudo del Campione", "protection": 80, "durability": 175, "price": 1150 },
    { name: "Scudo dell'Invincibile", "protection": 83, "durability": 180, "price": 1175 },
    { name: "Scudo della Tartaruga", "protection": 60, "durability": 135, "price": 950 },
    { name: "Scudo del Gatto", "protection": 63, "durability": 140, "price": 975 }
];

//variabile globale che contiene il nome del mostro che uccide il protagonista
var new_winner;

//oggetto mostro: nome e titolo in una lista, livello, attacco e salute vengono estrapolati dal livello dell'eroe per un'esperienza bilanciata
var enemy = {
    name: ["Gordar ", "Condor ", "Gorgoroth ", "Holtah ", "Giovanni ", "Nascar ", "Marrakith ", "Mariolino ", "Orazio ", "Pluto ",
        "Drakthar ", "Zoran ", "Brakkus ", "Velgor ", "Ignar ", "Thalor ", "Xerxes ", "Ulthor ", "Vorgath ", "Krynn ",
        "Arthas ", "Borath ", "Lazaro ", "Morkai ", "Silas ", "Bubbolo ", "Zucchina ", "Tartaruga ", "Ugo ", "Marshmallow "],
    title: ["il terribile", "la furia", "l'aneurisma cerebrale", "l'iroso", "il rancoroso", "il re dei re", "figlio di Mouskrat", "il sorcio", "figlio di Gigi", "il panettiere",
        "il devastatore", "l'oscuro", "il sanguinario", "il distruttore", "il vendicatore", "il crudele", "l'impavido", "il conquistatore", "il flagello", "il colossale",
        "il torturatore", "l'invincibile", "il feroce", "il distruttore di mondi", "l'immortale", "il pasticcere", "l'incompreso", "il cartolaio", "il lavapiatti", "il guastafeste"]
}


function startGame() {
//Se non viene scelto il nome, viene assegnato "Cavaliere senza nome"
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
    if (player.shield_durability != 0) {//La resistenza di arma e scudo solo se equipaggiati
        document.getElementById("shield-durability").textContent = "Resistenza scudo: " + player.shield_durability;
    } else {
        document.getElementById("shield-durability").textContent = "";
    }
    if (player.weapon_durability != 0) {
        document.getElementById("weapon-durability").textContent = "Resistenza arma: " + player.weapon_durability;
    } else {
        document.getElementById("weapon-durability").textContent = "";
    }
//Quando la vita dell'eroe è sotto un terzo della salute massima lo schermo diventa rosso
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
    document.getElementById("enemy").classList.remove("hide")
    document.getElementById("enemy-name").textContent = enemy.name[Math.floor(Math.random() * enemy.name.length)] + enemy.title[Math.floor(Math.random() * enemy.title.length)];
    document.getElementById("enemy-level").textContent = Math.floor(Math.random() * parseInt(player.level) + player.level/3+1)
    document.getElementById("enemy-health").textContent = Math.floor(Math.random() * parseInt(document.getElementById("enemy-level").textContent * 20) + (player.level * 5));
    document.getElementById("enemy-attack").textContent = Math.floor(Math.random() * parseInt(document.getElementById("enemy-level").textContent * 5) + (player.level * 5));
    clearMessages();
    
};


function attack() {
    if (parseInt(document.getElementById("enemy-health").textContent) <= 0) {
        document.getElementById("hit-message").textContent = "Non infierire sul cadavere!"
    } else {
        if (Math.floor(Math.random() * 10) >= 9) {//una possibilità su dieci di mancare il bersaglio
            //ad ogni attacco il valore della salute viene estrapolato dalla scheda per non intaccare quello nell'array
            enemyAttack()
            document.getElementById("miss-message").textContent = "Bersaglio mancato!"
        } else {
            clearMessages()
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

        }
    }
    //a ogni attacco si aggiornano i valori
    startPlayer();
};

function enemyAttack() {//una possibilità su dieci di mancare il bersaglio
    if (Math.floor(Math.random() * 10) >= 9) {
        document.getElementById("miss-message").textContent += "Sei stato mancato!"  
    } else {
        clearMessages()
        let enemy_attack = parseInt(document.getElementById("enemy-attack").textContent);
        player.defense != 0 ? player.health -= Math.floor(enemy_attack - (enemy_attack * player.defense / 100)) : player.health -= enemy_attack;
        player.health > 0 ? document.getElementById("hit-message").textContent = "Sei stato colpito! " : new_winner = playerDeath();
        if (player.shield_durability > 0) {
            player.shield_durability--;
            if (player.shield_durability == 0) {
                document.getElementById("hit-message").textContent = "Il tuo scudo si è rotto!"
                player.defense = 0;
            }
        }
        startPlayer();
    }
};

function enemyDeath() {
    document.getElementById("enemy-health").textContent = 0;
    document.getElementById("miss-message").textContent = "Hai sconfitto il tuo avversario. Sei pronto per una nuova sfida?";
    let loot = getLoot();
    let xp = getXp();
    document.getElementById("loot-message").textContent = loot + xp;
    setTimeout(function () { document.getElementById("enemy").classList.add("hide") }, 800);
    setTimeout(startEnemy, 1600);
};

function playerDeath() {
    new_winner = document.getElementById("enemy-name").textContent;
    document.getElementById("player").style.display = "none";
    document.getElementById("game-screen").style.backgroundColor = "rgb(138,3,3)";
    document.getElementById("enemy").classList.add("hide");
    document.getElementById("enemy").style.display = "none";
    setTimeout(function () {
        document.getElementById("game-screen").innerHTML += `<div id="death-screen">
        <h1>${player.name}, hai combattuto con onore ma il tuo viaggio è terminato.</h1>
        <p>Il tuo avversario, ${new_winner}, si è macchiato le mani del tuo sangue. Le sue gesta eroiche verranno raccontate tra i mostri suoi amici, ma per poco:
        lo stesso avversario che oggi, alleato dei mostri, ha terminato la tua vita, sarà domani costretto a competere contro i suoi simili, per soddisfare la sadica sete di morte
        degli alieni che vi hanno rapito. Capisci solo ora che non eravate nemici, ma alleti separati da un fato avverso.
        </p>
        <button class="button" onclick="restart()">Riprova</button>
        </div>`
    }, 1000)
    return new_winner;


};

function restart() {
    player = {
        name: new_winner,
        level: 1,
        max_health: 150,
        health: 150,
        defense: 0,
        attack: 10,
        xp: 0,
        max_xp: 50,
        money: 0,
        attack_potions: 3,
        health_potions: 3,
        max_potions: 5,
        weapon_durability: 0,
        extra_attack: 0,
        shield_durability: 0
    }
    document.getElementById("death-screen").innerHTML = "";
    document.getElementById("player").style.display = "inherit";
    document.getElementById("enemy").style.display = "inherit";
    document.getElementById("game-screen").style.backgroundColor = "none";
    document.getElementById("game-screen").style.backgroundColor = "rgba(255,255,255,0.6)";
    startPlayer();
    startEnemy();
}

function getLoot() {
//una possibilità su due di ottenere soldi, una su quattro di ottenere pozioni di attacco e una su quattro di ottenere pozioni di salute
    let random = Math.floor(Math.random() * 4);
    let potions = Math.floor(Math.random() * (4 * player.level) + 1);
    let money = Math.floor(Math.random() * (10 * (player.level * 2)) + 1);
    //if (potions > (player.level + 7)) {//Per evitare che, andando avanti nel gioco, si ottengano troppe pozioni
    //    potions = (player.level + 7);
    //}
    switch (random) {
        case 0:
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
    //40 punti extra all'attacco base
    if (player.attack_potions <= 0) {
        document.getElementById("hit-message").innerText = "Non hai più pozioni!"
        
    } else {
        let temp = player.attack;
        player.attack += 40;
        attack();
        player.attack = temp;
        player.attack_potions--;
    }
    startPlayer();

    
    
}

function healthUp() {
    //Vengono restituiti 60 punti salute
    if (player.health_potions <= 0) {
        document.getElementById("hit-message").innerText = "Non hai più pozioni!"
    } else {
        if (player.health === player.max_health) {
            document.getElementById("hit-message").innerText = "Non puoi curarti più del massimo!"
        } else {
            player.health += 60;
            player.health_potions--;
            if (player.health > player.max_health) {
                player.health = player.max_health;
            }
        }
    }
        startPlayer();

}

function levelUp() {
    player.level++;
    player.xp = 0;
    player.max_xp = Math.floor(player.max_xp * 1.6);
    player.max_health = Math.floor(player.max_health * 1.2);
    player.health = player.max_health;
    player.attack = Math.floor(player.attack * 1.3);
    document.getElementById("level-up-message").textContent = "Sei salito al livello " + player.level + "!"
    if (player.level % 3 == 0) {
        player.max_potions++;
    }
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


function clearMessages() {
    document.getElementById("hit-message").textContent = "";
    document.getElementById("miss-message").textContent = "";
    document.getElementById("loot-message").textContent = "";
    document.getElementById("broken-weapon-message").textContent = "";
    document.getElementById("level-up-message").textContent = "";
}




