function fetchData (callback) {
    setTimeout(()=>{
        const data = {name: "Juan", age: 30};
        callback(data);
    }, 5000);
};

fetchData((data)=>{
    console.log(data);
});