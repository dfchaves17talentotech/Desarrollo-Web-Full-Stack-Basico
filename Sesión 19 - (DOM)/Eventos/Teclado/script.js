window.addEventListener('load', ()=>{

    const inputText = document.getElementById('inputTextField');

    inputText.addEventListener(('keydown'),(event)=>{
        console.log('Evento del Teclado DOWN', event.key);
    });

    inputText.addEventListener(('keyup'),(event)=>{
        console.log('Evento del Teclado UP', event.key);
    });

    inputText.addEventListener(('keypress'),(event)=>{
        console.log('Evento del Teclado PRESS', event.key);
    });
});