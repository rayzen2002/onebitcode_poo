import Character from "./Character.js"

export class Thief extends Character{
    constructor(name , healthPoints , atkPoints , defPoints ){
        super(name , healthPoints, atkPoints , defPoints)
    }
    atack(enemy){
        if(this.atkPoints > enemy.defPoints){
            enemy.healthPoints -= 2 * this.atkPoints - enemy.defPoints
            console.log(`Ataque bem sucedido`)
        }}
}

// const a = new Thief("Emanuel" , 100 , 20 , 5)
// const b = new Character("Antonia" , 50 , 30 , 10)

// console.log(b)
// a.atack(b)

// console.log(b)