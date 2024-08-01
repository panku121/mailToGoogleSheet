const scriptURL = 'https://script.google.com/macros/s/AKfycbwO0dv7711s7NgBdhc_gwyuVKNcLLd6KwXMNBggQb-mnQE9jVS0PndTmOpX53i7rPbU/exec';
const form = document.forms['contact-form']

form.addEventListener( 'submit', e=>{
    e.preventDefault()
    fetch( scriptURL, { method: 'POST', body: new FormData(form) } )
    .then( response => alert( "Thank you! Your form is submitted successfully." ) )
    .then( () => { window.location.reload(); } )
    .catch( error => console.error( 'Error!', error.message ) )
} )