class Account{
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }
    #authenticate(email,password){
        return this.email === email && this.#password === password
         
    }
    showBalance(email , password){
        if (this.#authenticate(email,password)){
            return this.#balance
        }
    }
    changeBalance(email , password , ammount){
        if(this.#authenticate(email , password)){
            this.#balance += ammount
        }
    }
}

const user = {
    email : "emanuelzsmj@gmail.com",
    password : "defaultpassword"
}

const myAcc = new Account(user)

console.log(myAcc.showBalance("emanuelzsmj@gmail.com" , "defaultpassword"))
myAcc.changeBalance("emanuelzsmj@gmail.com" , "defaultpassword" , 322)
console.log(myAcc.showBalance("emanuelzsmj@gmail.com" , "defaultpassword"))