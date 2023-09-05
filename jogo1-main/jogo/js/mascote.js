//posições do mascote

let xMascote = 70;
let yMascote = 340;
let meusPontos = 0;
let colisao = false;


function verificaColisao() {
    for (let i = 0; i < imagensCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xMascote, yMascote, 5);

        if (colisao) {

            yMascote = 340;
            xMascote = 70;

            if (meusPontos > 0) {
                meusPontos -= 1;

            }

        }
        print('colisao acontecendo', colisao);

    }
}

function movimentoMascote() {
    if (keyIsDown(UP_ARROW)) {
        yMascote -= 6;

    }
    if (keyIsDown(DOWN_ARROW)) {
        yMascote += 6;

    }

    if (keyIsDown(RIGHT_ARROW)) {
        xMascote += 6;

    }

    if (keyIsDown(LEFT_ARROW)) {
        xMascote -= 6;

    }
}
function voltarPontoInicial() {

    yMascote = 340;
}

function mostrarMascote() {
    image(imagemDoMascote, xMascote, yMascote,
        40, 40);


}

function incluirPontos() {
    text(meusPontos, 20, 25)
    fill(color(255, 0, 0))
    textSize(21)

    if (yMascote < 20) {
        meusPontos++;
        yMascote = 340;

    }
}