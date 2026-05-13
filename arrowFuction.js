function apresentar (nome){
    return `my name is ${nome}`
}
const apresentarArrow = nome => `my name is ${nome}`

console.log(apresentar('Neymar'))
console.log(apresentarArrow('Jr'))
const soma = (num1, num2) => num1 + num2

// arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(5, 5))
console.log(somaNumerosPequenos(50, 5))