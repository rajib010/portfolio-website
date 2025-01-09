import React, { useState } from "react";
import { REACTMINIPROJECTS } from "@/config";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ReactMiniProjectsComponent = () => {
    const [showSheet, setShowSheet] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const openSheet = (project: any) => {
        setSelectedProject(project);
        setShowSheet(true);
    };

    const closeSheet = () => {
        setShowSheet(false);
        setSelectedProject(null);
    };

    return (
        <div className="container">
            <h1 className="text-left text-2xl font-bold my-5 ml-6 md:ml-11 lg:ml-16">React Mini Projects</h1>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                {REACTMINIPROJECTS.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="rounded-lg p-4 text-center cursor-pointer shadow-xl transition hover:-translate-y-1"
                        >
                            <div className="center mb-2">
                                <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                            </div>
                            <h2 className="font-bold text-[17px] md:text-lg">{item.label}</h2>
                            <p className="my-1 text-[16px] md:text-lg line-clamp-3">
                                {item.description}
                            </p>
                            <button
                                className="text-sm text-blue-600 underline mt-2 ml-2"
                                onClick={() => openSheet(item)}
                            >
                                View More Details
                            </button>

                        </Card>
                    );
                })}
            </div>

            {/* Sheet Component */}
            {showSheet && selectedProject && (
                <div className="fixed top-12 md:top-6 lg:top-0  left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg w-[80%] max-w-4xl">
                        <h2 className="text-2xl font-semibold">{selectedProject.label}</h2>
                        <div className="my-4">
                            <img
                                src={selectedProject.pic}
                                alt="project-pic"
                                className="w-32 h-32 object-cover mx-auto mb-4"
                            />
                            <p>{selectedProject.description}</p>
                        </div>
                        <div className="flex justify-between">
                            <Link
                                to={selectedProject.github}
                                className="text-blue-800 underline"
                                target="_blank"
                            >
                                View on GitHub
                            </Link>
                            <button
                                className="text-red-500"
                                onClick={closeSheet}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReactMiniProjectsComponent;
