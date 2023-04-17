import Character from "./Character.js";
import { Mage } from "./Mage.js";
import { Warrior } from "./Warrior.js";
import { Thief } from "./Thief.js";


const a = new Mage(50 ,"Emanuel" , 100 , 20 , 5)
const b = new Character("Antonia" , 80 , 30 , 10)

console.log(b)
a.atack(b)

console.log(b)

 a.heal(b)

 console.log(b)