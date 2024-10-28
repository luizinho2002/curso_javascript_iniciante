let num = 1; // Inicializa uma variável chamada 'num' com o valor 1. Essa variável será usada como contador.

while(true) { // Inicializa um loop infinito. O loop continuará se executando enquanto a condição dentro dos parênteses for verdadeira.
             //  Como 'true' sempre é verdadeiro, o loop, por padrão, nunca terminaria.

    console.log('Hello World'); // Imprime a mensagem 'Hello World' no console do navegador. Essa linha será executada a cada iteração do loop.
    
    num++; // Incrementa o valor da variável 'num' em 1. A cada passagem pelo loop, o valor de 'num' aumenta em 1.

    if (num === 10) { // Verifica se o valor atual 'num' é igual a 10.
        break; // Se a condição acima for verdadeira (ou seja, se 'num' chegar a 10), a instrução 'break' é executada, saindo do loop imediatamente.
    }
}