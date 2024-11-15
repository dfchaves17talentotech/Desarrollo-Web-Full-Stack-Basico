import {fetchContinentData, getDataContinents} from "./continents.js";
import {fetchProjectsData, getDataProjects} from "./projects.js";
import { formSubmit } from "./contact.js";

window.addEventListener('load', async () => {
    const continentData = await getDataContinents();
    const projectsData = await getDataProjects();
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', formSubmit);
    await fetchProjectsData(projectsData);
    await fetchContinentData(continentData);
});
