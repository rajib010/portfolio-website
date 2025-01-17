import React from 'react';
import EducationalBackgroundComponent from '@/components/about/EducationalBackgroud';
import ExperienceComponent from '@/components/about/ExperienceCard';
import CVSection from '@/components/home/CV';
const About = () => {
    return (React.createElement("main", { className: "w-full bg-gray-100 p-4 center mt-[5rem] flex flex-col gap-7" },
        React.createElement(EducationalBackgroundComponent, null),
        React.createElement(ExperienceComponent, null),
        React.createElement(CVSection, null)));
};
export default About;
