module.exports = class Transfer{
    constructor(user, beneficiary, value ){
        this.user = user
        this.beneficiary = beneficiary
        this.value = value
        this.createdAt = new Date()

    }
}