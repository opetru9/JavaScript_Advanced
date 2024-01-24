// main App Module

// ------- Module Object Wrapper ---------

let name = 'Custom app'
let version = '1.01.01'

// ------- Module Object Wrapper ---------


import { name as authorName  , email } from './author.mjs'
import {Card} from "./Card.mjs"

let card = new Card(`${name} (${version})`, 
                ` ${authorName} : ${email}`, 
                '#112233'  )
let infoDiv = document.getElementById('info')
card.render(infoDiv)

// console.log(name)
// console.log(version)
// console.log(authorName , email)