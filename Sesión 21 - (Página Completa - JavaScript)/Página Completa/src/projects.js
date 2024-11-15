const componentProjects = (projectName, imageBackground) => {

    const portfolioProject = document.createElement('div');
    const portfolioProjectName = document.createElement('h2');

    portfolioProject.setAttribute('class', 'portfolio_project');
    portfolioProject.style.backgroundImage = `url(${imageBackground})`;
    portfolioProjectName.setAttribute('class', 'portfolio_project-name');
    portfolioProjectName.textContent = projectName;

    portfolioProject.appendChild(portfolioProjectName);

    const listOfProjects = document.getElementById('projectContainer');
    listOfProjects.appendChild(portfolioProject);
}; 

/**
 * Load Data and Components.
 * @param {*} projectsDataPayload 
 */
export const fetchProjectsData = (projectsDataPayload) => {
    if(projectsDataPayload.length > 0 ){
        projectsDataPayload.forEach(project => {
            componentProjects(project.projectName, project.projectImage);
        });
    }
};

export const getDataProjects = async () => {
    try {
        let response = await fetch('http://localhost:3000/api/projects');
        return await response.json();
    } catch (error) {
        console.error('Hubo un error');
    }
}