
**
 * Exercício 14: Depuração Sem debugger
 * 
 * 1. Como retomar a execução normalmente:
 *    - Clicar no botão "Resume script execution" (ícone de 'Play' ▶ azul no topo do painel de depuração); OU
 *    - Pressionar a tecla de atalho F8 (ou Ctrl + \ no Chrome).
 *    O interpretador sairá do estado pausado e executará o restante do código até o fim (ou até o próximo breakpoint).
 * 
 * 2. Como remover todos os breakpoints de uma vez:
 *    - No painel lateral das DevTools (aba Sources/Depurador), localize a seção "Breakpoints".
 *    - Clique com o botão direito do mouse em cima de qualquer breakpoint listado.
 *    - No menu de contexto que abrir, selecione a opção "Remove all breakpoints" (Remover todos os pontos de interrupção).
 *    - (Opcional): É possível também apenas desativá-los temporariamente clicando no botão "Deactivate breakpoints" (ou Ctrl + F8).
 */

function depuracaoSemDebugger() {
  console.log("=== Exercício 14: Depuração Sem debugger ===\n");

  console.log("1. Como retomar a execução normalmente após parar em um breakpoint manual:");
  console.log("   - Clique no botão 'Resume script execution' (ícone ▶ no painel de depuração);");
  console.log("   - Ou pressione o atalho de teclado F8.");
  console.log("   - O script voltará a rodar em velocidade normal até a finalização ou próximo ponto de parada.\n");

  console.log("2. Como remover todos os breakpoints de uma só vez:");
  console.log("   - Vá até a seção lateral 'Breakpoints' na aba Sources (Depurador);");
  console.log("   - Clique com o botão direito do mouse sobre a lista de breakpoints;");
  console.log("   - Selecione a opção 'Remove all breakpoints' (Remover todos os pontos de interrupção);");
  console.log("   - Alternativamente, use o ícone de desativação (ou Ctrl + F8) para ignorar temporariamente todos os breakpoints sem apagá-los.");
}

depuracaoSemDebugger();
