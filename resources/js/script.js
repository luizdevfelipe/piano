function tocar(nota) {
    audio = new Audio(`audios/${nota}.wav`);
    audio.play();
}

const notas_aceitas = ['a2', 'a2p', 'a3', 'a3p', 'a4', 'a4p', 'a5', 'a5p', 'аб', 'абр', 'b2', 'b3', 'b4', 'b5', 'b6', 'c2', 'c2p', 'c3', 'c3p', 'c4', 'c4p', 'c5', 'c5p', 'сб', 'сбр', 'c7', 'd2', 'd2p', 'd3', 'd3p', 'd4', 'd4p', 'd5', 'd5p', 'd6', 'd6p', 'e2', 'e3', 'e4', 'e5', 'f2', 'f2p', 'f3', 'f3p', 'f4', 'f4p', 'f5', 'f5p', 'f6', 'f6p', 'g2', 'g2p', 'g3', 'g3p', 'g4', 'g4p', 'g5', 'g5p', 'g6', 'g6p']

async function tocar_musica(musica) {

    for (let i = 0; i < musica.length; i++) {
        if (notas_aceitas.indexOf(musica[i]) === -1) {
            continue;
        }

        const tecla = document.querySelector(`[data-nota=${musica[i]}]`)
        const classes = tecla.parentNode.classList;
        var background = null;

        classes == 'brancas' ? background = '#bebebe' : tecla.style.boxShadow = '0px 0px 7px 1px black';

        if (background !== null) { tecla.style.background = background; }

        tocar(musica[i]);

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
        alert('Aguarde a música ser gerada!')

        fetch(`/${prompt}`, { 'method': 'POST' })
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                } else if (response.status === 404) {
                    alert('Digite um prompt válido!')
                } else {
                    alert('Erro na resposta da API do Gemini')
                }
            })
            .then(function (data) {
                const match = data.song.match(/\[[\s\S]+\]/);

                if (!match) {
                    alert('A música não foi gerada corretamente!\nTente Novamente.')
                    return
                }
                const valuesArray = match[0].split(',').map(item => item.trim().replace(/\n/g, '').replace(/['"]/g, ''));

                tocar_musica(valuesArray);  
            })
    })

})
