 export default class Character {
    constructor(name , healthPoints , atkPoints , defPoints ){
        this.name = name
        this.healthPoints = healthPoints
        this.atkPoints = atkPoints
        this.defPoints = defPoints
    }
    atack(enemy){
        if(this.atkPoints > enemy.defPoints){
            enemy.healthPoints -= this.atkPoints - enemy.defPoints
        }}
}

// const a = new Character("Emanuel" , 100 , 20 , 5)
// const b = new Character("Antonia" , 50 , 30 , 10)

// a.atack(b)
// console.log(b)


