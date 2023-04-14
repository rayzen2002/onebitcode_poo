import { User } from './User.js'
import { Product } from './Product.js'

const user = new User("Emanuel Magalhaes" , "emanuelzsmj@gmail.com" , "testPassword")
console.log(user)
user.login("emanuelzsmj@gmail.com" , "testPassword")

const camisa = new Product('camisa','Tshirt Alohomora', 50)
console.log(camisa)
camisa.addToStock(5)
camisa.calculateDiscount(20)
console.log(camisa)