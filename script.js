function tocar(nota){
    arquivo = nota + '.wav';
    audio = new Audio(`audios/${arquivo}`);
    audio.play();
}

function parar(){
    audio.pause()
}


