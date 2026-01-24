// Arreglo inicial de productos
let productos = [
    { nombre: "Tequila Don Isaac", precio: 15, descripcion: "Tequila artesanal ecuatoriano" },
    { nombre: "Vino Tinto", precio: 12, descripcion: "Vino natural de uva" },
    { nombre: "Cerveza Artesanal", precio: 5, descripcion: "Cerveza hecha en casa" }
];

const lista = document.getElementById("listaProductos");
const btnAgregar = document.getElementById("btnAgregar");

// Función para mostrar productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
            <hr>
        `;
        lista.appendChild(li);
    });
}

// Mostrar productos al cargar la página
renderizarProductos();

// Evento para agregar producto
btnAgregar.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Nuevo Producto",
        precio: 10,
        descripcion: "Producto agregado dinámicamente"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});
