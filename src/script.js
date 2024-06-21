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
    max_money:200,
    attack_potions: 3,
    health_potions: 3,
    max_potions:5,
    weapon_durability:0,
    extra_attack: 0,
    shield_durability:0
}

//armi che possono essere comperate nel negozio
var weak_weapons = [
    { name: "Spada di legno", attack: 2, price: 8, durability: 12 },
    { name: "Spada di ferro", attack: 4, price: 15, durability: 14 },
    { name: "Lancia a corto raggio", attack: 6, price: 20, durability: 16 },
    { name: "Bastone della Saggezza", attack: 6, price: 18, durability: 20 },
    { name: "Fionda di legno", attack: 4, price: 10, durability: 18 },
    { name: "Spada di legno rinforzata", attack: 2, price: 12, durability: 15 },
    { name: "Cucchiaio da Minestrone", attack: 3, price: 5, durability: 25 },
    { name: "Arco Incantato", attack: 15, price: 40, durability: 30 },
    { name: "Martello del Destino", attack: 10, price: 30, durability: 22 },
    { name: "Frusta Fiammeggiante", attack: 8, price: 25, durability: 18 },
    { name: "Guanto del Pugno Fortissimo", attack: 7, price: 22, durability: 28 },
    { name: "Mazza Chiodata", attack: 12, price: 35, durability: 25 },
    { name: "Lancia a lungo raggio", attack: 9, price: 28, durability: 20 },
    { name: "Spada del Drago", attack: 15, price: 50, durability: 35 }
];

var medium_weapons = [
    { name: "Pugnale divino", attack: 25, price: 130, durability: 35 },
    { name: "Arco del Condottiero", attack: 30, price: 180, durability: 25 },
    { name: "Pistola aliena", attack: 45, price: 200, durability: 40 },
    { name: "Spada del Dominatore", attack: 40, price: 160, durability: 30 },
    { name: "Ascia del Tiranno", attack: 50, price: 190, durability: 28 },
    { name: "Lancia del Sovrano", attack: 35, price: 150, durability: 32 },
    { name: "Pugnale del Signore", attack: 48, price: 170, durability: 38 },
    { name: "Frusta del Dominio", attack: 42, price: 180, durability: 36 },
    { name: "Spada della Marmotta", attack: 38, price: 175, durability: 33 },
    { name: "Ascia del Bucaniere", attack: 47, price: 195, durability: 31 },
    { name: "Martello del Re", attack: 50, price: 200, durability: 40 }
];

var high_weapons = [
    { name: "Scettro Magico", attack: 130, price: 680, durability: 45 },
    { name: "Ascia del Terrore", attack: 150, price: 700, durability: 50 },
    { name: "Bastone dell'Imperatore", attack: 120, price: 600, durability: 40 },
    { name: "Falcione dell'Assalitore", attack: 170, price: 750, durability: 55 },
    { name: "Mazza del Conquistatore", attack: 180, price: 780, durability: 60 },
    { name: "Frusta del Dominio", attack: 160, price: 720, durability: 52 },
    { name: "Spada della Marmotta", attack: 175, price: 690, durability: 58 },
    { name: "Ascia del Bucaniere", attack: 200, price: 800, durability: 65 },
    { name: "Martello del Re", attack: 85, price: 950, durability: 28 },
    { name: "Pugnale divino", attack: 80, price: 650, durability: 38 },
    { name: "Arco del Condottiero", attack: 70, price: 600, durability: 35 },
    { name: "Lancia del Sovrano", attack: 85, price: 660, durability: 39 },
    { name: "Pugnale del Signore", attack: 75, price: 630, durability: 36 }
];

