import Character from "./Character.js"
import { Thief } from "./Thief.js"


export class Warrior extends Character{
    constructor(name , healthPoints , atkPoints , defPoints , shieldPoints , mode ){
        super(name , healthPoints , atkPoints , defPoints)
        this.shieldPoints = shieldPoints
        this.mode = mode 
        this.warriorRule()
    }
    atack(enemy){
        if(this.atkPoints > enemy.defPoints){
            if(this.mode === 'atack'){
                enemy.healthPoints -= this.atkPoints - enemy.defPoints
            }else if(this.mode === 'defense'){
                console.log(`Nao pode atacar em modo de defesa`)
            }
        }
    }
    position(){
        if(this.mode === 'atack'){
            this.mode = 'defense'
        }else {
            this.mode = 'atack'
        }
   
    }
    warriorRule(){
        if (this.mode === 'defense'){
            this.defPoints += this.shieldPoints
        }else if(this.mode === 'atack'){
            this.defPoints = this.defPoints
        }
    }
}

