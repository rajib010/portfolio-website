import React from 'react';
import { ProfessionalExperience } from '@/config';
import { Card } from './ui/card';
const ExperienceComponent = () => {
    return (React.createElement("div", { className: "container mt-5" },
        React.createElement("h1", { className: "text-left text-3xl font-bold mb-5 ml-16" }, "Professional Experience"),
        React.createElement("div", { className: "w-[90%] mx-auto grid grid-cols-3 md:grid-cols-4 gap-4" }, ProfessionalExperience && ProfessionalExperience.map((item) => (React.createElement(Card, { key: item.id, className: "rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1" },
            React.createElement("div", { className: "center mb-2" },
                React.createElement("img", { src: item.pic, alt: "item-pic", className: "w-12 h-12" })),
            React.createElement("h2", { className: "font-semibold text-xl" },
                " ",
                item.label)))))));
};
export default ExperienceComponent;
