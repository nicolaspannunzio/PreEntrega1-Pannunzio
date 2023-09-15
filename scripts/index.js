//? SIMULADOR INTERACTIVO - 1° pre-entrega JS

/* Inicio del Simulador. Saludo de bienvenida
Comprobando si el usuario está registrado o no.
Se pregunta al usuario si desea realizar una compra. 
Caso afirmativo, procedemos y preguntamos qué tipo de compra. Por último el articulo que desea llevar. 
.. de lo contrario, fin del programa.
En base a las preferencias que nos dio el usuario, le vamos a hacer tres últimas peticiones:
1° conocer la cantidad de artículos que desea llevar,
2° preguntarle, si prefiere un envio a domicilio o retira en nuestros locales,
3° por último, conocer el medio pago de su preferencia.
Aclaración:
Los console.log a lo largo del código están puestos con el objetivo de ver un resumen del simulador. */

alert("¡Bienvenidxs a nuestra tienda de mascotas, M&T!");

let usuario = prompt("Hola! ¿Tienes un usuario registrado?");
let nuevoUsuario = "";

if (usuario.toLowerCase() === "si") {
    console.log("Ok. El usuario está registrado");
    let compra = prompt("¿Te gustaría realizar una compra en nuestra tienda M&T? (si / no)");
    reIntentoDeCompra(compra);

} else if (usuario.toLowerCase() === "no") {
    registrase ();
}

function registrase (){
    let registrarte = prompt("Ok, ¿quieres registrarte?");

    if (registrarte.toLowerCase() === "si") {  
        
        nuevoUsuario = prompt("Por favor, elige tu nombre de usuario. Debe tener al menos 8 caracteres");
        //? alert("Tu nuevo usuario, está registrado como " + nuevoUsuario);

        if (nuevoUsuario.length >= 8) {
            alert("Tu usuario ha sido registrado exitosamente como: " + nuevoUsuario);
            console.log("Registro de nuevo usuario: " + nuevoUsuario);
            let compra = prompt("¿Te gustaría realizar una compra en nuestra tienda M&T? (si / no)");
            reIntentoDeCompra (compra);

        } else {
            alert("El nombre de usuario debe tener al menos 8 caracteres. Inténtalo de nuevo");
            console.log("Registro de usuario incorrecto: " + nuevoUsuario);
            registrase ();
        }

    } else {
        alert("Entendido, no te registrarás por ahora. ¡Que tengas un excelente día!");
        console.log("El usuario, no desea registrarse por el momento.");
    }
}

