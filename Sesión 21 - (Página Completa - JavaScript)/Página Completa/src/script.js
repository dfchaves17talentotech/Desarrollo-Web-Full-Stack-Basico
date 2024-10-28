import {fetchContinentData} from "./continents.js";
import {fetchProjectsData} from "./projects.js";
import { formSubmit } from "./contact.js";


const continentData = '[{"continentName": "America","continentCoverage": 17},{"continentName": "Asia","continentCoverage": 45},{ "continentName": "Europa","continentCoverage": 10}]';
const projectsData = '[{"projectName":"Consultoria", "projectImage":"https://images.unsplash.com/photo-1484807352052-23338990c6c6"},{"projectName":"Desarrollo de Software", "projectImage":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"},{"projectName":"Estrategia de TI", "projectImage":"https://images.unsplash.com/photo-1483058712412-4245e9b90334"},{"projectName":"Transformación Digital", "projectImage":"https://images.unsplash.com/photo-1649406458887-2b6561c36a4d"},{"projectName":"Inteligencia Artificial", "projectImage":"https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"},{"projectName":"Data Science", "projectImage":"https://images.unsplash.com/photo-1599658880436-c61792e70672"}]';
fetchContinentData(continentData);
fetchProjectsData(projectsData);

window.addEventListener('load', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', formSubmit);
});
