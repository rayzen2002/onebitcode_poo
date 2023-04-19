module.exports = class Account{
    #balance
    constructor( user){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }
    get balance(){
        return this.#balance
    }
    
    newDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }
    newLoan(loan){
        this.#balance -= loan.value
        this.loans.push(loan)
    }
    newTransfer(transfer){
        if(transfer.user.email === this.owner.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        }else if(transfer.beneficiary.email === this.owner.email){
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
        
    }
}