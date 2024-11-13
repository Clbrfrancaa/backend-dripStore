const soma = (a, b) => {
    try {
        let total = a + b
        return total

    } catch(error){
        return `Deu ruim: ${error}`
    }
}


const subtração = (a, b) => {
    let total = a - b
    return total
}

const multiplicacao = (a, b) => {
    let total = a * b
    return total
}

const divisao = (a, b) => {
    let total = a / b
    return total
}


module.exports = {soma, subtração, multiplicacao, divisao};