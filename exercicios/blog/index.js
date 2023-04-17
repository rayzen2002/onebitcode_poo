const Author = require("./Author");

const john = new Author("John Doe")
const post = john.writePost("Titulo do post" , "Fear he who fears nothing")
post.addComment("Emanuel" , "Agree")
post.addComment("Antonia" , "disAgree")

console.log(post)
console.log(john)