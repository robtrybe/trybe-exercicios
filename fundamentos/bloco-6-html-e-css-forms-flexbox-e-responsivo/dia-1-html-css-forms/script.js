function formSubmit(event) {
    event.preventDefault();
    alert('Envio de Formulário Abortado!!');
}

function loadApp() {
    const form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', formSubmit);
}

window.addEventListener('load', loadApp);