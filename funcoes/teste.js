function saudacao(hora) {
    if (hora > 4 && hora < 12)
        return "Bom dia!"
    else if (hora > 12 && hora < 18)
        return "Boa tarde!"
    else if (hora >= 18)
        return "Boa noite!"
    else
        return "Madrugada. Durma."
}

const prompt = require("prompt-sync")()
let h= parseInt(prompt("hora: "))
console.log(saudacao(h))