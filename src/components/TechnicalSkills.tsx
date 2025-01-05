import React from "react";

import { TechnicalSkillsInfo } from "@/config";
import { Card } from "@/components/ui/card";

const TechnincalSkills = () => {
    return (
        <div className="container">
            <h1 className="text-center text-3xl font-bold mb-5">Technical Skills</h1>
            <div className="w-[90%] mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {TechnicalSkillsInfo.map((item) => (
                    <Card key={item.id}
                        className="rounded-lg p-4 text-center cursor-pointer shadow-xl tansistion hover:-translate-y-1">
                        <div className="center mb-2">
                            <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                        </div>
                        <h2 className="font-semibold text-xl"> {item.title}</h2>
                        <p className="my-1">{item.content}</p>
                        <p className="italic">Projects: {item.projects}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TechnincalSkills;
