/**
 * 6. Tratamento Condicional de Exceções
 *
 * safeParse melhorado para verificar no catch se o erro é SyntaxError:
 * - Se for SyntaxError, retorna null.
 * - Caso contrário, relança a exceção (throw).
 */

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    // Relança qualquer outro erro inesperado
    throw error;
  }
}

console.log("=== 6. Tratamento Condicional de Exceções ===");
console.log("JSON válido:", safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
console.log("JSON inválido (SyntaxError tratado):", safeParse("texto inválido")); // → null
