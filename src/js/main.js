import {mapaderotas} from './rotas/rotas.js'
import {navbar} from './navbar/navbar.js'

const app = document.getElementById("app")

navbar(mapaderotas)
let hash = location.hash || "#home" // #home (tudo dps do hash ele captura)

// console.log(mapaderotas)
// console.log(mapaderotas[0])
// console.log(mapaderotas[0].label)

const roteador = {}

window.addEventListener("hashchange", ()=>{

    mapaderotas[1].pagina()

})

