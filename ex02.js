/**
 * 2. Erros sem Exceções?
 * Situações em que algo "deu errado" no código mas não gerou exceção (sem disparar throw).
 */

console.log("=== 2. Erros sem Exceções ===");

// 1. Divisão por zero resulta em Infinity sem lançar exceção
const divisaoPorZero = 10 / 0;
console.log("10 / 0 =", divisaoPorZero); // Infinity

// 2. Acesso a propriedade inexistente resulta em undefined sem lançar exceção
const usuario = {};
console.log("usuario.idade =", usuario.idade); // undefined

// 3. Operação aritmética inválida resulta em NaN sem lançar exceção
const calculoInvalido = "texto" * 3;
console.log('"texto" * 3 =', calculoInvalido); // NaN
