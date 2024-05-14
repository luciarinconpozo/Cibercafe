const productos = [
    { id: 1, nombre: "Producto 1", precio: 100 }, // Definimos un array de productos con su ID, nombre y precio
    { id: 2, nombre: "Producto 2", precio: 50 },
];

const productosSeleccionados = []; // Array vacío para almacenar los productos seleccionados por el usuario

const subtotalElement = document.getElementById("resumen__subtotal"); // Muestra el subtotal
const envioElement = document.getElementById("resumen__envio"); // Muestra el costo de envío
const totalElement = document.getElementById("resumen__total"); // Muestra el total
const botonPagarElement = document.getElementById("resumen__boton-pagar"); // Botón "Pagar"

const agregarProducto = (productoId, cantidad) => { // Función para agregar un producto al carrito
    const producto = productos.find(producto => producto.id === productoId); // Busca el producto por su ID en el array de productos

    if (producto) { // Si el producto se encuentra
        const productoSeleccionado = productosSeleccionados.find( // Busca el producto en el array de productos seleccionados
            productoSelecionado => productoSelecionado.id === producto.id
        );

        if (productoSeleccionado) { // Si el producto ya está en el carrito
            productoSeleccionado.cantidad += cantidad; // Aumenta la cantidad del producto
        } else { // Si el producto no está en el carrito
            productosSeleccionados.push({ ...producto, cantidad }); // Agrega el producto al array con la cantidad especificada
        }

        actualizarResumen(); // Actualiza el resumen del carrito
    }
};

const actualizarResumen = () => { // Función para actualizar el resumen del carrito
    let subtotal = 0; // Variable para almacenar el subtotal
    productosSeleccionados.forEach(producto => { // Recorre cada producto en el array de productos seleccionados
        let precioTotal = 0; // Inicializa el precio total del producto en 0
        subtotal += producto.precio * producto.cantidad; // Suma el precio del producto por su cantidad al subtotal
        precioTotal = 0; // Inicializa el precio total del producto en 0
        const precioTotalElement = document.querySelector(`[data-producto-id="${producto.id}"] .producto__precio-total`);
        precioTotalElement.textContent = precioTotal; // Muestra el precio total del producto
    });

    const envio = subtotal > 0 ? 5 : 0; // Calcula el costo de envío (fijo de 5€ si hay subtotal, 0€ si no)
    const total = subtotal + envio; // Calcula el total (subtotal + envío)

    subtotalElement.textContent = subtotal; // Muestra el subtotal actualizado
    envioElement.textContent = envio; // Muestra el costo de envío actualizado
    totalElement.textContent = total; // Muestra el total actualizado

    botonPagarElement.disabled = subtotal === 0; // Habilita o deshabilita el botón "Pagar" según haya o no productos en el carrito
};

const botonesAgregar = document.querySelectorAll(".producto__boton-agregar"); // Selecciona todos los botones "Agregar"

botonesAgregar.forEach(boton => { // Recorre cada botón "Agregar"
    boton.addEventListener("click", () => { // Agrega un event listener al clic del botón
        const productoId = parseInt(boton.parentNode.parentNode.dataset.productoId); // Obtiene el ID del producto
        const cantidadInput = boton.parentNode.querySelector(".producto__cantidad"); // Obtiene el input de cantidad
        const cantidad = parseInt(cantidadInput.value); // Obtiene la cantidad seleccionada

        agregarProducto(productoId, cantidad); // Llama a la función para agregar el producto al carrito
    });
});

botonPagarElement.addEventListener("click", () => { // Agrega un event listener al clic del botón "Pagar"
    alert("¡Gracias por tu compra!"); // Muestra una alerta de confirmación
    productosSeleccionados.length = 0; // Vacía el array de productos seleccionados
    actualizarResumen(); // Actualiza el resumen del carrito
});

// Actualiza el resumen al cargar la página para asegurarse de que el precio total comience en 0
actualizarResumen();
