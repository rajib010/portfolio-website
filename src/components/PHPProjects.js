import React, { useState } from "react";
import { PHPProjects } from "@/config";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
const PHPProjectsComponent = () => {
    const [showSheet, setShowSheet] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const openSheet = (project) => {
        setSelectedProject(project);
        setShowSheet(true);
    };
    const closeSheet = () => {
        setShowSheet(false);
        setSelectedProject(null);
    };
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", { className: "text-left text-2xl font-bold my-5 ml-6 md:ml-11 lg:ml-16" }, "PHP Projects"),
        React.createElement("div", { className: "w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4" }, PHPProjects.map((item) => {
            return (React.createElement(Card, { key: item.id, className: "rounded-lg p-4 text-center cursor-pointer shadow-xl transition hover:-translate-y-1" },
                React.createElement("div", { className: "center mb-2" },
                    React.createElement("img", { src: item.pic, alt: "item-pic", className: "w-12 h-12" })),
                React.createElement("h2", { className: "font-bold text-[17px] md:text-lg" }, item.label),
                React.createElement("p", { className: "my-1 text-[16px] md:text-lg line-clamp-3" }, item.description),
                React.createElement("button", { className: "text-sm text-blue-600 underline mt-2 ml-2", onClick: () => openSheet(item) }, "View More Details")));
        })),
        showSheet && selectedProject && (React.createElement("div", { className: "fixed top-12 md:top-6 lg:top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50" },
            React.createElement("div", { className: "bg-white p-8 rounded-lg w-[80%] max-w-4xl" },
                React.createElement("h2", { className: "text-2xl font-semibold" }, selectedProject.label),
                React.createElement("div", { className: "my-4" },
                    React.createElement("img", { src: selectedProject.pic, alt: "project-pic", className: "w-32 h-32 object-cover mx-auto mb-4" }),
                    React.createElement("p", null, selectedProject.description),
                    React.createElement("p", { className: "mt-2" },
                        React.createElement("span", { className: "font-bold " }, "Technologies: "),
                        selectedProject.technologies)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement(Link, { to: selectedProject.github, className: "text-blue-800 underline", target: "_blank" }, "View on GitHub"),
                    React.createElement("button", { className: "text-red-500", onClick: closeSheet }, "Close")))))));
};
export default PHPProjectsComponent;
