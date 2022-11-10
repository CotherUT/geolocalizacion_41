//Evento que carga el inicio de la pagina html
window.addEventListener("load", comenzar, false);

//Crear la funcion comenzar que es la que sera llamada por el evento addEventListener cuando se haga click en el boton
function comenzar() {
    //Se declara una variable que va a detectar el clic del boton
    var miboton = document.getElementById("btnUbicacion");
    miboton.addEventListener("click", obtener, false);
}

//Con esta funcion se va a implementar el evento de HTML GetCurrentPossition
function obtener() {
    navigator.geolocation.getCurrentPosition(mostrar_posicion, errores);
}

function errores(error) {
    alert("Ocurrio un error :( " + error.code + " " + error.message);
    if (error.code == 1) {
        alert("Error, debes permitir la geolocalizacion en tu navegador");
    }
    if (error.code == 2) {
        alert("Error, ubicacion no disponible. Revisa tu coneccion a internet");
    }
    if (error.code == 3) {
        alert("Error, tiempo de espera exedido. Revisa tu coneccion a internet");
    }
}

function mostrar_posicion(posicion) {
    var ubicacion = document.getElementById("ubicacion");
    var ubicacion_real = "";
    ubicacion_real += "Latitud: " + posicion.coords.latitude + "<br>";
    ubicacion_real += "Longitud: " + posicion.coords.longitude + "<br>";
    ubicacion_real += "Exactitud: " + posicion.coords.accuracy;
    ubicacion.innerHTML = ubicacion_real;
}