/* Saludo de bienvenida */

//alert("¡Bienvenidxs a nuestra tienda de mascotas, M&T!");

/* Inicio del Simulador. Comprobando si el usuario está registrado o no. */

let usuario = prompt("Hola! ¿Tenes un usuario registrado?");
let nuevoUsuario = "";

if (usuario === "si" || usuario === "Si"){
    console.log("Ok!");
} else if (usuario === "no" || usuario === "No"){
    prompt("Ok, queres registrarte?");
} else if (nuevoUsuario === "si" || nuevoUsuario === "Si"){
    nuevoUsuario = prompt("Por favor, elegí tu nombre de usuario. El mismo debe tener al menos 8 caracteres");
} else {
    alert("intentalo de nuevo");
}