//scudi del negozio
var weak_shields = [
    { name: "Scudo di legno", protection: 2, durability: 8, price: 5 },
    { name: "Scudo di paglia", protection: 3, durability: 7, price: 3 },
    { name: "Scudo di bambù", protection: 4, durability: 10, price: 7 },
    { name: "Scudo di ferro", protection: 10, durability: 15, price: 15 },
    { name: "Scudo di cuoio", protection: 5, durability: 12, price: 10 },
    { name: "Scudo di bronzo", protection: 8, durability: 14, price: 20 },
    { name: "Scudo di rame", protection: 7, durability: 13, price: 18 },
    { name: "Scudo di osso", protection: 6, durability: 11, price: 12 },
    { name: "Scudo di pietra", protection: 9, durability: 10, price: 25 },
    { name: "Scudo di latta", protection: 4, durability: 9, price: 8 },
    { name: "Scudo dell'eremita", protection: 5, durability: 7, price: 5 },
    { name: "Scudo del vagabondo", protection: 3, durability: 8, price: 4 },
    { name: "Scudo di argilla", protection: 6, durability: 10, price: 12 },
    { name: "Scudo di corda", protection: 4, durability: 6, price: 3 },
    { name: "Scudo di tela", protection: 2, durability: 5, price: 2 },
    { name: "Scudo dell'apprendista", protection: 7, durability: 12, price: 15 },
    { name: "Scudo del combattente", protection: 10, durability: 14, price: 20 },
    { name: "Scudo del guardiano", protection: 8, durability: 13, price: 18 },
    { name: "Scudo dell'avventuriero", protection: 9, durability: 11, price: 22 },
    { name: "Scudo del difensore", protection: 15, durability: 15, price: 30 }
];

var medium_shields = [
    { name: "Scudo del Cavaliere", protection: 18, durability: 20, price: 60 },
    { name: "Scudo del Drago", protection: 25, durability: 25, price: 120 },
    { name: "Scudo di Acciaio", protection: 20, durability: 22, price: 80 },
    { name: "Scudo del Gladiatore", protection: 22, durability: 24, price: 100 },
    { name: "Scudo del Leone", protection: 30, durability: 28, price: 150 },
    { name: "Scudo di Mithril", protection: 28, durability: 27, price: 140 },
    { name: "Scudo della Quercia", protection: 17, durability: 21, price: 50 },
    { name: "Scudo del Guardiano", protection: 19, durability: 23, price: 70 },
    { name: "Scudo del Berserker", protection: 26, durability: 26, price: 130 },
    { name: "Scudo del Fabbro", protection: 24, durability: 25, price: 110 },
    { name: "Scudo del Condottiero", protection: 21, durability: 22, price: 90 },
    { name: "Scudo del Lupo", protection: 18, durability: 20, price: 60 },
    { name: "Scudo del Gigante", protection: 29, durability: 28, price: 145 },
    { name: "Scudo del Crociato", protection: 27, durability: 27, price: 135 },
    { name: "Scudo della Fenice", protection: 23, durability: 24, price: 105 },
    { name: "Scudo del Titano", protection: 30, durability: 29, price: 150 },
    { name: "Scudo dell'Orso", protection: 20, durability: 21, price: 85 },
    { name: "Scudo del Guardiano Notturno", protection: 16, durability: 20, price: 45 },
    { name: "Scudo del Mago", protection: 19, durability: 22, price: 75 },
    { name: "Scudo del Paladino", protection: 28, durability: 27, price: 140 }
];

var high_shields = [
    { name: "Scudo del Destino", protection: 35, durability: 25, price: 200 },
    { name: "Scudo del Re", protection: 50, durability: 30, price: 350 },
    { name: "Scudo della Fenice", protection: 45, durability: 28, price: 300 },
    { name: "Scudo del Titano", protection: 60, durability: 35, price: 700 },
    { name: "Scudo del Drago Ancestrale", protection: 55, durability: 32, price: 450 },
    { name: "Scudo del Legionario", protection: 40, durability: 27, price: 250 },
    { name: "Scudo dell'Imperatore", protection: 52, durability: 34, price: 600 },
    { name: "Scudo del Guardiano Supremo", protection: 48, durability: 29, price: 400 },
    { name: "Scudo dell'Eroe Leggendario", protection: 60, durability: 35, price: 650 },
    { name: "Scudo della Tempesta", protection: 42, durability: 26, price: 280 },
    { name: "Scudo della Giustizia", protection: 50, durability: 30, price: 350 },
    { name: "Scudo del Conquistatore", protection: 55, durability: 33, price: 500 },
    { name: "Scudo della Luce", protection: 45, durability: 28, price: 300 },
    { name: "Scudo del Campione", protection: 38, durability: 24, price: 220 },
    { name: "Scudo della Fortezza", protection: 60, durability: 35, price: 700 },
    { name: "Scudo dell'Invincibile", protection: 57, durability: 34, price: 550 },
    { name: "Scudo del Gladiatore", protection: 40, durability: 26, price: 250 },
    { name: "Scudo del Leone Dorato", protection: 52, durability: 31, price: 500 },
    { name: "Scudo del Coraggio", protection: 36, durability: 25, price: 200 },
    { name: "Scudo della Virtù", protection: 49, durability: 30, price: 350 },
    { name: "Scudo dell'Infinito", protection: 100, durability: 3, price: 1000 }
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
    document.getElementById("game-screen").classList.remove("hide");


}


