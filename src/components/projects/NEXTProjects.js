import { NEXTProjects } from "@/config";
import CommonProjectCard from "../CommonCard";
import React from "react";
export const NEXTProjectsComponent = () => {
    return (React.createElement(CommonProjectCard, { Information: NEXTProjects, Cardtitle: "NextJs Projects" }));
};
