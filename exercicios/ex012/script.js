
function carregar(){
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 18) {
foto.src = 'Dia.png'
document.body.style.background = '#d6ab4e'
} else if (hora >= 12 && hora <= 18) {
  foto.src = 'imagem_2.png'
document.body.style.background = '#494443'
} else {
  foto.src = 'imagem_1.png'
document.body.style.background = '#000000'
}


}