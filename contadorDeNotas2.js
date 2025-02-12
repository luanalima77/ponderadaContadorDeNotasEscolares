var notas = [7, 5, 10];

function calcularMediaDasNotas(){
    var somaDasNotas = 0;

    for (let indiceDaNota = 0; indiceDaNota < notas.length; indiceDaNota++){
        somaDasNotas += notas[indiceDaNota];
    }
    
    var media = (somaDasNotas/3).toFixed(2);
    
    if(media >= 7){
        console.log(`Nota 1: ${notas[0]} | Nota 2: ${notas[1]} | Nota 3: ${notas[2]} | Média das notas: ${media} | Resultado final: aprovado`);
    }else{
        console.log(`Nota 1: ${notas[0]} | Nota 2: ${notas[1]} | Nota 3: ${notas[2]} | Média das notas: ${media} | Resultado final: reprovado`);
    }
}

calcularMediaDasNotas();