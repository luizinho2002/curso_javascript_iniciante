let a = 5; // Aqui foi declarado uma variável com nome (a) que recebe o valor de (5)
let b = 6; // Aqui foi declarado uma variável com nome (b) que recebe o valor de (6)
let resultOne, resultTwo; // Aqui foi declarado duas variáveis chamadas de resultOne e resultTwo

resultOne = (a > b) && (b > a); // Aqui a variável resultOne foi inicializada recebendo a expressão (a > b) && (b > a)
resultTwo = (a < b) || (a > b); // Aqui a variável resultTwo foi inicializada recebendo a expressão (a < b) || (a > b)

console.log('Exemplo de operador AND ', resultOne); // Aqui o texto 'Exemplo de operador AND' junto com o resultado da variável resultOne é impresso no console do navegador
console.log('Exemplo de operador OR ', resultTwo); // Aqui o texto 'Exemplo de operador OR' junto com o resultado da variável resultTwo é impresso no console do navegador