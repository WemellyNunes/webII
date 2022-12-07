
var resultadoQuadrado = 0;
var resultadoTriangulo = 0;

const readline = require("readline")
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

teclado.question("digite o valor ESCOLHA: ", (NumE) => {
    teclado.question("digite o valor 1: ", (valor1) => {
        teclado.question("digite o valor 2: ", (valor2) => {


            if (parseInt(NumE) == 1) {
                resultadoQuadrado = parseInt(valor1) * parseInt(valor2)
                console.log(`A area do quadrado é: ${resultadoQuadrado}`)
            } else {
                resultadoTriangulo = (parseInt(valor1) * parseInt(valor2)) / 2
                console.log(`A area do triangulo é: ${resultadoTriangulo}`)
            }

        })
    })
})