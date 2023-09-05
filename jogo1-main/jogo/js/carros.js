
//posições dos carros
// let xCarro1 = 599;
// let xCarro2 = 399;
// let xCarro3 = 299;
let xCarros = [599, 599, 599, 599, 599, 599]
let comprimentoCarros = 40;
let alturaCarros = 30;
let yCarros = [50, 100, 155, 214, 267, 315]
let velocidadeCarros = [4, 6.5, 7.6, 8, 3.8, 5.6]


function movimentoCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {

        xCarros[i] -= velocidadeCarros[i];
        if (xCarros[i] < -50) {
            xCarros[i] = 700

        }

    }

}

function mostrarCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {

        image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);


    }

}