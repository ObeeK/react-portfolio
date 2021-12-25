import React from 'react';
import Card from '../Card';


function Project () {
    const projects = [
        {title: "Run Buddy", description: "A static webpage for a personal training business", link: "https://obeek.github.io/run-buddy/"},
        {title: "HoriSEOn", description: "Refactor for an SEO company", link: "https://obeek.github.io/horiseon/" },
        {title: "Over The Hill", description: "A full stack group project - forum focused on retro-gaming.", link: "https://github.com/madileesmith/gaming-forum"},
        {title: "El Buen Sabor", description: "Front-End group project - a recipe app.", link: "https://obeek.github.io/el-buen-sabor"}
    ]
    return (
        
        <div>{projects.map((project) => (
            <Card
            title = {project.title}
            description = {project.description}
            link = {project.link}
            >
            </Card>
        ))}</div>
    )
}

export default Project;