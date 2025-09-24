const colorPicker = document.getElementById('myColorPicker');
const changeColorBtn = document.getElementById('bgcolor-btn');
const body = document.body;
const html = document.documentElement;

changeColorBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Previene que la pagina se recargue sola
    const selectedColor = colorPicker.value; // Obtiene el color seleccionado
    body.style.backgroundColor = selectedColor; // Cambia el color de fondo del body
    html.style.backgroundColor = selectedColor; // Cambia el color de fondo del html también
});