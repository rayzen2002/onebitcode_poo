const Address = require("./Address");
const Person = require("./Person");

const end = new Address("Lindolfo Goncalves" , 625 , "Pedrinhas" , "Sobral" , "Ceara")
console.log(end.fulladdress())

const person = new Person("Emanuel" , end)
console.log(person)
