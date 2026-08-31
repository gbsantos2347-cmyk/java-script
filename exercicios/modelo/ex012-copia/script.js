
function carregar(){
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
foto.src = 'dia.png'
document.body.style.background = '#815b09'
} else if (hora >= 12 && hora < 18) {
  foto.src = 'tarde.png'
document.body.style.background = '#5c3a06'
} else if (hora >= 18 && hora < 24) {
  foto.src = 'noite.png'
document.body.style.background = '#000000'
}


}