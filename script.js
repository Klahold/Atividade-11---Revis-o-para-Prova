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

let numeros = [];

for (let i = 0; i < 4; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
}

numeros.sort((a, b) => b - a);
console.log(`Números em ordem decrescente: ${numeros.join(", ")}`);

console.log("-----------------------------------")
console.log("5. Transformador de Par em Ímpar")

let numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
    numero += 1;
} else {
    numero += 1;
}
console.log(`O número transformado é: ${numero}`);

console.log("-----------------------------------")
console.log("6. Vogal ou Consoante")

let letra = prompt("Digite uma letra:").toLowerCase();
let vogais = ['a', 'e', 'i', 'o', 'u'];
if (vogais.includes(letra)) {
    console.log(`${letra} é uma vogal.`);
} else {
    console.log(`${letra} é uma consoante.`);
}

console.log("-----------------------------------")
console.log("7. Cardápio da Picoleteria")

let sabores = {
    "Chocolate": 1.50,
    "Morango": 2.50,
    "Creme": 2.50,
    "Manga": 3.20,
    "Melancia": 3.40,
    "Vanilla Ice": 3.00,
    "Céu Azul": 3.60,
    "Brownie": 4.00,
    "Hawaiano": 5.00
};
let saborEscolhido = prompt("Escolha um sabor: " + Object.keys(sabores).join(", "));
let preco = sabores[saborEscolhido];
if (preco) {
    console.log(`O valor do picolé de ${saborEscolhido} é R$${preco.toFixed(2)}`);
} else {
    console.log("Sabor não encontrado.");
}

console.log("-----------------------------------")
console.log("8. Jogo de Adivinhação")

let numeroSorteado = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    if (palpite > numeroSorteado) {
        console.log("Seu palpite está acima do número sorteado.");
    } else if (palpite < numeroSorteado) {
        console.log("Seu palpite está abaixo do número sorteado.");
    }
} while (palpite !== numeroSorteado);

console.log("Parabéns! Você acertou o número!");

console.log("-----------------------------------")
console.log("9. Contador de Vogais")

let frase = prompt("Digite uma frase:");
let vogais2 = frase.match(/[aeiou]/gi);
let contador = vogais2 ? vogais2.length : 0;

console.log(`A frase contém ${contador} vogais.`);

console.log("-----------------------------------")
console.log("10. Validador de Senha")

let senha = prompt("Digite uma senha:");

let validaSenha = (senha) => {
    return senha.length >= 8 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /\d/.test(senha);
};

if (validaSenha(senha)) {
    console.log("Senha válida!");
} else {
    console.log("Senha inválida! A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número.");
}

console.log("-----------------------------------")
console.log("11. Tabuada Inteligente")

let numero2 = parseInt(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero2} x ${i} = ${numero2 * i}`);
}
console.log("-----------------------------------")
console.log("12. Cadastro de Produtos")

let produtos = [];
let totalCarrinho = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    produtos.push({ nome, preco });
    totalCarrinho += preco;
}

let listaProdutos = produtos.map(produto => `${produto.nome}: R$${produto.preco.toFixed(2)}`).join("\n");
console.log(`Lista de produtos:\n${listaProdutos}\nTotal do carrinho: R$${totalCarrinho.toFixed(2)}`);