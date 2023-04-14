class Book {
    constructor(title ){
        this.title = title
        this.published = false    }
        publish(){
            this.published = true
        }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")
eldest.publish()
console.log(eragon , eldest)