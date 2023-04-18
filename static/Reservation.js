class Reservation {
    constructor(guests , room , days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.basefee
    }

    static basefee = 150
    static showBaseFee(){
        console.log(`basefee is ${Reservation.basefee}`)
    }
    static get premiumFee(){
        return Reservation.basefee * 1.5
    }
}

Reservation.showBaseFee()
const r1 = new Reservation(3 , "301" , 5)
//console.log(r1)
const r2 = new Reservation(2 , "302" , 3)
console.table([r1,r2])
console.log(Reservation.premiumFee)
Reservation.basefee = 300
console.log(Reservation.premiumFee)