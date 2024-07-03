let numeroSecreto = 0;
// let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // Imprime en consola el número secreto y el resultado de la comparación estricta
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario === numeroSecreto); // === strict quality / == abstract quality

    /* 
        En JavaScript, el operador === se llama "strict equality" o igualdad estricta, y compara tanto el valor como el tipo de los
        operandos. Esto significa que ambos valores deben ser del mismo tipo y tener el mismo valor para que la comparación sea 
        verdadera.

        Por otro lado, el operador == se llama "abstract equality" o igualdad abstracta, y compara los valores de los operandos 
        después de convertirlos a un tipo común si es necesario. Esto significa que si los valores son de tipos diferentes, 
        JavaScript intentará convertir uno o ambos valores a un tipo común antes de hacer la comparación.
    */
    
        // console.log(intentos); // número de intentos
    
    if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        // intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya se sortearon todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
            // Si el número generado está en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); // Recursividad de la función
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Volver a las condiciones inciales
    condicionesIniciales();
    // Deshabilitar nuevamente el botón
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
