window.addEventListener('load', ()=>{
    const scroll = document.getElementById('scrollDiv');

    scroll.addEventListener('scroll', ()=>{
        console.log('Estoy haciendo scroll');
    });
});