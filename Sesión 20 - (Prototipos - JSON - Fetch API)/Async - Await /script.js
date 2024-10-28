const fetchData = async (params) => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        if(!response.ok){
            throw new Error('La respuesta de la red no esta bien.');
        }
        console.log(response.status);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

fetchData();
