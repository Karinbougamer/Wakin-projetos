// Pessoa escolhe um número e ele é armazenado na memória
let numero = Number(prompt('vamos contar, escolha um numero'));

// Inicializa a contagem em zero
let contagem = 0;

// Enquanto a contagem for menor ou igual ao número escolhido
while (contagem <= numero) {
    // Exibe o valor atual da contagem
    alert(contagem);

    // vai somando a contagem para a próxima repetição
    contagem++;
}
