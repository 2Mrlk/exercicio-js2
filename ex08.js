/**
 * 8. Lançando Erros Customizados
 *
 * Classe InvalidAgeError extends Error e função checkAge(age):
 * - Se age < 0 ou age > 120, faz throw new InvalidAgeError("Idade fora do intervalo").
 * - Caso contrário, retorna "Idade válida".
 */

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

console.log("=== 8. Lançando Erros Customizados ===");

const idadesParaTeste = [-5, 30, 200];

idadesParaTeste.forEach((idade) => {
  try {
    const status = checkAge(idade);
    console.log(`Idade ${idade}: ${status}`);
  } catch (err) {
    if (err instanceof InvalidAgeError) {
      console.error(`Idade ${idade}: [${err.name}] ${err.message}`);
    } else {
      throw err;
    }
  }
});
