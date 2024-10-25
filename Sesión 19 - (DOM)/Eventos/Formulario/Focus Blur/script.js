window.addEventListener('load', ()=>{
    const input = document.getElementById('myInput');

    input.addEventListener('focus', ()=>{
        console.log('Es text field esta enfocado');
    });

    input.addEventListener('blur', ()=>{
        console.log('Es text field esta desenfocado');
    });
});