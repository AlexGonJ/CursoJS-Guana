function carregar(){
   var msg= window.document.getElementById ('msg')
var img = window.document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()

if (hora >= 0 && hora < 12) {
msg.innerHTML = `<strong> BOM DIA! </strong> 
<p> Agora são ${hora} horas`
    img.src = 'fotomanha.png'
    document.body.style.background = '#b9846f'
}else if (hora >=12 && hora <= 18) {
    msg.innerHTML =  `<strong> BOA TARDE! </strong>
    <p> Agora são ${hora} horas.`
    img.src = 'fototarde.png'
    document.body.style.background = '#e2cd9f'
} else {
   msg.innerHTML = `<strong> BOA NOITE!</strong>
   <p> Agora são ${hora} horas.`
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
}

