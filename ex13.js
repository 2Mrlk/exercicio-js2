/**
 * 13. Call Stack
 *
 * Diagrama em texto mostrando a Call Stack no momento em que 'interno' está sendo executado:
 *
 * ==========================================
 * CALL STACK (do topo para a base):
 * ==========================================
 * ▶ interno (m: 4)          <-- Frame atual em execução (topo da pilha)
 * ▶ externo (n: 4)          <-- Aguardando retorno da função 'interno'
 * ▶ (anonymous) / Global    <-- Escopo global onde 'externo(4)' foi invocado
 * ==========================================
 */

function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  console.log("=== 13. Call Stack ===");
  console.log("Visualização da pilha atual (console.trace):");
  console.trace("Ponto de execução dentro de interno");
  return m * 3;
}

externo(4);
