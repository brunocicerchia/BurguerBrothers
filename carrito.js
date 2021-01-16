var stone = 0
var kiss = 0
var queen = 0
var pink = 0
var nirvana = 0
var chili = 0
var elvis = 0
var beatle = 0
var crispy = 0
var cheddar = 0
var picada = 0
var muza = 0
var coca = 0
var sprite = 0
var arte = 0

function stoneRange(val) {
    document.getElementById('stoneInput').value=val;
}

function kissRange(val) {
    document.getElementById('kissInput').value=val;
}

function queenRange(val) {
    document.getElementById('queenInput').value=val;
}

function pinkRange(val) {
    document.getElementById('pinkInput').value=val;
}

function nirvanaRange(val) {
    document.getElementById('nirvanaInput').value=val;
}

function chiliRange(val) {
    document.getElementById('chiliInput').value=val;
}

function elvisRange(val) {
    document.getElementById('elvisInput').value=val;
}

function beatleRange(val) {
    document.getElementById('beatleInput').value=val;
}

function crispyRange(val) {
    document.getElementById('crispyInput').value=val;
}

function cheddarRange(val) {
    document.getElementById('cheddarInput').value=val;
}

function picadaRange(val) {
    document.getElementById('picadaInput').value=val;
}

function muzaRange(val) {
    document.getElementById('muzaInput').value=val;
}

function cocaRange(val) {
    document.getElementById('cocaInput').value=val;
}

function spriteRange(val) {
    document.getElementById('spriteInput').value=val;
}

function arteRange(val) {
    document.getElementById('arteInput').value=val;
}

function enviarPedido() {

    //Numero productos
    var stone = document.getElementById('stoneInput').value;
    var kiss = document.getElementById('kissInput').value;
    var queen = document.getElementById('queenInput').value;
    var pink = document.getElementById('pinkInput').value;
    var nirvana = document.getElementById('nirvanaInput').value;
    var chili = document.getElementById('chiliInput').value;
    var elvis = document.getElementById('elvisInput').value;
    var beatle = document.getElementById('beatleInput').value;
    var crispy = document.getElementById('crispyInput').value;
    var cheddar = document.getElementById('cheddarInput').value;
    var picada = document.getElementById('picadaInput').value;
    var muza = document.getElementById('muzaInput').value;
    var coca = document.getElementById('cocaInput').value;
    var sprite = document.getElementById('spriteInput').value;
    var arte = document.getElementById('arteInput').value;

    //Mensaje de cada producto
    var stoneMensaje = "Stone Burger(" + stone + ")"
    var kissMensaje = "Kiss Burger(" + kiss + ")"
    var queenMensaje = "Queen Burger(" + queen + ")"
    var pinkMensaje = "Pink Floyd Burger(" + pink + ")"
    var nirvanaMensaje = "Nirvana Burger(" + nirvana + ")"
    var chiliMensaje = "Chili Peppers Burger(" + chili + ")"
    var elvisMensaje = "Elvis Burger(" + elvis + ")"
    var beatleMensaje = "Beatle Burger(" + beatle + ")"
    var crispyMensaje = "Crispys Pollo Frito(" + crispy + ")"
    var cheddarMensaje = "Papas Cheddar(" + cheddar + ")"
    var picadaMensaje = "Picada para dos(" + picada + ")"
    var muzaMensaje = "Bastones de muzzarella(" + muza + ")"
    var cocaMensaje = "Coca Cola 1.5L(" + coca + ")"
    var spriteMensaje = "Sprite(" + sprite + ")"
    var arteMensaje = "Cerveza artesanal(" + arte + ")"

    var mensaje;

    var pedidoFinal = ""

    if(stone != 0) {
        pedidoFinal + stoneMensaje
    }
    if(kiss != 0) {
        pedidoFinal + kissMensaje
    }

    console.log(pedidoFinal)
}