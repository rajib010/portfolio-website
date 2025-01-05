import React from "react";
import Skills from "@/components/TechnicalSkills";
import IntroContent from "@/components/Introcontent";
import OtherSkills from "@/components/OtherSkills";
import CVSection from "@/components/CV";

function Home() {
  return (
    <main className="w-full bg-gray-100 p-4 center mt-[5rem] flex flex-col gap-7">
      <IntroContent />
      <Skills />
      <OtherSkills />
      <CVSection />
    </main>
  );
}

export default Home;
