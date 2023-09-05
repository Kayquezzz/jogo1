
//na função setup definimos as configurações de altura e largura

function setup() {

    createCanvas(700, 400);


}

//na função de desenho definimos o que será exibido
function draw() {

    background(imagemDaEstrada);
    //o image permite manipular o objeto, eixo x e eixo y 
    movimentoCarros();
    movimentoMascote();
    mostrarCarros();
    mostrarMascote();
    incluirPontos();
    verificaColisao();

}






