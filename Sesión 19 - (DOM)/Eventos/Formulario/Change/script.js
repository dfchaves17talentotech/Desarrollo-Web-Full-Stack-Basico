window.addEventListener('load', ()=>{
    const select = document.getElementById('mySelect');

    select.addEventListener('change', (event)=>{
        console.log('El valor del option es: ', event.target.value);
        select.setAttribute('disabled','');
    });

});