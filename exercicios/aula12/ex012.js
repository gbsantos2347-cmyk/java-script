var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) { 
    console.log('tenha um bom dia !')

 } else if (hora <= 18) {
    console.log('Tenha uma boa tarde')
 
 } else if (hora <= 23) {
    console.log('Boa noite')
 } 