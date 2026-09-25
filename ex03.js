/**
 * 3. Confiabilidade Limitada
 *
 * Cenários em que o programa deve desconfiar dos dados de entrada:
 * - Formulários de usuário e elementos de input no front-end
 * - Parâmetros de rota e query strings de URLs
 * - Payload de requisições HTTP (req.body) em APIs públicas
 * - Arquivos enviados via upload e respostas de APIs externas
 */

console.log("=== 3. Confiabilidade Limitada ===");

function validarNumero(input) {
  // Validação defensiva: nunca assumir que o tipo recebido é o esperado
  if (typeof input !== "number" && typeof input !== "string") {
    console.error("Validação falhou: tipo de dado inválido.");
    return null;
  }

  const numero = Number(input);

  // Verifica se a conversão produziu um número válido
  if (Number.isNaN(numero)) {
    console.error(`Validação falhou: "${input}" não pôde ser convertido para número.`);
    return null;
  }

  return numero;
}

// Testes:
console.log("Entrada '42':", validarNumero("42"));
console.log("Entrada 'abc':", validarNumero("abc"));
console.log("Entrada true:", validarNumero(true));
