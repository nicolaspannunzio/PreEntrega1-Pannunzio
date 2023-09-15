// Segunda Pre-entrega - JS
//? Estructura, variables y objetos 
// Simulador I: //? "Carrito de Compras"

const productos = [
    { nombre: "correa extensible",      precio : 1300  },
    { nombre: "hueso de goma",          precio : 920   },
    { nombre: "comedero",               precio : 1150  },
    { nombre: "collar",                 precio : 600   },
    { nombre: "piedras sanitarias",     precio : 450   },
    { nombre: "rodillo adhesivo",       precio : 1890  },
    { nombre: "alimento seco",          precio : 8850  },
    { nombre: "cucha",                  precio : 6740  },
    { nombre: "pipeta",                 precio : 2810  },
    { nombre: "bolso transportador",    precio : 18550 }
]

let carritoDeCompras = [];

let seleccion = prompt("Bienvenidxs! Deseas comprar algún producto en nuestra tienda M&T? si / no");
console.log("El usuario respondió " + seleccion);

while (seleccion !== "si" && seleccion !== "no"){
    alert("Por favor, ingresá una respuesta válida: si / no");
    seleccion = prompt("Deseas comprar algún producto en nuestra tienda M&T? si / no");
    console.log("La nueva respuesta del usuario es " + seleccion);
}

if (seleccion === "si"){
    alert("Excelente! Esta es nuestra lista de productos:");
    let todosMisProductos = productos.map((producto) => producto.nombre + " " + "$ " + producto.precio);
    alert(todosMisProductos.join(" - "));
    console.log(todosMisProductos.join(" - "));
} else if (seleccion === "no"){
    alert("Te esperamos en tu próxima visita. ¡Que tengas un buen día!");
    console.log("El usuario, decidió no comprar ningún producto.");
}

while (seleccion !== "no"){
    let producto = prompt("Agregá un producto a tu carrito");
    console.log("El nuevo producto agredado es " + producto);
    let precio = 0;

    if (producto == "correa extensible" || producto == "hueso de goma" || producto == "comedero" || producto == "collar" || producto == "piedras sanitarias" || producto == "rodillo adhesivo" || producto == "alimento seco"|| producto == "cucha" || producto == "pipeta" || producto == "bolso transportador"){
        switch(producto){
            case "correa extensible":
                precio = 1300
                break;
            case "hueso de goma":
                precio = 920
                break;
            case "comedero":
                precio = 1150
                break;
            case "collar":
                precio = 600
                break;
            case "piedras sanitarias":
                precio = 450
                break;
            case "rodillo adhesivo":
                precio = 1890
                break;
            case "alimento seco":
                precio = 8850
                break;
            case "cucha":
                precio = 6740
                break;
            case "pipeta":
                precio = 2810
                break;
            case "bolso transportador":
                precio = 38550
                break;
            default:
                break;         
        }

    let unidades = +(prompt("Cuantas unidades del " + producto + " quieres llevar?"));
    console.log("El usuario ha elegido " + producto + " y llevará " + unidades + " unidades");

    carritoDeCompras.push({producto, unidades, precio});
    console.log(carritoDeCompras);
    } else {
        alert("El producto ingresado, no es válido");
        console.log("El producto ingresado, no es válido");
    }

    seleccion = prompt("Querés agregar un nuevo producto? si / no");

    while(seleccion === "no"){
        alert("¡Gracias por tu compra!");
        carritoDeCompras.forEach((carritoFinal) => {
            console.log(`producto elegido: ${carritoFinal.producto} - unidades: ${carritoFinal.unidades} - El total a pagar por producto es ${carritoFinal.unidades * carritoFinal.precio}`);
        })
    break;
    }
}

const total = carritoDeCompras.reduce((acc, i) => acc + i.precio * i.unidades, 0);
alert(`El total a pagar por tu compra es $ ${total}`);
console.log(`El total a pagar por tu compra es $ ${total}`);