function reIntentoDeCompra (compra){
if (compra.toLowerCase() === "si"){
    alert("Excelente! Empecemos eligiendo el / los producto /s que necesites");
    
    let tipoDeCompra;

    for (let intentos = 3; intentos > 0; intentos--) {
        tipoDeCompra = prompt("¿Qué tipo de compra quisieras realizar: perros, gatos o nuevos productos?").toLowerCase();

    switch (tipoDeCompra){
        case "perros":
            alert("Ok, tu compra será de perros");
            intentos = 0;

            let accesorioP = prompt("¿Necesitas un collar o una cucha, para tu perro?");
        
            if (accesorioP === "collar") {
                 alert("Has elegido un collar.");
                 comprar();
                 console.log("El tipo de compra es Perros, y el accesorio seleccionado, es collar.");
            } else if (accesorioP === "cucha") {
                 alert("Has elegido una cucha.");
                 comprar();
                 console.log("El tipo de compra es Perros, y el accesorio seleccionado, es una cucha.");
            } else {
            alert("Opción inválida para accesorios.");
            reIntentoDeCompra (compra);
            }
            break;
            
        case "gatos":
            alert("Ok, tu compra será de gatos");
            intentos = 0;

            let accesorioG = prompt("¿Necesitas piedritas sanitarias o shampoo, para tu gato?");
        
            if (accesorioG === "piedritas sanitarias") {
                 alert("Has elegido piedritas sanitarias.");
                 comprar();
                 console.log("El tipo de compra es Gatos, y el accesorio seleccionado, es piedritas sanitarias.");
            } else if (accesorioG === "shampoo") {
                 alert("Has elegido un shampoo.");
                 comprar();
                 console.log("El tipo de compra es Gatos, y el accesorio seleccionado, es un shampoo.");
            } else {
            alert("Opción inválida para accesorios.");
            reIntentoDeCompra (compra);
            }
            break;

        case "nuevos productos":
            alert("Ok, tu compra será de nuevos productos");
            intentos = 0;

            let accesorioNP = prompt("¿Necesitas balanceado para perros, balanceados para gatos o juguetes?");
        
            if (accesorioNP === "balanceado para perros") {
                 alert("Has elegido balanceado para perros.");
                 comprar();
                 console.log("El tipo de compra es nuevos productos, y el accesorio seleccionado, es balanceado para perros.");
            } else if (accesorioNP === "balanceados para gatos") {
                 alert("Has elegido un balanceados para gatos.");
                 comprar();
                 console.log("El tipo de compra es nuevos productos, y el accesorio seleccionado, es balanceado para gatos.");
            } else if (accesorioNP === "juguetes") {
                alert("Has elegido juguetes.");
                comprar();
                console.log("El tipo de compra es nuevos productos, y el accesorio seleccionado, es juguetes.");
            } else {
            alert("Opción inválida para accesorios.");
            reIntentoDeCompra (compra);
            }
            break;

        default:
            alert("Compra inválida. Vuelve a intentarlo");
            reIntentoDeCompra (compra);
            break;
        }
    } 

} else if (compra.toLowerCase() === "no"){
    alert("De acuerdo, te esperamos en tu próxima visita.");

} else if (compra === ""){
    prompt("Inténtalo de nuevo. Dinos por favor: si o no");
    while (compra.toLowerCase() !== "si" && compra.toLowerCase() !== "no"){
        alert("Tu respuesta no es válida");
        compra = prompt("Repite tu respuesta, si o no");
    } if (compra === "si"){
        reIntentoDeCompra();
    }
} 
/* compra = prompt("¿Te gustaría realizar otra en nuestra tienda M&T? (si / no)");

    if (compra === "si") {
    reIntentoDeCompra ()
    } else {
    alert("De acuerdo, te esperamos en tu próxima visita.");
} */
}
// reIntentoDeCompra ();

function comprar(){

let numDeArticulos = +prompt("Cuantos artículos deseas llevar? Puedes elegir entre 1 y 5 unidades por compra");

if (numDeArticulos < 6 && numDeArticulos !== 0) {
    alert("Has comprado " + numDeArticulos + " artículos. Gracias por tu compra.!");
    console.log("Has comprado " + numDeArticulos + " artículos. Gracias!");
} else {
    alert("Operación inválida, vuelve a intentarlo.");
    comprar ();
    console.log("Operación inválida, vuelve a intentarlo.");
}

let retiroOenvio = prompt("Por favor, indicanos la preferencia para entregarte tu compra: Local / Envio");

while (retiroOenvio.toLowerCase() !== "local" && retiroOenvio.toLowerCase() !== "envio"){
    alert("Tu respuesta no es válida");
    retiroOenvio = prompt("Por favor, reiterá tu respuesta: Local o Envio");
    console.log("Ok, tu elección es: " + retiroOenvio);
}

//? let formaDePago = prompt("¿Cómo quisieras abonar tu compra? Puedes elegir entre: efectivo o tarjeta de crédito");

let tipoDePago;

for (let i = 3; i > 0; i--) {
    tipoDePago = prompt("¿Cómo quisieras abonar tu compra? Puedes elegir entre: efectivo o tarjeta de credito").toLowerCase();
    
    switch (tipoDePago.toLowerCase()){
    case "efectivo":
        alert("Tu medio de pago elegido es: efectivo");
        console.log("Tu medio de pago elegido es efectivo");
        i = 0;
        break;
    case "tarjeta de credito":
        alert("Tu medio de pago elegido es: tarjeta de credito");
        console.log("Tu medio de pago elegido es con tarjeta de credito");
        i = 0;
        break;
    default:
        alert("Ingresa nuevamente, tu medio de pago elegido");
        break;
    }
}

    alert("¡¡Muchas gracias por elegir nuestra tienda M&T, esperamos volver a verte pronto!!");
}