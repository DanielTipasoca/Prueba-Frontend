/********************* Variables   ***********************/

const carrito = document.querySelector("#carrito");
const cursos = document.querySelector("#lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");
const carritoVacio = document.querySelector("#vaciar-carrito");

/******************** Escuchar eventos  *******************/

capturarEventos();

function capturarEventos() {
    cursos.addEventListener("click", comprarCursos);
    //Implementar esta función
    // carrito.addEventListener('click', eliminarCurso);
    console.log(e.target.parentNode.parentNode);
    let a = document.removeChild("a");
    carrito.addEventListener("click", borrarcurso);
    tr.removeChild(a);
    // a permitir borrar el curso
    a.className.removeChild = "borrar-curso";
    //Le colocamos una x al boton
    a.innerText = "X";

    //Implementar esta función

    //carritoVacio.addEventListener('click', vaciarCarrito);

    carritoVacio.addEventListener("click", vaciarCarrito);
}

/***************Funciones*****************************/

function comprarCursos(e) {
    e.preventDefault();
    //Estoy escuchando toda la lista de carritos pero
    //lo que necesito es  preguntar si hicieron clic en
    //el botón agregar carrito
    if (e.target.classList.contains("agregar-carrito")) {
        console.log("va a comprar");
        //Quiero saber cual es el padre del carrito
        console.log(e.target.parentNode.parentNode);
        //Esto es para saber cuáles son los datos del curso
        let curso = e.target.parentNode.parentNode;
        //Función para leer los datos del curso
        leerDatosCurso(curso);
    }
}

//Función para leer datos del curso

function leerDatosCurso(curso) {
    console.log(curso);
    //Se crea una clase  para leer la
    //información del curso esta información
    //es la misma que se va a isnertar en la parte superior
    class Curso {
        constructor(imagen, titulo, precio) {
            this.imagen = imagen;
            this.titulo = titulo;
            this.precio = precio;
        }
    }
    // Creamos el objeto curso con los datos
    //que obtuvimos del curso
    let miCurso = new Curso(
        curso.querySelector("img").src,
        curso.querySelector("h4").innerText,
        curso.querySelector("span").innerText
    );

    console.log(miCurso);
    insertarCarrito(miCurso);
}

//Funcion apra insertar en el html

function insertarCarrito(curso) {
    //Cramos una fila
    let tr = document.createElement("tr");
    //Creamos el enlace para la opción de eliminar curso
    let a = document.createElement("a");
    // Esta variable nos va a servir para crear todas las
    //columnas
    let td = document.createElement("td");
    //Varaible para crear la imagen
    let imagen = document.createElement("img");
    //Asignamos a la etiqueta imagen la propiedad imagen de curso
    imagen.setAttribute("src", curso.imagen);
    //Asignamos a la etiqueta imagen un ancho de 100
    imagen.setAttribute("width", "100");
    console.log(imagen);
    //Adicionamos a la columna la iamgen
    td.appendChild(imagen);
    //Adicionamos a la fila la columna que acabamos de crear
    tr.appendChild(td);
    console.log(td);
    //Utilizamos la misma variable para crear la siguiente columna
    td = document.createElement("td");
    // Dentro de la columna colocamos lo que tiene el objeto curso en
    // su propiedad titulo
    td.innerText = curso.titulo;
    console.log(td);
    //Agregamos la columna a la fial
    tr.appendChild(td);
    //Creamos la columna para el precio
    td = document.createElement("td");
    // Le agregamos la propiedad precios del curso
    td.innerText = curso.precio;
    console.log(td);
    //Agregamos la columna a la fila
    tr.appendChild(td);
    //Creamos una neuva coñlumna para el boton x
    td = document.createElement("td");
    //Le asignamos el atributo href
    a.setAttribute("href", "#");
    //Le asignamos la calse borrar-curso que es la que nos va
    // a permitir borrar el curso
    a.className = "borrar-curso";
    //Le colocamos una x al boton
    a.innerText = "X";
    //Agregamos la etiqueta a la columna
    td.appendChild(a);
    //Agregamos la columna a la fila
    tr.appendChild(td);
    console.log(tr);
    //Finalmente agregamos  la fila a la lista del carrito
    listaCursos.appendChild(tr);
}
//Elimina el curso del carrito en el DOM

//Elimina todo lo del carrito