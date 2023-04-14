export class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantitie){
        this.inStock += quantitie
    }
    calculateDiscount(discount){
        this.price = (100 - discount) * this.price/100
    }
}

