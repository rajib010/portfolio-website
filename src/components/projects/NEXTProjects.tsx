import { NEXTProjects } from "@/config";
import CommonProjectCard from "../CommonCard";
import React from "react";
import { useTranslation } from "react-i18next";

export const NEXTProjectsComponent = () => {
const {t} = useTranslation()
    return (
        <CommonProjectCard
            Information={NEXTProjects}
            Cardtitle={`Next JS ${t('projects')}` }
        />
    )
}