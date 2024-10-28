
const promesaCumplida = new Promise((resolve, reject) => {
    let jsonString = '{"title":"El Agosto Nos Vemos","author":"Gabriel Garcia Marquez","year":2024,"genres":["Novel","Fiction"]}';
    setTimeout(() => {
        if (jsonString.length>0) {
            resolve(jsonString);
        } else {
            reject('Promesa Rechazada');
        }
    }, 2000);
});

promesaCumplida
    .then(message => {
        let book = JSON.parse(message);
        console.log(book);
    })
    .catch(error => {
        console.error(error);
    });