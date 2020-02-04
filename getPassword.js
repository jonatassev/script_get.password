// Script para gerar senhas (Padrão 16 caracteres)
// By Jonatas Severino
const letras = "abcdefghijklmnopqrstuvwxyz"
const numeros = "1234567890"
const caracteres = "!@#$%&*()_=[]"

function getRandom(min, max) {
    const numRandom = Math.random() * (max - min) + min
    return Math.floor(numRandom)
}

function getRandomPassword(qtChar) {

    const totalCharacters = letras.toUpperCase() + letras + numeros + caracteres
    let password = ""
    for (let i = 0; i < qtChar; i++) {
        const indiceChar = getRandom(0, totalCharacters.length)
        password = password + totalCharacters.charAt(indiceChar)
    }
    return password

}
console.log("Your password is: %s", getRandomPassword(16))
