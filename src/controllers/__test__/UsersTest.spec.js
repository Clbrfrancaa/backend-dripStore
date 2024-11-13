const operacoes = require('../OperacoesController')

it ('1 + 5 deve ser igual a 6' , () => {
    const result = 6
    expect(operacoes.soma(1,5)).toBe(result)
})

it ('5 - 1 deve ser igual a 4' , () => {
    const result = 4
    expect(operacoes.subtração(5,1)).toBe(result)
})

it ('2 * 10 deve ser igual a 20' , () => {
    const result = 20
    expect(operacoes.multiplicacao(2,10)).toBe(result)
})

it ('20 / 10 deve ser igual a 2' , () => {
    const result = 2
    expect(operacoes.divisao(20,10)).toBe(result)
})