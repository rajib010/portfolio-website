import React from 'react';
import { EducationalBackground } from '@/config';
import { Card } from './ui/card';
const EducationalBackgroundComponent = () => {
    return (React.createElement("div", { className: "container mt-5" },
        React.createElement("h1", { className: "text-left text-2xl font-bold mb-5 ml-16" }, "Educational Background"),
        React.createElement("div", { className: "w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4" }, EducationalBackground && EducationalBackground.map((item) => (React.createElement(Card, { key: item.id, className: "rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1" },
            React.createElement("div", { className: "center mb-2" },
                React.createElement("img", { src: item.pic, alt: "item-pic", className: "w-12 h-12" })),
            React.createElement("h2", { className: "font-bold text-sm md:text-xl" },
                " ",
                item.label),
            React.createElement("p", { className: "italic text-sm md:text-lg" }, item.year),
            React.createElement("p", { className: "my-1 text-sm md:text-lg" }, item.value),
            React.createElement("p", { className: "my-1 text-sm md:text-lg" }, item.location)))))));
};
export default EducationalBackgroundComponent;
