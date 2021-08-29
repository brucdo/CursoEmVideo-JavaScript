function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = 22
    var hora = data.getHours()
    //msg.innerHTML = 'Agora são ${hora} horas' => O guana usou assim no exemplo
    msg.innerHTML = "Agora são "+hora+" horas"
    if(hora>=0 && hora<12){
        img.src = 'imagens/manha-round.png'
        document.body.style.background = '#abc7ab'
    }else if(hora>=12 && hora<18){
        img.src = 'imagens/tarde-round.png'
        document.body.style.background = '#ffa854'
    }else{
        img.src = 'imagens/noite-round.png'
        document.body.style.background = '#15133b'
    }
}


