//? Proyecto Final - JavaScript - Octubre 2023

let botonMagico = document.getElementById("botonMagico");
botonMagico.addEventListener("click", (e) =>{
    Swal.fire({
        title: '¿Deseas confirmar tu compra?',
        iconColor: 'yellowgreen',
        icon: 'question',
        confirmButtonText: 'Si',
        showCancelButton: true,
        cancelButtonText: 'No'
    });
})

