const imageUrlInput = document.getElementById('imageUrl');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const gallery = document.getElementById('gallery');

let selectedImage = null;

// Función para agregar imagen
addBtn.addEventListener('click', () => {
    const url = imageUrlInput.value;

    if (url === "") {
        alert("Por favor, ingresa una URL válida.");
        return;
    }

    // Crear elemento img
    const newImg = document.createElement('img');
    newImg.src = url;
    newImg.alt = "Imagen de usuario";

    // Evento para seleccionar imagen
    newImg.addEventListener('click', () => {
        // Quitar selección previa
        if (selectedImage) {
            selectedImage.classList.remove('selected');
        }
        
        // Asignar nueva selección
        selectedImage = newImg;
        newImg.classList.add('selected');
    });

    gallery.appendChild(newImg);
    imageUrlInput.value = ""; // Limpiar input
});

// Función para eliminar imagen seleccionada
deleteBtn.addEventListener('click', () => {
    if (selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null; // Reiniciar variable
    } else {
        alert("Selecciona una imagen primero haciendo clic en ella.");
    }
});

// Extra: Atajo de teclado (Tecla 'Delete' o 'Backspace' para borrar)
document.addEventListener('keydown', (event) => {
    if (event.key === "Delete" && selectedImage) {
        deleteBtn.click();
    }
});