import React, { useState } from "react";
import { PHPProjects } from "@/config";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PHPProjectsComponent = () => {
    const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

    const toggleExpand = (id: number) => {
        setExpandedCards((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className="container">
            <h1 className="text-left text-3xl font-bold my-5 ml-16">PHP PROJECTS</h1>
            <div className="w-[90%] mx-auto grid grid-cols-3 md:grid-cols-4 gap-4">
                {PHPProjects.map((item) => {
                    const isExpanded = expandedCards[item.id] || false;
                    return (
                        <Card
                            key={item.id}
                            className="rounded-lg p-4 text-center cursor-pointer shadow-xl transition hover:-translate-y-1"
                        >
                            <div className="center mb-2">
                                <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                            </div>
                            <h2 className="font-semibold text-xl">{item.label}</h2>
                            <Link
                                to={item.github}
                                className="text-sm text-blue-800 underline cursor-pointer"
                                target="_blank"
                            >
                                View on GitHub
                            </Link>
                            <p className={`my-1 ${isExpanded ? "" : "line-clamp-3"}`}>
                                {item.description}
                            </p>
                            {isExpanded && (
                                <p className="text-sm">
                                    <span className="font-bold">Technologies Used</span>:{" "}
                                    {item.technologies}
                                </p>
                            )}

                            <button
                                className="text-sm text-blue-600 underline mt-2"
                                onClick={() => toggleExpand(item.id)}
                            >
                                {isExpanded ? "Show Less" : "More"}
                            </button>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default PHPProjectsComponent;