//cuore del gioco
function startPlayer() {
    //assegnazione dei valori all'eroe
    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-level").textContent = player.level;
    document.getElementById("player-health").textContent = player.health + "/" + player.max_health;
    document.getElementById("player-attack").textContent = player.attack + player.extra_attack;
    document.getElementById("player-xp").textContent = player.xp + "/" + player.max_xp;
    document.getElementById("player-money").textContent = player.money + "/" + player.max_money;
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
        health: 1,
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
    document.getElementById("death-screen").remove();
    document.getElementById("player").style.display = "inline-block";
    document.getElementById("enemy").style.display = "inline-block";
    document.getElementById("game-screen").style.backgroundColor = "none";
    document.getElementById("game-screen").style.backgroundColor = "rgba(255,255,255,0.6)";
    startPlayer();
    startEnemy();
}

function getLoot() {
//una possibilità su due di ottenere soldi, una su quattro di ottenere pozioni di attacco e una su quattro di ottenere pozioni di salute
    let random = Math.floor(Math.random() * 4);
    let potions = Math.floor(Math.random() * 2 + 1);
    let money = Math.floor(Math.random() * (10 * player.level) + 1);
    //if (potions > (player.level + 7)) {//Per evitare che, andando avanti nel gioco, si ottengano troppe pozioni
    //    potions = (player.level + 7);
    //}
    switch (random) {
        case 0:
        case 1:
            if ((player.money + money) > player.max_money) {
                loot = "La tua borsa delle monete è piena! Hai ottenuto "
                player.money = player.max_money;
            }
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
    //Sparisce lo schermo di gioco ed entra quello del negozio
    document.getElementById("game-screen").classList.add("hide");
    document.getElementById("game-screen").classList.remove("show");
    document.getElementById("container_shop").classList.add("show");
    document.getElementById("container_shop").classList.remove("hide");

    //Generazione di armi e scudi andando a pescare casualmnete dalle relative liste 
    let weapon1 = weak_weapons[Math.floor(Math.random() * weak_weapons.length)];
    let weapon2 = medium_weapons[Math.floor(Math.random() * medium_weapons.length)];
    let weapon3 = high_weapons[Math.floor(Math.random() * high_weapons.length)];
    let shield1 = weak_shields[Math.floor(Math.random() * weak_shields.length)];
    let shield2 = medium_shields[Math.floor(Math.random() * medium_shields.length)];
    let shield3 = high_shields[Math.floor(Math.random() * high_shields.length)];
    document.getElementById("w1_name").textContent = weapon1.name;
    document.getElementById("w1_attack").textContent = weapon1.attack;
    document.getElementById("w1_durability").textContent = weapon1.durability;
    document.getElementById("w1_price").textContent = weapon1.price;

    document.getElementById("w2_name").textContent = weapon2.name;
    document.getElementById("w2_attack").textContent = weapon2.attack;
    document.getElementById("w2_durability").textContent = weapon2.durability;
    document.getElementById("w2_price").textContent = weapon2.price;

    document.getElementById("w3_name").textContent = weapon3.name;
    document.getElementById("w3_attack").textContent = weapon3.attack;
    document.getElementById("w3_durability").textContent = weapon3.durability;
    document.getElementById("w3_price").textContent = weapon3.price;

    document.getElementById("shield1_name").textContent = shield1.name;
    document.getElementById("shield1_protection").textContent = shield1.protection;
    document.getElementById("shield1_durability").textContent = shield1.durability;
    document.getElementById("shield1_price").textContent = shield1.price;

    document.getElementById("shield2_name").textContent = shield2.name;
    document.getElementById("shield2_protection").textContent = shield2.protection;
    document.getElementById("shield2_durability").textContent = shield2.durability;
    document.getElementById("shield2_price").textContent = shield2.price;

    document.getElementById("shield3_name").textContent = shield3.name;
    document.getElementById("shield3_protection").textContent = shield3.protection;
    document.getElementById("shield3_durability").textContent = shield3.durability;
    document.getElementById("shield3_price").textContent = shield3.price;

    document.getElementById("money_shop").textContent = player.money;
}

function closeShop() {
    document.getElementById("game-screen").classList.add("show");
    document.getElementById("game-screen").classList.remove("hide");
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
        document.getElementById("weapon3").classList.remove("bought");
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
        document.getElementById("weapon3").classList.remove("bought");
        startPlayer();
    } else {
        document.getElementById("shop_message").textContent = "Non hai abbastanza soldi!";

    }
}

