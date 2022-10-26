import projects from '../content/projects.json';

export const getAllProjects = () => {
    return projects.reverse();
}

export const getFeaturedProjects = () => {
    return projects.filter((project) => project.featured);
}

export const getProjectsByCategory = (category) => {
    return projects.filter((project) => project.categories.includes(category)).reverse();
};

export const getProjectById = (id) => {
    return projects.find((project) => project.id === id);
}

export const getProjectByIds = (ids) => {
    return projects.filter((project) => ids.includes(project.id));
}

export const getProjectBySlug = (slug) => {
    return projects.find((project) => project.slug === slug);
}

export const getProjectsInReel = () => {
    return getProjectByIds([1, 2, 3, 4]);
}