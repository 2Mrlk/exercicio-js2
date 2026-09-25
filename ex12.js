/**
 * 12. Step Over, Step Into e Step Out
 *
 * Exemplo de duas funções aninhadas e a diferença prática entre as ações de depuração:
 */

function externo(n) {
  return interno(n) + 1; // Suponha um ponto de parada nesta linha
}

function interno(m) {
  return m * 3;
}

console.log("=== 12. Step Over, Step Into e Step Out ===");
console.log("Resultado de externo(4):", externo(4));

/*
 * DIFERENÇA PRÁTICA NO CENÁRIO ACIMA:
 *
 * 1. Step Over (F10):
 *    Executa a chamada 'interno(n)' por completo sem desviar a visão para dentro dela.
 *    Avança diretamente para a próxima linha ou instrução de 'externo'.
 *
 * 2. Step Into (F11):
 *    "Mergulha" para dentro da função 'interno', parando na primeira instrução
 *    de seu corpo ('return m * 3;').
 *
 * 3. Step Out (Shift + F11):
 *    Estando dentro de 'interno', executa o restante do seu código até o retorno,
 *    devolvendo o controle para a função chamadora ('externo') logo após a chamada.
 */