function buyWeapon3() {
    if (player.money >= parseInt(document.getElementById("w3_price").textContent)) {
        document.getElementById("shop_message").textContent = "";
        player.extra_attack = parseInt(document.getElementById("w3_attack").textContent);
        player.weapon_durability = parseInt(document.getElementById("w3_durability").textContent);
        player.money -= parseInt(document.getElementById("w3_price").textContent);
        document.getElementById("money_shop").textContent = player.money;
        document.getElementById("weapon3").classList.add("bought");
        document.getElementById("weapon1").classList.remove("bought");
        document.getElementById("weapon2").classList.remove("bought");
        startPlayer();
    } else {
        document.getElementById("shop_message").textContent = "Non hai abbastanza soldi!";

    }
}

function buyShield1() {
    if (player.money >= parseInt(document.getElementById("shield1_price").textContent)) {
        document.getElementById("shop_message").textContent = "";
        player.defense = parseInt(document.getElementById("shield1_protection").textContent);
        player.shield1_durability = parseInt(document.getElementById("shield1_durability").textContent);
        player.money -= parseInt(document.getElementById("shield1_price").textContent);
        document.getElementById("money_shop").textContent = player.money;
        document.getElementById("shield1").classList.add("bought");
        document.getElementById("shield2").classList.remove("bought");
        document.getElementById("shield3").classList.remove("bought");        startPlayer();
    } else {
        document.getElementById("shop_message").textContent = "Non hai abbastanza soldi!";

    }
}

function buyShield2() {
    if (player.money >= parseInt(document.getElementById("shield2_price").textContent)) {
        document.getElementById("shop_message").textContent = "";
        player.defense = parseInt(document.getElementById("shield2_protection").textContent);
        player.shield2_durability = parseInt(document.getElementById("shield2_durability").textContent);
        player.money -= parseInt(document.getElementById("shield2_price").textContent);
        document.getElementById("money_shop").textContent = player.money;
        document.getElementById("shield2").classList.add("bought");
        document.getElementById("shield1").classList.remove("bought");
        document.getElementById("shield3").classList.remove("bought");        startPlayer();
    } else {
        document.getElementById("shop_message").textContent = "Non hai abbastanza soldi!";

    }
}

function buyShield3() {
    if (player.money >= parseInt(document.getElementById("shield3_price").textContent)) {
        document.getElementById("shop_message").textContent = "";
        player.defense = parseInt(document.getElementById("shield3_protection").textContent);
        player.shield3_durability = parseInt(document.getElementById("shield3_durability").textContent);
        player.money -= parseInt(document.getElementById("shield3_price").textContent);
        document.getElementById("money_shop").textContent = player.money;
        document.getElementById("shield3").classList.add("bought");
        document.getElementById("shield1").classList.remove("bought");
        document.getElementById("shield2").classList.remove("bought");        startPlayer();
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




