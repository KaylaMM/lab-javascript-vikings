// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(thedamage) {
        this.health -= thedamage;
    }
};



// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    battleCry() {
        return "Odin Owns You All!"
    }

    receiveDamage(thedamage) {
        this.health -= thedamage;
        if (this.health >= 1) {
            return `${this.name} has received ${thedamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}



// Saxon
class Saxon extends Soldier {
    receiveDamage(thedamage) {
        this.health -= thedamage;
        if (this.health >= 1) {
            return `A Saxon has received ${thedamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }

    vikingAttack() {
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex];
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let result = randomSaxon.receiveDamage(randomViking.attack());

        if (result <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);

        }

        return result;
    };

    saxonAttack() {
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex];
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let result = randomViking.receiveDamage(randomSaxon.attack());

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return result;
    }
    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else if (this.vikingArmy.length > 0) {
            return "Vikings have won the war of the century!";
        } else {
            return "Saxons have fought for their lives and survived another day..."
        }
    }

};