const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function identificarBandeira(numero) {
  const n = numero.replace(/\D/g, "");

  if (/^4\d{12}(\d{3})?$/.test(n)) {
    return "Visa";
  }
  if (
    /^(5[1-5]\d{14})$/.test(n) ||
    /^(222[1-9]\d{12}|22[3-9]\d{13}|2[3-6]\d{14}|27[01]\d{13}|2720\d{12})$/.test(n)
  ) {
    return "MasterCard";
  }
  if (/^(4011|4312|4389)\d{12}$/.test(n)) {
    return "Elo";
  }
  if (/^(34\d{13}|37\d{13})$/.test(n)) {
    return "American Express";
  }
  if (/^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/.test(n)) {
    return "Discover";
  }
  if (/^6062\d{12}$/.test(n)) {
    return "Hipercard";
  }
  if (/^(36\d{12}|38\d{12}|30[0-5]\d{11}|3095\d{10})$/.test(n)) {
    return "Diners Club";
  }
  if (/^(2131\d{11}|1800\d{11}|35\d{14})$/.test(n)) {
    return "JCB";
  }
  if (/^2014\d{11}|^2149\d{11}$/.test(n)) {
    return "EnRoute";
  }
  if (/^8699\d{11}$/.test(n)) {
    return "Voyager";
  }
  if (/^(50\d{14})$/.test(n)) {
    return "Aura";
  }
  return "Bandeira não identificada";
}

// Solicita o número do cartão ao usuário e exibe a bandeira
readline.question("Digite o número do cartão de crédito: ", (numeroCartao) => {
  const bandeira = identificarBandeira(numeroCartao);
  console.log(`Bandeira do cartão: ${bandeira}`);
  readline.close();
});