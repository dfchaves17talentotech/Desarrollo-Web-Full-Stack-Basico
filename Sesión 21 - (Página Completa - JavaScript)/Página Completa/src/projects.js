const componentProjects = (projectName, imageBackground) => {

    const portfolioProject = document.createElement('div');
    const portfolioProjectName = document.createElement('h2');

    portfolioProject.setAttribute('class', 'portfolio_project');
    portfolioProject.style.backgroundImage = `url(${imageBackground})`;
    portfolioProjectName.setAttribute('class', 'portfolio_project-name');
    portfolioProjectName.textContent = projectName;

    portfolioProject.appendChild(portfolioProjectName);

    window.addEventListener('load', ()=> {
        const listOfProjects = document.getElementById('projectContainer');
        listOfProjects.appendChild(portfolioProject);
    });
}; 

/**
 * Load Data and Components.
 * @param {*} projectsDataPayload 
 */
export const fetchProjectsData = (projectsDataPayload) => {
    const data = JSON.parse(projectsDataPayload);
    if(data.length > 0 ){
        data.forEach(project => {
            componentProjects(project.projectName, project.projectImage);
        });
    }
};