const Account = require('./Account.js')
const App = require('./App.js')
const Deposit = require('./Deposit.js')
const Installments = require('./Installments.js')
const Loan = require('./Loan.js')
const Transfer = require('./Transfer.js')
const User = require('./User.js')

module.exports = class App{
    static #users = []
    
    static findByEmail(email){
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }
    static createUser(fullname, email){
        const userExist = App.findByEmail(email)
        if(!userExist){
            this.#users.push(new User(fullname,email))
        }
       
    }
    static deposit(email , value){
        const user = App.findByEmail(email)
        if(user){
            const deposit = new Deposit(value)
            user.account.newDeposit(deposit)
        }
    }
    static loan(email, value, numberOfInstallments){
        // if(this.findByEmail(user.email)){
        //     user.account.balance += value
        //     for(let i = 1 ;i <= installments ; i++){
        //         this.installments.push(new Installments((value * Loan.fee) / installments, i))
        //     }
        // }
        const user = App.findByEmail(email)
        if(user){
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.newLoan(newLoan)
        }
    }

    static transfer(user, beneficiary, value){
        const fromUser = App.findByEmail(user.email)
        const toUser = App.findByEmail(beneficiary.email)
        if(fromUser && toUser){
            const newTransfer = new Transfer(user, beneficiary, value)
            fromUser.account.newTransfer(newTransfer)
        }
    }

    static changeLoanFee(newFee){
        Loan.fee = newFee
    }
   
}
