import React from "react";
import { TechnicalSkillsInfo } from "@/config";
import { Card } from "@/components/ui/card";
const TechnincalSkills = () => {
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", { className: "text-center text-3xl font-bold mb-5" }, "Technical Skills"),
        React.createElement("div", { className: "w-[90%] mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" }, TechnicalSkillsInfo.map((item) => (React.createElement(Card, { key: item.id, className: "rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1" },
            React.createElement("div", { className: "center mb-2" },
                React.createElement("img", { src: item.pic, alt: "item-pic", className: "w-12 h-12" })),
            React.createElement("h2", { className: "font-semibold text-xl" },
                " ",
                item.title),
            React.createElement("p", { className: "my-1" }, item.content),
            React.createElement("p", { className: "italic" },
                "Projects: ",
                item.projects)))))));
};
export default TechnincalSkills;
