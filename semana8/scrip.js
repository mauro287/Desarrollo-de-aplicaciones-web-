//Guardamos los elementos en variables para usarlos después
const boton = document.getElementById("alertButton");
const formulario = document.getElementById("contactForm");

//Programamos el clic del botón
boton.onclick = () => {
    alert("¡Hola! Esta es tu alerta");
};

//Programamos qué pasa al enviar el formulario
formulario.onsubmit = (event) => {
    event.preventDefault(); 

    alert("Formulario enviado correctamente");
    formulario.reset();
};