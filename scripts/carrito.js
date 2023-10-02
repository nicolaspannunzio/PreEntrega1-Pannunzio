// Segunda Pre-entrega - JS
//? Estructura, variables y objetos 
// Simulador II: //? "Carrito de Compras II"

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
    { nombre: "bolso transportador",    precio : 11570 }
]

let carritoDeCompras = [];

function mostrarProductos() {
    alert("Esta es nuestra lista de productos:\n" + productos.map(producto => `${producto.nombre} - $${producto.precio}`).join("\n"));
}

function obtenerSeleccion (){
    let seleccion = prompt("Deseas comprar algún producto en nuestra tienda M&T? si / no").toLowerCase();

    while (seleccion !== "si" && seleccion !== "no"){
        alert("Por favor, ingresá una respuesta válida: si / no");
        seleccion = prompt("Deseas comprar algún producto en nuestra tienda M&T? si / no").toLowerCase();
    }

    return seleccion;
}

function obtenerProductoYPrecio (){
    const producto = prompt("Agrega un producto a tu carrito");
    const productoEncontrado = productos.find(p => p.nombre.toLowerCase() === producto.toLowerCase());

    if (productoEncontrado){
        const unidades = parseInt(prompt(`¿Cuantas unidades del ${producto} quieres llevar?`));

        if (!IsNaN(unidades) && unidades > 0){
            return {producto: productoEncontrado, unidades};
        }
    }

    alert("El producto ingresado no es válido.");
    return null;
}

function agregarAlCarrito (producto, unidades){
    carritoDeCompras.push({ producto: producto.nombre, unidades, precio: producto.precio});
    console.log("Producto agregado al carrito: ", producto.nombre, "Unidades: ", unidades);
}

function mostrarCarrito(){
    console.log("Carito de compras:");
    carritoDeCompras.forEach((item) =>{
        console.log(`Producto: ${item.producto} - Unidades ${item.unidades} - Total a pagar por producto: $${item.unidades * item.precio}`);
    });
}

function calcularTotal (){
    const total = carritoDeCompras.reduce((acc, item) => acc + item.precio * item.unidades, 0);
    alert(`El total a pagar por tu compra es $${total}`);
    console.log(`El total a pagar por tu compra es $${total}`);
}

function simularCompra (){
    let seleccion = obtenerSeleccion();

    if(seleccion === "si"){
        mostrarProductos();
    } else {
        alert("Te esperamos en tu próxima visita. ¡Que tengas un buen día!");
        console.log("El usuario decidió no comprar ningún producto.");
        return;
    }

    while (seleccion !== "no"){
        const productoYPrecio = obtenerProductoYPrecio();

        if (productoYPrecio){
            agregarAlCarrito(productoYPrecio.producto, productoYPrecio.unidades);
        }

        seleccion = prompt("¿Quieres agregar un nuevo producto? si/ no").toLowerCase;
    }

    mostrarCarrito();
    calcularTotal();
}

simularCompra();