import React from "react";
import Skills from "@/components/home/TechnicalSkills";
import OtherSkills from "@/components/home/OtherSkills";
import CVSection from "@/components/home/CV";
import IntroContent from "@/components/home/IntroContent";
function Home() {
    return (React.createElement("main", { className: "w-full p-4 center mt-[7rem] flex flex-col gap-7" },
        React.createElement(IntroContent, null),
        React.createElement(Skills, null),
        React.createElement(OtherSkills, null),
        React.createElement(CVSection, null)));
}
export default Home;
