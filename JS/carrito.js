// Definimos un array de productos con su ID, nombre y precio
const productos = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 50 },
];

// Array vacío para almacenar los productos seleccionados por el usuario
const productosSeleccionados = [];

// Elementos del DOM
const subtotalElement = document.getElementById("resumen__subtotal"); // Muestra el subtotal
const envioElement = document.getElementById("resumen__envio"); // Muestra el costo de envío
const totalElement = document.getElementById("resumen__total"); // Muestra el total
const botonReservarElement = document.getElementById("resumen__boton-comprar"); // Botón "Reservar Entradas"
const botonesAgregar = document.querySelectorAll(".producto__boton-agregar"); // Selecciona todos los botones "Agregar"
const botonesResetear = document.querySelectorAll(".producto_boton-resetear"); // Selecciona todos los botones "Resetear"

// Función para actualizar el precio total del producto
const actualizarPrecioTotal = (productoId) => {
    const productoSeleccionado = productosSeleccionados.find(producto => producto.id === productoId); // Busca el producto seleccionado
    const cantidad = productoSeleccionado ? productoSeleccionado.cantidad : 0; // Obtiene la cantidad del producto seleccionado (o 0 si no está seleccionado)
    const precioUnitario = productos.find(producto => producto.id === productoId).precio; // Obtiene el precio unitario del producto
    const precioTotalElement = document.querySelector(`[data-producto-id="${productoId}"] .producto__precio-total`); // Selecciona el elemento del precio total del producto
    precioTotalElement.textContent = precioUnitario * cantidad; // Calcula y actualiza el precio total del producto
};

// Función para actualizar el resumen del carrito
const actualizarResumen = () => {
    let subtotal = 0; // Variable para almacenar el subtotal

    productosSeleccionados.forEach(producto => { // Recorre cada producto en el array de productos seleccionados
        subtotal += producto.precio * producto.cantidad; // Calcula el subtotal sumando el precio total de cada producto
    });

    const envio = subtotal > 0 ? 5 : 0; // Calcula el costo de envío (fijo de 5€ si hay subtotal, 0€ si no)
    const total = subtotal + envio; // Calcula el total (subtotal + envío)

    subtotalElement.textContent = subtotal; // Muestra el subtotal actualizado
    envioElement.textContent = envio; // Muestra el costo de envío actualizado
    totalElement.textContent = total; // Muestra el total actualizado

    botonReservarElement.disabled = subtotal === 0; // Habilita o deshabilita el botón "Pagar" según haya o no productos en el carrito
};

// Función para agregar un producto al carrito
const agregarProducto = (productoId, cantidad) => {
    const producto = productos.find(producto => producto.id === productoId); // Busca el producto por su ID en el array de productos

    if (producto) { // Si el producto se encuentra
        let productoSeleccionado = productosSeleccionados.find(producto => producto.id === productoId); // Busca el producto en el array de productos seleccionados

        if (productoSeleccionado) { // Si el producto ya está en el carrito
            productoSeleccionado.cantidad = cantidad; // Actualiza la cantidad del producto
        } else { // Si el producto no está en el carrito
            productoSeleccionado = { ...producto, cantidad }; // Crea un nuevo objeto producto seleccionado
            productosSeleccionados.push(productoSeleccionado); // Agrega el producto al array de productos seleccionados
        }

        actualizarPrecioTotal(productoId); // Actualiza el precio total del producto
        actualizarResumen(); // Actualiza el resumen del carrito
    }
};

// Agrega event listener al hacer clic en los botones "Agregar"
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        const productoId = parseInt(boton.parentNode.parentNode.dataset.productoId); // Obtiene el ID del producto
        const cantidadInput = boton.parentNode.querySelector(".producto__cantidad"); // Obtiene el input de cantidad
        const cantidad = parseInt(cantidadInput.value); // Obtiene la cantidad seleccionada

        agregarProducto(productoId, cantidad); // Llama a la función para agregar el producto al carrito
    });
});

// Agrega event listener al hacer clic en los botones "Resetear"
botonesResetear.forEach(boton => {
    boton.addEventListener("click", () => {
        const productoId = parseInt(boton.parentNode.parentNode.dataset.productoId); // Obtiene el ID del producto
        const productoIndex = productosSeleccionados.findIndex(producto => producto.id === productoId); // Busca el índice del producto seleccionado en el array de productos seleccionados

        if (productoIndex !== -1) { // Si se encuentra el producto en el carrito
            productosSeleccionados.splice(productoIndex, 1); // Elimina el producto seleccionado del carrito
            const precioTotalElement = document.querySelector(`[data-producto-id="${productoId}"] .producto__precio-total`); // Selecciona el elemento del precio total del producto
            const cantidadElement = boton.parentNode.querySelector(".producto__cantidad"); // Selecciona el elemento de cantidad del producto
            precioTotalElement.textContent = '0'; // Reinicia el precio total del producto
            cantidadElement.value = '0'; // Reinicia la cantidad del producto
            actualizarResumen(); // Actualiza el resumen del carrito
        }
    });
});

botonReservarElement.addEventListener("click", () => { // Agrega un event listener al clic del botón "Pagar"
    productosSeleccionados.length = 0; // Vacía el array de productos seleccionados
    actualizarResumen(); // Actualiza el resumen del carrito
});

// Actualiza el resumen al cargar la página para asegurarse de que el precio total comience en 0
actualizarResumen();
