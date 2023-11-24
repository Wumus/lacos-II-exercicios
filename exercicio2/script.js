let numeroInserido = +prompt("Digite um número: ")

let tabuada = [1,2,3,4,5,6,7,8,9,10]

for (let indice in tabuada)
    console.log("O resultado de", numeroInserido, "x", tabuada[indice], "é:", numeroInserido * tabuada[indice])