let num; // Criamos uma variável chamada 'num' para armazenar um número.

for(num = 1; num < 11; num++) {
    // Dentro do loop, verificamos se o número atual é par.
    // O operador % (módulo) retorna o resto da divisão.
    // Se o resto da divisão por 2 for 0, o número é par.
    if (num %2 == 0) {
        // Se o número for par, ele é impresso no console.
        console.log(num);
    }
}