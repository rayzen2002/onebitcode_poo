class Property{
    constructor(area , price){
        this.area = area
        this.price = price
    }
    getPriceBySquareMeter(){
        return this.price / this.area + ` Dolars by Square meter`
    }
}

class House extends Property {

}

class Apartment extends Property {
    constructor(number , area , price){
        super(area , price)
        this.number = number
    }
    getFloor(){
       return this.number.slice(0 , -2) + ` Andar`
    }
}
const land = new Property(1000 , 5000000)
const myHome = new House(100 , 300000)
const ap = new Apartment("301" , 120 , 200000)

console.log(land,myHome)
console.log(land.getPriceBySquareMeter(),myHome.getPriceBySquareMeter())
console.log(ap.getFloor())