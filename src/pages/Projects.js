import MERNProjectsComponent from '@/components/projects/MERNProjects';
import { NEXTProjectsComponent } from '@/components/projects/NEXTProjects';
import PHPProjectsComponent from '@/components/projects/PHPProjects';
import ReactMiniProjectsComponent from '@/components/projects/ReactMiniProjects';
import React from 'react';
const Projects = () => {
    return (React.createElement("main", { className: "w-full p-4 center my-[7rem] flex flex-col gap-7" },
        React.createElement(MERNProjectsComponent, null),
        React.createElement(ReactMiniProjectsComponent, null),
        React.createElement(NEXTProjectsComponent, null),
        React.createElement(PHPProjectsComponent, null)));
};
export default Projects;
