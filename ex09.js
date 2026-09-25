/**
 * 9. Depuração com console.log
 *
 * Utilizando console.log antes e depois para entender por que o resultado é NaN.
 */

function soma(a, b) {
  console.log("Antes da soma  -> a:", a, `(${typeof a})`, "| b:", b, `(${typeof b})`);
  const resultado = a + b;
  console.log("Depois da soma -> resultado:", resultado, `(${typeof resultado})`);
  return resultado;
}

console.log("=== 9. Depuração com console.log ===");
console.log("Chamada final:", soma(2, undefined));

/*
 * CAUSA DO RESULTADO NaN:
 * O parâmetro 'b' recebe o valor primitivo 'undefined'.
 * Ao tentar somar um número com 'undefined' (2 + undefined), o JavaScript tenta
 * coagir 'undefined' para um número numérico através de Number(undefined), que resulta em NaN.
 * Qualquer cálculo aritmético realizado com NaN resulta em NaN.
 */
