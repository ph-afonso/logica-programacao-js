// Mensagem inicial
alert('Boas vindas ao jogo do número secreto');

// Variável para armazenar a dificuldade
let dificuldade;

// Continua pedindo até a dificuldade ser válida (1, 2 ou 3)
while (dificuldade !== 1 && dificuldade !== 2 && dificuldade !== 3) {
    alert('Escolha a dificuldade: \n1 - Fácil (1 a 10)\n2 - Médio (1 a 100)\n3 - Difícil (1 a 1000)');
    dificuldade = Number(prompt('Digite o número correspondente à dificuldade desejada:'));
    
    if (dificuldade !== 1 && dificuldade !== 2 && dificuldade !== 3) {
        alert('Dificuldade inválida! Por favor, escolha 1, 2 ou 3.');
    }
}

let maxNumeros;

// Define o intervalo com base na dificuldade escolhida
switch (dificuldade) {
    case 1:
        maxNumeros = 10;
        break;
    case 2:
        maxNumeros = 100;
        break;
    case 3:
        maxNumeros = 1000;
        break;
}

// Gera um número aleatório dentro do intervalo escolhido
let numeroSecreto = Math.floor(Math.random() * maxNumeros) + 1;

// (Para testes) Mostra no console o número secreto
console.log(`Número secreto: ${numeroSecreto}`);

// Variável para armazenar o chute do jogador
let chute;

// Contador de tentativas
let tentativas = 1;

// Loop até acertar
while (numeroSecreto !== chute) {
    // Solicita o palpite ao usuário
    chute = Number(prompt(`Escolha um número entre 1 e ${maxNumeros}:`));

    // Valida se o chute é um número dentro do intervalo
    if (isNaN(chute) || chute < 1 || chute > maxNumeros) {
        alert(`Por favor, digite um número válido entre 1 e ${maxNumeros}.`);
        continue; // Volta para o início do loop sem contar tentativa inválida
    }

    // Se acertou, sai do loop
    if (chute === numeroSecreto) {
        break;
    }

    // Mensagem de erro e dica
    alert('Número errado. Tente novamente!');
    if (chute < numeroSecreto) {
        alert(`Dica: o número secreto é MAIOR que ${chute}`);
    } else {
        alert(`Dica: o número secreto é MENOR que ${chute}`);
    }

    tentativas++;
}

// Mensagem final com pluralização correta
alert(`🎉 Parabéns! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativa${tentativas > 1 ? 's' : ''}!`);
