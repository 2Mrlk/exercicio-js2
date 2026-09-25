/**
 * 11. Uso do debugger
 *
 * Instrução debugger dentro de uma função.
 *
 * RELATÓRIO DE EXPERIÊNCIA:
 * Ao abrir a página no navegador com o DevTools aberto, o motor do JavaScript pausa a execução
 * exatamente na linha contendo a instrução 'debugger;'. A interface destaca a linha corrente,
 * congela a tela e exibe no painel lateral o escopo local com as variáveis avaliadas até aquele instante
 * (x: 5, y: 10), permitindo inspecionar valores em memória antes do retorno da função.
 */

function testeDebug(x) {
  const y = x * 2;
  debugger; // Interrompe a execução quando as ferramentas de desenvolvedor estiverem abertas
  return y;
}

console.log("=== 11. Uso do debugger ===");
console.log("Resultado de testeDebug(5):", testeDebug(5));
