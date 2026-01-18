const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");

// Validar nombre
nombre.addEventListener("input", function () {
    if (nombre.value.length < 3) {
        errorNombre.textContent = "Mínimo 3 caracteres";
        nombre.className = "invalido";
    } else {
        errorNombre.textContent = "";
        nombre.className = "valido";
    }
    validarTodo();
});

// Validar correo
correo.addEventListener("input", function () {
    if (!correo.value.includes("@")) {
        errorCorreo.textContent = "Correo incorrecto";
        correo.className = "invalido";
    } else {
        errorCorreo.textContent = "";
        correo.className = "valido";
    }
    validarTodo();
});

// Validar contraseña
password.addEventListener("input", function () {
    if (password.value.length < 8) {
        errorPassword.textContent = "Mínimo 8 caracteres";
        password.className = "invalido";
    } else {
        errorPassword.textContent = "";
        password.className = "valido";
    }
    validarTodo();
});

// Confirmar contraseña
confirmar.addEventListener("input", function () {
    if (confirmar.value !== password.value) {
        errorConfirmar.textContent = "No coinciden";
        confirmar.className = "invalido";
    } else {
        errorConfirmar.textContent = "";
        confirmar.className = "valido";
    }
    validarTodo();
});

// Validar edad
edad.addEventListener("input", function () {
    if (edad.value < 18) {
        errorEdad.textContent = "Debe ser mayor de 18";
        edad.className = "invalido";
    } else {
        errorEdad.textContent = "";
        edad.className = "valido";
    }
    validarTodo();
});

// Validar todo
function validarTodo() {
    if (
        nombre.className === "valido" &&
        correo.className === "valido" &&
        password.className === "valido" &&
        confirmar.className === "valido" &&
        edad.className === "valido"
    ) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
}

// Enviar formulario
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente");
});
