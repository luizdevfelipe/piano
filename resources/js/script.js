const notas = [ 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5', 'e4', 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5', 'e4', 'e5', 'd5p', 'e5', 'd5p', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'g4p', 'b4', 'c5' ]
const tempos = [ 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250 ]

function tocar(nota) {
    audio = new Audio(`audios/${nota}.wav`);
    audio.play();
}

async function tocar_musica() {

    for (let i = 0; i < notas.length; i++) {
        const tecla = document.querySelector(`[data-nota=${notas[i]}]`)
        const classes = tecla.parentNode.classList;
        var background = null;

        classes == 'brancas' ? background = '#bebebe' : tecla.style.boxShadow = '0px 0px 7px 1px black';

        if (background !== null) { tecla.style.background = background; }

        tocar(notas[i]);

        await new Promise(resolve => setTimeout(resolve, tempos[i]));

        background !== null ? tecla.style.background = '' : tecla.style.boxShadow = '';
    }
}


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('ul.pretas').addEventListener('click', function (event) {
        if (nota = event.target.closest('li').getAttribute('data-nota')) tocar(nota)
    })

    document.querySelector('ul.brancas').addEventListener('click', function (event) {
        if (nota = event.target.closest('li').getAttribute('data-nota')) tocar(nota)
    })

})
