const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const telefono = document.querySelector("#telefono")
const imputvalida = document.querySelector("#imputvalida")




capturarEvento();

function capturarEvento() {
    nombre.addEventListener("blur", eventBlur);
    email.addEventListener("blur", eventBlur);
    telefono.addEventListener("blur", eventBlur);


    inputvalida.forEach(a => {

        a.addEventListener("blur", eventBlur);
        a.addEventListener("keypress", eventkey);
    });

    foormulario.addEventListener("submit", enviarformulario);

}

if (document.getElementById('email').value.length < 2) {
    todo_correcto = false;
}


var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var email = document.form1.email.value;


nombre = document.formu.nombre.value;
patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
compNombre = patronNombre.test(nombre);
correcto(compNombre);
escribir.innerHTML += "Nombre : " + respuesta + "<br/>";

function correcto(valor) { // dar respuesta
    if (valor == true) { respuesta = si } else { respuesta = no }
    return respuesta;
}

function comprobar() {
    escribir.innerHTML = "Comprobación de datos: <br/> "
        //comprobar nombre
    nombre = document.formu.nombre.value;
    patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    compNombre = patronNombre.test(nombre);
    correcto(compNombre);
    escribir.innerHTML += "Nombre : " + respuesta + "<br/>";
    //comprobar teléfono
    telefono = document.formu.tel.value;
    patronTel = /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    compTel = patronTel.test(telefono);
    correcto(compTel);
    escribir.innerHTML += "Teléfono: " + respuesta + "<br/>";
    //comprobar correo
    correo = document.formu.email.value;
    patronEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
    compEmail = patronEmail.test(correo);
    correcto(compEmail);
    escribir.innerHTML += "E-mail : " + respuesta + "<br/>";
    // comprobar página web
    pagina = document.formu.web.value;
    patronPag = /^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/;
    compPag = patronPag.test(pagina);
    correcto(compPag);
    escribir.innerHTML += "Página Web: " + respuesta + "<br/>";
}