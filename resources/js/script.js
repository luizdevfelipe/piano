const notas = ['c4']

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

        await new Promise(resolve => setTimeout(resolve, 330));

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

    document.querySelector('.submit-prompt').addEventListener('click', function (event) {
        const prompt = document.querySelector('.text-prompt').value

        fetch(`/${prompt}`, { 'method': 'POST' })
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
        })
        .then(function (data) {
            console.log(data.song)
        })
    })

})
