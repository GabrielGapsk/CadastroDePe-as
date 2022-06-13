let pesoGramas = 50;
let listaDePeças = 9;
let nomeDaPeça = "bateria";

if(pesoGramas >= 100) {
    console.log("Peso Aceito");
}else {
    console.log("Peso Insuficiente");
}

if(listaDePeças >= 10) {
    console.log("Não há espaço na caixa, Rejeitado");
}

if(nomeDaPeça.length < 3 ) {
    console.log("Não possui os caracteres necessarios, minimo 3" );
}
