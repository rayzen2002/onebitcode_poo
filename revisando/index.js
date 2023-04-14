// const book = {
//     title : 'Fortaleza digital',
//     pages : 322 ,
//     published : true,
//     inStock : 20,
//     tags : ["fantasy" , "thriler" , "adventure fiction" , "mistery"],
//     author : {
//         name : 'Dan Brown'
//     },
//     addOnStock(quantity){
//         this.inStock += quantity
//     },
//     save : function(){
//         console.log(`Salva no banco de dados...`)
//     }
// }

function Book(title , pages , tags , author){
this.title = title
this.pages = pages
this.tags = tags
this.author = author
this.published = false
this.stock = 0
this.addOnStock = (quantity)=>{
this.stock += quantity
}
this.save = ()=>{
console.log(`Salva no banco de dados...`)
}
}


// console.log(book)
// book.addOnStock(50)
// console.log(book)
const author = {
name : "Dan Brown"
}
tags = ["fantasy" , "thriler" , "adventure fiction" , "mistery"]


const fortalezaDigital = new Book('Dan Brown' , '322' , tags , author)
const eldest = new Book('Eldest' , '644' , tags , author)
console.log(fortalezaDigital , eldest)