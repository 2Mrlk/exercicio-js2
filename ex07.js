/**
 * 7. Bloco Finally
 *
 * safeParse com bloco finally para imprimir "Parse attempt finished" sempre,
 * independentemente de ter ocorrido erro ou não.
 */

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    throw error;
  } finally {
    console.log("Parse attempt finished");
  }
}

console.log("=== 7. Bloco Finally ===");

console.log("Cenário 1 (Sucesso):");
const resultado1 = safeParse('{"nome": "Leandromeda"}');
console.log("Retorno:", resultado1);

console.log("\nCenário 2 (Erro):");
const resultado2 = safeParse("texto inválido");
console.log("Retorno:", resultado2);
