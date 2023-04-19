const Account = require('./Account')
const App = require('./App.js')
const User = require('./User')


//myAcc = new Account([100,500,400] , [] , [-200])
App.createUser("Emanuel Magalhaes" , "emanuelzsmj@gmail.com")
App.createUser( "Isaac Pontes" , "isaac@email.com",)
App.createUser("Lucas Queiroga", "lucas@email.com" )
App.createUser("Juliana Conde" , "juliana@email.com", )

App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.loan("juliana@email.com", 2000, 24)



console.log(App.findByEmail("emanuelzsmj@gmail.com"))
console.log(App.findByEmail("emanuelzsmj@gmail.com").account)
console.log(App.findByEmail("isaac@email.com"))
console.log(App.findByEmail("isaac@email.com").account)
console.log(App.findByEmail("lucas@email.com"))
console.log(App.findByEmail("lucas@email.com").account)
console.log(App.findByEmail("juliana@email.com"))
console.log(App.findByEmail("juliana@email.com").account)
console.log(App.findByEmail("juliana@email.com").account.loans[0].installments)