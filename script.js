console.log('1. Somador de Números')

let Qn = parseInt(prompt("Digite quantos numeros você quer somar?"));
let soma = 0
for (let i = 0; i < Qn; i++) {

    let n = parseInt(prompt("Digite um numero"));
    soma = (soma + n)

}
console.log(soma)

console.log("-----------------------------------")


console.log('2. Contagem Regressiva da NASA')

let n = 11;
let x = 0;
while (n > 0) {
    n--;
    x -= n;
    console.log(n);
}
console.log('Lançamento!')

console.log("-----------------------------------")

console.log('3. Balanço Financeiro Anual')
let ganhoBrutoTotal = 0
let gastosMensaisTotal = 0
for (let mes = 1; mes < 13; mes++) {
    let ganhoMes = parseInt(prompt('Digite o ganhos do mes ' + mes + ' º'));
    ganhoBrutoTotal = (ganhoBrutoTotal + ganhoMes)

    let gastoMes = parseInt(prompt('Digite o gastos do mes ' + mes + ' º'));
    gastosMensaisTotal = (gastosMensaisTotal + gastoMes)
}
function Balanço(ganhoBrutoTotal, gastosMensaisTotal) {
    const saldoFinal = (ganhoBrutoTotal - gastosMensaisTotal)
    console.log('Total de ganhos ' + ganhoBrutoTotal)
    console.log('Total de gastos ' + gastosMensaisTotal)
    if (saldoFinal < 0) {
        console.log('Você teve PREJUIZO')
    } else {
        console.log('Você teve LUCRO')
    }
}
Balanço(ganhoBrutoTotal, gastosMensaisTotal)

console.log("-----------------------------------")

console.log('4. Números em Ordem Decrescente')

let n1 = parseInt(prompt('Digite o primeiro numero'));
let n2 = parseInt(prompt('Digite o segundo numero'));
let n3 = parseInt(prompt('Digite o terceiro numero'));
let n4 = parseInt(prompt('Digite o quatro numero'));