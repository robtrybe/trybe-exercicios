function formSubmit(event) {
    event.preventDefault();
    console.log('Formulario Submetido!');
}

function loadApp() {
    const form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', formSubmit);
}

window.addEventListener('load', loadApp);