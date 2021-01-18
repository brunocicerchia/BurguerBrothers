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

var metodoPago = "Efectivo"

function mercadoPago() {
    metodoPago = "Mercado Pago"
}

function efectivo() {
    metodoPago = "Efectivo"
}

function enviarPedido() {

    var mensajeFinal;

    //Obtener nombre usuario

    var nombre = document.getElementById('nombre').value;
    mensajeFinal = "Nombre: " + nombre + "\n"

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
    var stoneMensaje = "Stone Burger(" + stone + ") \n"
    var kissMensaje = "Kiss Burger(" + kiss + ") \n"
    var queenMensaje = "Queen Burger(" + queen + ") \n"
    var pinkMensaje = "Pink Floyd Burger(" + pink + ") \n"
    var nirvanaMensaje = "Nirvana Burger(" + nirvana + ") \n"
    var chiliMensaje = "Chili Peppers Burger(" + chili + ") \n"
    var elvisMensaje = "Elvis Burger(" + elvis + ") \n"
    var beatleMensaje = "Beatle Burger(" + beatle + ") \n"
    var crispyMensaje = "Crispys Pollo Frito(" + crispy + ") \n"
    var cheddarMensaje = "Papas Cheddar(" + cheddar + ") \n"
    var picadaMensaje = "Picada para dos(" + picada + ") \n"
    var muzaMensaje = "Bastones de muzzarella(" + muza + ") \n"
    var cocaMensaje = "Coca Cola 1.5L(" + coca + ") \n"
    var spriteMensaje = "Sprite(" + sprite + ") \n"
    var arteMensaje = "Cerveza artesanal(" + arte + ") \n"

    //Se busca que productos se pidio
    var pedidoFinal = "";

    if(stone != 0) {
        pedidoFinal = pedidoFinal +  stoneMensaje        
    }
    if(kiss != 0) {
        pedidoFinal = pedidoFinal +  kissMensaje
    }
    if(queen != 0) {
        pedidoFinal = pedidoFinal +  queenMensaje
    }
    if(pink != 0) {
        pedidoFinal = pedidoFinal +  pinkMensaje
    }
    if(nirvana != 0) {
        pedidoFinal = pedidoFinal +  nirvanaMensaje
    }
    if(chili != 0) {
        pedidoFinal = pedidoFinal +  chiliMensaje
    }
    if(elvis != 0) {
        pedidoFinal = pedidoFinal +  elvisMensaje
    }
    if(beatle != 0) {
        pedidoFinal = pedidoFinal +  beatleMensaje
    }
    if(crispy != 0) {
        pedidoFinal = pedidoFinal +  crispyMensaje
    }
    if(cheddar != 0) {
        pedidoFinal = pedidoFinal +  cheddarMensaje
    }
    if(picada != 0) {
        pedidoFinal = pedidoFinal +  picadaMensaje
    }
    if(muza != 0) {
        pedidoFinal = pedidoFinal +  muzaMensaje
    }
    if(coca != 0) {
        pedidoFinal = pedidoFinal +  cocaMensaje
    }
    if(sprite != 0) {
        pedidoFinal = pedidoFinal +  spriteMensaje
    }
    if(arte != 0) {
        pedidoFinal = pedidoFinal +  arteMensaje
    }

    mensajeFinal = mensajeFinal + "Pedido:\n" + pedidoFinal

    //Obtener direccion
    var direccion = document.getElementById('direccion').value;
    mensajeFinal = mensajeFinal + "Direccion:\n" + direccion + "\n"

    //obtener metodo de pago
    mensajeFinal = mensajeFinal + "Metodo de pago:\n" + metodoPago

    console.log(mensajeFinal)

    //Creacion URL Whatsapp
    var mensajeEncoded = encodeURIComponent(mensajeFinal)
    var urlFinal = "https://api.whatsapp.com/send?phone=5493489694795&text=" + mensajeEncoded
    window.open(urlFinal)
}