/**
 * 4. Tipos de Erros em JS
 *
 * - ReferenceError: Ocorre ao tentar ler ou acessar uma variável inexistente ou
 *   não inicializada (ex: dentro da Temporal Dead Zone com let/const).
 *
 * - TypeError: Ocorre quando uma operação é executada em um tipo de dado incompatível
 *   (ex: chamar null(), ou acessar propriedade de null/undefined).
 *
 * - SyntaxError: Ocorre quando o código viola a gramática formal da linguagem
 *   (ex: erros de pontuação no código ou ao executar JSON.parse em uma string inválida).
 */

console.log("=== 4. Tipos de Erros em JS ===");

// 1. Exemplo de ReferenceError
try {
  console.log(variavelQueNaoExiste);
} catch (error) {
  console.log(`[ReferenceError]: ${error.message}`);
}

// 2. Exemplo de TypeError
try {
  const nulo = null;
  nulo.executarAcao();
} catch (error) {
  console.log(`[TypeError]: ${error.message}`);
}

// 3. Exemplo de SyntaxError
try {
  JSON.parse("{ nome: 'invalido' }"); // Chaves sem aspas duplas violam a sintaxe do JSON
} catch (error) {
  console.log(`[SyntaxError]: ${error.message}`);
}
