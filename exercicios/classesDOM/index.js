import { Component } from "./Component.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";

const title = new Component('h1' , 'body' , {textContent: "I suck!"})
console.log(title)
title.render()
title.tag = "h3"
title.build()
title.render()

const form = new Form('body')
const label = new Label('Nome: ' , form , {htmlfor : 'nameInput'})
const input = new Input(form , {id : 'nameInput' , name: 'name'})

form.render()
label.render()
form.addChild(input,new Component('br') , 
new Component('h1' , form ,{innerText : "Objetos sao dificeis de manipular"}),
new Label('Data de Nascimento: ' , form ,{htmlfor: 'birthdayInput'}),
new Input(form , {id: 'birthdayInput' , name : 'birthday'})

)

   