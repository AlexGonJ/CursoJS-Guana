function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked){
        gênero = 'Homem'
          if (idade>=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'criancamasc.png')
          } else if (idade < 50 ) {
            //Adulto
            img.setAttribute('src', 'adultomasc.png' )
          } else{
            //Idoso
            img.setAttribute('src', 'idosomasc.png')
          }
     } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade>=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'criancafem.png')
          } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'adultofem.png')
          } else{
            //Idoso
            img.setAttribute('src', 'idosofem.png')
          }
     }
     res.style.textAlign = 'center'   
     res.innerHTML = `Detectado ${gênero} e ${idade} anos`
     res.appendChild(img)
    }
    }