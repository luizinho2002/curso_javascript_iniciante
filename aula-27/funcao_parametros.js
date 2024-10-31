function add(num1, num2) {
    // Cria uma função chamada 'add' que recebe dois parâmetros: num1 e num2.
    // Essa função é como uma receita: ela descreve um conjunto de instruções que serão seguidas.

    let resultado = num1 + num2;
    // Dentro da função, criamos uma variável chamada 'resultado' e armazenamos nela a soma de num1 e num2.
    // Essa linha é o coração da função, onde a adição realmente acontece.

    return resultado;
    // A palavra-chave 'return' diz à função para enviar o valor de 'resultado' de volta para onde a função foi chamada
    // É como entregar o prato pronto apôs seguir a receita.
}

let saida = add(5, 5);
// Aqui,estamos chamando a função 'add' com o valores 5 e 5.
// O resultado da soma (10) será armazenado na variável 'saida'.

console.log(`O resultado da soma é ${saida}`);
// Essa linha utiliza o console do navegador para exibir uma mensagem com o resultado da soma.