/**
 * Create continent in DOM HTML
 * @param {*} name 
 * @param {*} percent 
 */
const componentContinents = (name, percent) => {
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

    window.addEventListener('load', ()=> {
        const listOfContinents = document.getElementById('listOfContinents');
        listOfContinents.appendChild(listItem);
    });
};

/**
 * Load Data and Components.
 * @param {*} continentDataPayload 
 */
export const fetchContinentData = (continentDataPayload) => {
    const data = JSON.parse(continentDataPayload);
    if(data.length > 0 ){
        data.forEach(continent => {
            componentContinents(continent.continentName, continent.continentCoverage);
        });
    }
};