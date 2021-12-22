import React from 'react';
import Card from '../Card';

function Project () {
    const projects = [
        {title: "1", description: "1"},
        {title: "2"},
        {title: "3"},
        {title: "4"}
    ]
    return (
        <div>{projects.map((project) => (
            <Card
            title = {project.title}
            description = {project.description}
            ></Card>
        ))}</div>
    )
}

export default Project;