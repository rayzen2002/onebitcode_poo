class Address{
    constructor(street , number , neighbourhood , city , state){
        this.street = street
        this.number = number
        this.neighbourhood = neighbourhood
        this.city = city
        this.state = state
    }
    fulladdress(){
        return `Rua: ${this.street} , numero: ${this.number} , Bairro : ${this.neighbourhood} cidade: ${this.city}
     } , Estado: ${this.state}`
    }
}




module.exports = Address