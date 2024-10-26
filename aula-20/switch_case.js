// ENUNCIADO: Suponha o seguinte cenário. Você tem que criar um sistema de resultados dependendo da nota.

// RESOLUÇÃO:


let grade = 'B';

switch(grade) {
    case 'A':
        console.log('Excelente');
        break;
    case 'B': 
        console.log('Boa');
        break;
    case 'C':
        console.log('Média');
        break;
    case 'D':
        console.log('Abaixo da média');
    case 'F':
        console.log('Reprovado');
        break;
    default:
        console;log('A npota é invalida');
}