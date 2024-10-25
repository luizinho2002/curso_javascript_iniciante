let imdb = 7; // Armazena a nota do filme no IMDb

// Verifica se a nota do filme é maior que 8
if (imdb > 8) {
    console.log('Filme imperdível'); // Se a nota for maior que 8, o filme é recomendado
} else if (imdb > 6 && imdb <= 8) { // Se a nota for maior que 6 e menor ou igual a 8
    console.log('Adicionar à lista de observação'); // O filme pode ser interessante, mas não é uma prioridade
} else { // Se a nota for menor ou igual a 6
    console.log('Você pode pular'); // O filme não é recomendado
}