import Character from "./Character.js"


export class Mage extends Character{
    constructor(magicPoints , name , healthPoints , atkPoints , defPoints ){
        super(name , healthPoints , atkPoints , defPoints )
        this.magicPoints = magicPoints
    }

    atack(enemy){
        if((this.atkPoints + this.magicPoints) > enemy.defPoints){
            enemy.healthPoints -= (this.atkPoints + this.magicPoints -enemy.defPoints)
        }}
    heal(ally){
        ally.healthPoints += 2 * this.magicPoints 
    }
}

