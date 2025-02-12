var nota1 = 10;
var nota2 = 4;
var nota3 = 7;

function calcularNotas(){
    var media = (nota1 + nota2 + nota3)/3
    if(media >= 7){
        console.log(`Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3} | Média das notas: ${media} | Resultado final: aprovado`)
    }else{
        console.log(`Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3} | Média das notas: ${media} | Resultado final: reprovado`)
    }
}

calcularNotas();