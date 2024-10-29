let i; // Declara uma variável 'i' para controlar o loop.

for(i = 1; i < 10; i++) { // Inicia um loop que irá se repetir enquanto i for menor que 10.
    // A cada iteração, o valor de i é incrementado em 1.

    if(i == 5) { // Verifica se o valor atual de i é igual a 5.
        break; // Se a condição for verdadeira, o loop é interrompido imediatamente.
    }
    console.log(i); // Imprime o valor atual de i no console.
}