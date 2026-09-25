/**
 * 5. Try…Catch Básico
 *
 * Função safeParse(jsonString) que tenta converter uma string JSON em objeto:
 * - Em caso de sucesso, retorna o objeto parseado.
 * - Em caso de erro, retorna null sem interromper a execução.
 */

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

console.log("=== 5. Try…Catch Básico ===");
console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));          // → null
