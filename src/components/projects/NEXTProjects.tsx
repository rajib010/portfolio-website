import { NEXTProjects } from "@/config";
import CommonProjectCard from "../CommonCard";
import React from "react";

export const NEXTProjectsComponent = () => {

    return (
        <CommonProjectCard
            Information={NEXTProjects}
            Cardtitle="NextJs Projects"
        />
    )
}