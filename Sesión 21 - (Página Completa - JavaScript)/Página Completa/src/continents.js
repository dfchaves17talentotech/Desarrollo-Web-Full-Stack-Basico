/**
 * Create continent in DOM HTML
 * @param {*} name 
 * @param {*} percent 
 */
const componentContinents = async (name, percent) => {
    const listItem = document.createElement('li');
    const loadBar = document.createElement('div');
    const bar = document.createElement('div');
    const spanName = document.createElement('span');
    const textNode = document.createTextNode(name.toUpperCase());
    const percentNode = document.createTextNode(`${percent}%`)

    listItem.setAttribute('class', 'location_continents');
    loadBar.setAttribute('class', 'load_bar');
    bar.setAttribute('class', 'load_bar-bar');
    bar.setAttribute('style', `width:${percent}%`);

    bar.appendChild(percentNode);
    loadBar.appendChild(bar);
    spanName.appendChild(textNode);
    listItem.appendChild(loadBar);
    listItem.appendChild(spanName);
    const listOfContinents = document.getElementById('listOfContinents');
    listOfContinents.appendChild(listItem);
};

/**
 * Load Data and Components.
 * @param {*} continentDataPayload 
 */
export const fetchContinentData = async (continentDataPayload) => {
    if(continentDataPayload.length > 0 ){
        continentDataPayload.forEach(continent => {
            componentContinents(continent.continentName, continent.continentCoverage);
        });
    }
};

export const getDataContinents = async () => {
    try {
        let response = await fetch('http://localhost:3000/api/continents');
        return await response.json();
    } catch (error) {
        console.error('Hubo un error');
    }
}