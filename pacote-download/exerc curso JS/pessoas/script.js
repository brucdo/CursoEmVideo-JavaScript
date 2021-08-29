function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    //res.innerHTML = "${ano}"
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    //var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = 'Nascido em '+ ano +' - Idade Calculada: '+ idade +'.'
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'feminino'
            if(idade>=0 && idade <18){
                //crianca
                img.setAttribute('src','imagens/menina.jpg')
            }else if(idade<60){
                img.setAttribute('src','imagens/mulher.jpg')
                //adulto
            }else{
                //idoso
                img.setAttribute('src','imagens/senhora.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'masculino'
            if(idade>=0 && idade <18){
                //crianca
                img.setAttribute('src','imagens/menino.jpg')
            }else if(idade<60){
                img.setAttribute('src','imagens/homem.jpg')
                //adulto
            }else{
                //idoso
                img.setAttribute('src','imagens/senhor.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = 'Pessoa do gênero '+genero+' com '+idade+' anos.'
        res.appendChild(img)
    }
    
}
