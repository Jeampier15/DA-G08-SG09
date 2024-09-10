

document.getElementById("botonMensaje").addEventListener("click", function() {
    document.getElementById("mensaje").innerText = "¡El mensaje ha sido cambiado!";
});


document.getElementById("botonSaludo").addEventListener("click", function() {
    var nombre = document.getElementById("nombreInput").value;
    if (nombre) {
        document.getElementById("saludo").innerText = "Hola, " + nombre + "!";
    } else {
        document.getElementById("saludo").innerText = "Por favor, ingresa tu nombre.";
    }
});
