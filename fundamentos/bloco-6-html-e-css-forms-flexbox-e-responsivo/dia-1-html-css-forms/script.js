function formSubmit(event) {
    event.preventDeafult();
    alert('Formulario Submetido!');
}

function loadApp() {
    const form = document.getElementById('send');
    form.addEventListener('click', formSubmit);
}

window.addEventListener('load', loadApp);